const express = require("express");
const router = express.Router();

const {GetHistoryDetails} = require("../Controller/HistoryController")


router.get("/gethistorydetails" , GetHistoryDetails);


module.exports = router;