import { connectMongo } from '../config/connection.js';
import { hashPassword, verifyPassword } from '../utils/functions.js';
import fs from 'fs';

const insertUser = async (username, password) => {
  const db = await connectMongo();
  const hashedPassword = await hashPassword(password);
  await db
    .collection('users')
    .insertOne({ username: username, password: hashedPassword });
  return;
};

const checkUser = async (username, password) => {
  const db = await connectMongo();
  const users = await db
    .collection('users')
    .find({ username: username })
    .toArray();
  for (let user of users) {
    const checked = await verifyPassword(password, user.password);
    if (checked) {
      fs.promises.writeFile(
        './data/verifyUsers.json',
        JSON.stringify({ username: user.username, status: true })
      );
      return checked;
    }
  }
  return false;
};

export { insertUser, checkUser };
