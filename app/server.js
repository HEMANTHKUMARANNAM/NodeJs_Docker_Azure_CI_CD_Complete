const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.text({ type: '*/*' })); // Accept raw text body

app.get('/', (req, res) => {
  res.send('Hello World! Node.js API is running inside a Docker container.');
});

app.get('/meow', (req, res) => {
  res.send('meow.');
});

app.post('/runpython', (req, res) => {
  const code = req.body;

  const python = spawn('python3', ['-u']); // -u for unbuffered output
  let output = '';
  let error = '';

  python.stdin.write(code);
  python.stdin.end();

  python.stdout.on('data', (data) => {
    output += data.toString();
  });

  python.stderr.on('data', (data) => {
    error += data.toString();
  });

  python.on('close', (code) => {
    if (code !== 0) {
      res.status(400).send(`Error:\n${error}`);
    } else {
      res.send(output);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
