import express from 'express';
import userRouter from './routes/user.js';
const app = express();
const port = process.env.PORT || 3000;

app.use('/',userRouter);
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
