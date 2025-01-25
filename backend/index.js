const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();
const PORT = 5000;

app.use(cors()); // Allow requests from React
app.use(express.json());

// Example: Simple GET route
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

// File upload handling
const upload = multer();
app.post('/upload', upload.fields([{ name: 'essay' }, { name: 'rubric' }]), (req, res) => {
    const { essay, rubric } = req.files;
    console.log('Essay:', essay[0].buffer.toString());
    console.log('Rubric:', rubric[0].buffer.toString());
    res.json({ message: 'Files received successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
