import express from 'express';
import { signUpUser } from '../controllers/signUp.js';
import { verifyUser } from '../controllers/verify.js';
import { decodeMessage } from '../controllers/decode.js';
import { verifyUserMid } from '../middlewares/passwordMid.js';

export const userRouter = express.Router();

userRouter.post('/signup', (req, res) => {
  signUpUser(req, res);
});

userRouter.post('/verify', (req, res) => {
  verifyUser(req, res);
});

userRouter.post('/decode', verifyUserMid, (req, res) => {
  decodeMessage(req, res);
});
