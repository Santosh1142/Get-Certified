var express = require('express');
const app = express.Router();
const Contestapi = require("./contest");
const Userapi = require("./user");

app.use("/user",Userapi);
app.use("/contest",Contestapi);

module.exports=app;