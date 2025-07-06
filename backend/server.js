const express = require('express');
const dotenv = require('dotenv');

const port = process.env.PORT || 5000;
const app = express();

app.get('/api/contacts', (req, res) => {
    res.status(200).json({

        "message": "server is running"
    });
});

app.listen(port, () => {
    console.log(`sever is running on port http://localhost:${port}`);
    
})



