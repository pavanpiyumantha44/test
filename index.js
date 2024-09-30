import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
