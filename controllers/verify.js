import { checkUser } from '../dal/commands.js';

async function verifyUser(req, res) {
  try {
    const { username, password } = req.body;
    const verify = await checkUser(username, password);
    verify ? res.send('Verified') : res.send('Unauthorized');
  } catch (error) {
    console.error('error:', error);
  }
}

export { verifyUser };
