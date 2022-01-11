const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        components: {},
        info: {
            title: 'Idea API',
            version: '0.0.1',
        },
    },
    apis: ['./routes/*.ts']
};
export default swaggerOptions;