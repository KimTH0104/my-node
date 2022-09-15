const httpStatus = require('http-status');

const APIError = (res, response) => {
    const result = {
        data : response,
        status: httpStatus["300"],
        success : 300
    }

    res.header("Access-Control-Allow-Headers" , "Content-Type");
    res.header("Access-Control-Allow-Origin" , "*");
    res.header("Access-Control-Allow-Methods" , "OPTIONS,POST,GET");

    res.json(result);
}

module.exports = APIError
