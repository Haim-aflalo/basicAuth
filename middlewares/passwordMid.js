import { checkUser } from '../dal/commands.js';

function verifyUserMid(req, res, next) {
  try {
    const { username, password } = req.headers;
    const verify = checkUser(username, password);
    verify ? next() : res.send('Unauthorized');
  } catch (error) {
    console.error('error:', error);
  }
}

export { verifyUserMid };
