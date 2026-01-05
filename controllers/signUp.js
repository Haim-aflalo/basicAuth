import { insertUser } from '../dal/commands.js';

function signUpUser(req, res) {
  try {
    const { username, password } = req.body;
    insertUser(username, password);
    res.status(200).send('user registered successfully');
  } catch (error) {
    console.error('error:', error);
  }
}

export { signUpUser };
