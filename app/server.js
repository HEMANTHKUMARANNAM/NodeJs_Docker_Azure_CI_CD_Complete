const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World! Node.js API is running inside a Docker container.');
});

app.get('/meow', (req, res) => {
  res.send('meow.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
