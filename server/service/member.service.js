const db = require("../config/sequelize");
const crypto = require("crypto");

const Members = db.members;

function auth (email, password) {
    const p = btoa(password)

    const where = {
        email: email,
        password : p,
    }
    return Members.findOne({
        where,
    })
}

function create (username, email, password) {

    const p = btoa(password)

    const m = Members.build({
        username,
        email,
        password : p,
    })

    return m.save()
}

function info (id) {

    const where = {
        id,
    }

    return Members.findOne({
        where,
    })
}

async function list (page) {
    const c = await Members.count();
    const m = await Members.findAll({limit: 5, offset: (page - 1) * 5})

    return {
        total_count: c,
        members: m,
    }
}

module.exports = {
    auth,
    create,
    list,
    info,
}
