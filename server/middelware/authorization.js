const APIError = require("../shared/helpers/ApiError");
const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
    console.log("req.headers : ", req.headers)
    jwt.verify(req.headers.t, req.app.get("jwt-secret"), {},(err, decode) => {
        if ( err ) return APIError(res, {auth: false});
        return next();
    })
};

module.exports = {
    authenticate,
};
