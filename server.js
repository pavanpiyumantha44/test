import express from 'express'
import userRouter from './routes/user.js';
const app = express();

app.use('/',userRouter);


app.listen(5000);