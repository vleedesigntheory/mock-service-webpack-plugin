const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs');
const path = require('path');
const app = express();
const router = express.Router();

const { createRoutes } = require('./utils')

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

process.on('message', ({source, port}) => {
    console.log(`Options get From Parents`, source, port);

    createRoutes(router, source);

    app.use(router);

    app.listen(port, () => {
        console.log(`Mock Server Listen ${port} is Running`);
    });
})


