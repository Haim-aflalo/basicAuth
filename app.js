import express from 'express';
import { userRouter } from './routes/userRoute.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/project', userRouter);

app.listen(port, function (err) {
  console.log('Server listening on Port', port);
});
