const config = require('./config.json')

const ENV_MAP = {
    development: {
        "host": "localhost:8080",
        "apiPort": 8080,
        "mysqlDb": "my-node",
        "mysqlPort": 3306,
        "mysqlHost":"localhost",
        "mysqlP": "testPw",
        "secret":"JWTSecret"
    },
};


module.exports = ENV_MAP.development;
