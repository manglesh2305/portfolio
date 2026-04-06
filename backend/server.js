const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Data file path
const DATA_FILE = path.join(__dirname, 'messages.json');

// Initialize messages.json if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, '[]', 'utf-8');
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

// Contact form endpoint
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || typeof name !== 'string' || name.trim().length < 2 || name.trim().length > 120) {
    return res.status(400).json({ error: 'Name must be between 2 and 120 characters' });
  }

  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10 || message.trim().length > 1200) {
    return res.status(400).json({ error: 'Message must be between 10 and 1200 characters' });
  }

  try {
    // Read existing messages
    const messages = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));

    // Create new entry
    const entry = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      received_at: new Date().toISOString()
    };

    // Add to messages
    messages.push(entry);

    // Write back to file
    fs.writeFileSync(DATA_FILE, JSON.stringify(messages, null, 2), 'utf-8');

    // Respond
    res.json({
      message: 'Your message has been received',
      id: messages.length
    });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});