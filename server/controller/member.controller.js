const APIResult = require("../shared/helpers/ApiResult")
const memberService = require("../service/member.service");
const APIError = require("../shared/helpers/ApiError");
const jwt = require("jsonwebtoken");

async function auth(req, res, next) {
    const {email, password} = req.body;
    try {
        console.log("#1")
        const r = await memberService.auth(email, password)
        if ( r ) {
            const secret = req.app.get('jwt-secret');
            jwt.sign(
                {
                    id: r.dataValues.id,
                },
                secret,
                {
                    expiresIn: '30m',
                }, (err, token) => {
                    if (err) {
                        APIError(res, {success: false})
                    }
                    APIResult(res, {token})
                })
        } else {
            APIError(res, {success: false})
        }
    } catch (err) {
        APIError(res, {success: false})
    }
}

async function create(req, res, next) {
    const {username, email, password} = req.body;

    try {
        const s = await memberService.create(username, email, password);
        APIResult(res, s)
    } catch(err) {
        APIError(res, err)

    }

}

async function info(req, res, next) {
    const id = req.params["id"];
    console.log("id : ", id)
    try {
        const s = await memberService.info(id);
        APIResult(res, s)
    } catch(err) {
        APIError(res, err)

    }

}

async function list(req, res, next) {
    const page = req.params["page"];

    try {
        const s = await memberService.list(page);
        APIResult(res, s)
    } catch(err) {
        APIError(res, err)

    }

}

module.exports = {
    create,
    auth,
    info,
    list,
}
