const express = require("express");
const router = express.Router();
const {saveCode,getCode,updateCode} = require('../controller/codeController')

const codeRouter=router;

codeRouter.post('/savecode',saveCode);

codeRouter.get('/getcode/:codeId',getCode);

codeRouter.put('updatecode/:codeId',updateCode)

module.exports = codeRouter;

