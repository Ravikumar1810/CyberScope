const express = require("express");
const router = express.Router();
const {modelController}  = require("../controlls/modelController");

router.get('/predict', modelController);

module.exports=router;