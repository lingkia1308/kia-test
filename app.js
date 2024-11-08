const express = require('express');
const app = express();
const port = 80;

// Simple route to respond with "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server and listen on port 3000
app.listen(port, () => {
  console.log(`App running and listening on port ${port}`);
});

/// test ///