const express = require('express');
const dotenv = require('dotenv');

const port = process.env.PORT || 5000;
const app = express();
// adding a middleware for data parsing
app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));

app.listen(port, () => {
    console.log(`sever is running on port http://localhost:${port}`);
    
})



