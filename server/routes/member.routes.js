const express = require('express');
const router = express.Router();
const memberController = require("../controller/member.controller");
const {authenticate} = require("../middelware/authorization");
/**
 * @swagger
 * paths:
 *  /auth:
 *     post:
 *       tags:
 *         - Member
 *       summary: Add a new member to the store
 *       description: Add a new member to the store
 *       operationId: auth
 *       requestBody:
 *         description: Create a new pet in the store
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *               email:
 *                 type: string
 *                 example: "email_1"
 *               password:
 *                 type: string
 *                 example: "aeawttwatwat#1"
 *         required: true
 *       responses:
 *         '200':
 *           description: Successful operation
 *           content:
 *             application/json:
 *               schema:
 *                type: object
 *                properties:
 *                 id:
 *                   type: string
 *                   example: "user_idx_1"
 *                 username:
 *                   type: string
 *                   example: "userName 1"
 *                 email:
 *                   type: string
 *                   example: "email_1"
 *         '405':
 *           description: Invalid input
 * */
router.post('/auth',  memberController.auth);

/**
 * @swagger
 *  /create:
 *     post:
 *       tags:
 *         - Member
 *       summary: Add a new member to the store
 *       description: Add a new member to the store
 *       operationId: add
 *       requestBody:
 *         description: Create a new pet in the store
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *               username:
 *                 type: string
 *                 example: "userName 1"
 *               email:
 *                 type: string
 *                 example: "email_1"
 *               password:
 *                 type: string
 *                 example: "password"
 *         required: true
 *       responses:
 *         '200':
 *           description: Successful operation
 *           content:
 *             application/json:
 *               schema:
 *                type: object
 *                properties:
 *                 id:
 *                   type: string
 *                   example: "user_idx_1"
 *                 username:
 *                   type: string
 *                   example: "userName 1"
 *                 email:
 *                   type: string
 *                   example: "email_1"
 *         '405':
 *           description: Invalid input
 * */

router.post('/create', memberController.create);
/**
 * @swagger
 *   /list/{page}:
 *     get:
 *       tags:
 *         - Member
 *       summary: Add a new member to the store
 *       description: Add a new member to the store
 *       operationId: list
 *       parameters:
 *         - name: page
 *           in: path
 *           description: members page
 *           required: true
 *           schema:
 *             type: number
 *             format: int32
 *         - name: t
 *           in: header
 *           description: an authorization header
 *           required: true
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Successful operation
 *           content:
 *             application/json:
 *               schema:
 *                type: array
 *                items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "user_idx_1"
 *                   username:
 *                     type: string
 *                     example: "userName 1"
 *                   email:
 *                     type: string
 *                     example: "email_1"
 *         '405':
 *           description: Invalid input
 * */
router.get('/list/:page',authenticate, memberController.list);

/**
 * @swagger
 *   /info/{id}:
 *     get:
 *       tags:
 *         - Member
 *       summary: view specific member info
 *       operationId: info
 *       parameters:
 *         - name: id
 *           in: path
 *           description: members page
 *           required: true
 *           schema:
 *             type: number
 *             format: int32
 *         - name: t
 *           in: header
 *           description: an authorization header
 *           required: true
 *           schema:
 *             type: string
 *       responses:
 *         '200':
 *           description: Successful operation
 *           content:
 *             application/json:
 *               schema:
 *                type: array
 *                items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "user_idx_1"
 *                   username:
 *                     type: string
 *                     example: "userName 1"
 *                   email:
 *                     type: string
 *                     example: "email_1"
 *         '405':
 *           description: Invalid input
 * */
router.get('/info/:id',authenticate, memberController.info);

module.exports = router;
