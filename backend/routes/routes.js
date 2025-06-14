const express = require("express");
const router = express.Router();
const {searchScan} = require("../controlls/searchScan");

router.get('/search',  searchScan);

module.exports=router;
