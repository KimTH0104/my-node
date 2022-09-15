const httpStatus = require('http-status');

const APIResult = (res, response) => {
    const result = {
        data: response,
        status: httpStatus["200"],
        success : httpStatus.OK,
    }

    res.header("Access-Control-Allow-Headers" , "*");
    res.header("Access-Control-Allow-Origin" , "*");
    res.header("Access-Control-Allow-Methods" , "*");

    res.json(result);
}

module.exports = APIResult
