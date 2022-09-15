/**
 * @swagger
 * components:
 *   schemas:
 *     Member:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: varchar
 *           example: "user_idx_1"
 *         username:
 *           type: string
 *           format: varchar
 *           example: "userName 1"
 *         email:
 *           type: string
 *           format: varchar
 *           example: "email_1"
 *         password:
 *           type: string
 *           format: varchar
 *           example: "asdfsadgawet3525sdgsdga!#!#$"
 * */
module.exports = (sequelize, DataTypes) => {
    const Member = sequelize.define('members', {
        id: {
            type: DataTypes.STRING(11),
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING(50),
        },
        username : {
            type : DataTypes.STRING(50),
        },
        password: {
            type: DataTypes.STRING(255),
        },
    });

    return Member;
};
