// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// In-memory storage (will be reset if you restart server)
let messages = [];

app.use(express.json()); // allow JSON request bodies

// Route: Home
app.get('/', (req, res) => {
  res.send('Welcome to Tiny Message App');
});

// Route: Get all messages
app.get('/messages', (req, res) => {
  res.json(messages);
});

// Route: Post a new message
app.post('/messages', (req, res) => {
  const { author, content } = req.body;
  if (!author || !content) {
    return res.status(400).send('Author and content are required.');
  }

  const newMessage = {
    id: messages.length + 1,
    author,
    content,
    createdAt: new Date()
  };

  messages.push(newMessage);
  res.status(201).json(newMessage);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

