// import fs from 'fs';
import { checkMessage, messageSum } from '../utils/functions.js';

async function decodeMessage(req, res) {
  const { username, message } = req.body;
  // const users = JSON.parse(
  //   await fs.promises.readFile('./data/verifyUsers.json')
  // );

  // const user = users.findIndex((u) => u.username === username);
  // if (user !== -1) {
  const msgStatus = checkMessage(message);
  msgStatus === 1 ? res.send(messageSum(message)) : res.send('-1');
}
// }

export { decodeMessage };
