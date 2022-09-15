'use strict';

const router = require('express').Router();
const healthRouter = require('../shared/health/router');
const memberRouter = require("./member.routes");
/* GET sign in page. */
router.use('/health', healthRouter);
/**
 * @swagger
 * tags:
 *   name: Member
 *   description: 유저 관련
 */
router.use('/', memberRouter);

// Export the router
module.exports = router;
