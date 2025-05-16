// server.js
const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API route for form submission
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // In a real app, you would save this to a database
    console.log('New contact form submission:', { name, email, message });
    
    res.json({ 
        success: true,
        message: 'Thank you for your message!'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});