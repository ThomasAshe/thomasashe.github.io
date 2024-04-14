const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle GET request for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'BrysWeb.html'));
});

// Handle POST request for form submission
app.post('/submit_contact', (req, res) => {
    console.log("Form submitted");
    // Process the form submission here
    res.send('Thank you for the submission!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
