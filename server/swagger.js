const swaggerUi = require("swagger-ui-express")
const swaggereJsdoc = require("swagger-jsdoc")

const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            version: "1.0.0",
            title: "김태현",
            description:
                "테스트 프로젝트",
        },
        servers: [
            {
                url: "http://localhost:8080",
            },
        ],
    },
    apis: [`${__dirname}/routes/*.js`, `${__dirname}/models/*.js`],
}

const specs = swaggereJsdoc(options)

module.exports = { swaggerUi, specs }
