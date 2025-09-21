const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Task Management API',
      version: '1.0.0',
      description:
        'A simple REST API for managing tasks, built with Express and documented with Swagger',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 3000}`,
        description: 'Development server',
      },
    ],
  },
  // Path to the files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;