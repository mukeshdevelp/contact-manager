const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConfig');
// const db = require('./config/dbConfig')
const port = process.env.PORT || 5000;
connectDb();
const app = express();
// adding a middleware for data parsing
app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));
// adding user routes
app.use('/api/users', require('./routes/userRoutes'));
// error handler middleware
app.use(errorHandler)
app.listen(port, () => {
    console.log(`sever is running on port http://localhost:${port}`);
    
})



