const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for JSON parsing (optional, useful for future POST requests)
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).send('Hello World! Node.js API is running inside a Docker container.');
});

// Custom endpoint
app.get('/meow', (req, res) => {
  res.status(200).send('Hi Working Cat! Meow!');
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unexpected error:', err);
  res.status(500).send('Internal Server Error');
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
