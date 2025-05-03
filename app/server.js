const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! Node.js API is running inside a Docker container.');
});

app.get('/meow', (req, res) => {
  res.send('Hi Working Cat! Meow!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
