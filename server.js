const express = require('express') //imports the express module.
require('dotenv').config()
const connectDB = require('./config/db');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swaggerConfig');

const port = process.env.PORT || 3000;

// Connect to database
connectDB();

const app = express(); //instance of express app
app.use(express.json())//parse data in json format 

// Swagger API Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Mount the task routes
app.use('/api/tasks', require('./routes/taskRoutes'));

app.listen(port, ()=> console.log(`server is running of port ${port}`));
console.log(`API documentation available at http://localhost:${port}/api-docs`);
