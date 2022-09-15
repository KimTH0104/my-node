const express  = require('express')
const cors  = require('cors')
const routes  = require('./routes/routes');
const httpStatus  = require( 'http-status');
const ServerError  = require( './shared/helpers/ServerError');
const expressValidation  = require( 'express-validation');
const http  = require( 'http');
const health  = require( 'express-ping');
const cookieParser  = require( 'cookie-parser');
const config  = require( './config/config');

const app = express(),
    DIST_DIR = __dirname

// enable CORS
app.use(cors());
app.use(health.ping())

app.use(express.static(DIST_DIR))
app.use(express.json())
app.use(cookieParser());

app.use('',routes)

const port = config.apiPort || 3010

console.log("port : ", port)

app.set('jwt-secret', config.secret)

const httpServer = http.createServer(app);
httpServer.listen({ port }, () => {
    console.log(`http createServer on http://localhost:${port}`);
});

const { swaggerUi, specs } = require("./swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))

app.use((req, res, next) => {
    const err = new ServerError('API not found', httpStatus.NOT_FOUND);
    return next(err);
});
