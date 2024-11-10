const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const connectDB = require("../backend/config/db.js");
const codeRouter = require('./routes/codeRoutes.js');


connectDB();
const app=express();

const port = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());
app.use('/',codeRouter)

app.listen(port);

module.exports = app;
