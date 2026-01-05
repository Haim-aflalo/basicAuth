import { supabase } from '../config/connection.js';
import { hashPassword, verifyPassword } from '../utils/functions.js';

const insertUser = async (username, password) => {
  const hashedPassword = await hashPassword(password);
  await supabase
    .from('users')
    .insert({ username: username, password: hashedPassword });
  return;
};

const checkUser = async (username, password) => {
  let checked = false;
  const { data: users } = await supabase
    .from('users')
    .select()
    .eq('username', username);
  console.log(users);
  for (let user of users) {
    checked = await verifyPassword(password, user.password);
  }
  return checked;
};

export { insertUser, checkUser };
