const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        components: {
            securitySchemes: {
              bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
              }
            }
          },
          security: [{
            bearerAuth: []
          }],
          info: {
            title: 'Idea API',
            version: '0.0.1',
        },
    },
    apis: ['./routes/*.ts']
};
export default swaggerOptions;