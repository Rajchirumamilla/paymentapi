const express = require("express");
const router = express.Router();

const {Createuser,Loginuser,GetAllUser} =require('../Controller/logincontroiller');


router.post('/createUser', Createuser);
router.post('/Loginuser', Loginuser);
router.get('/allusers' , GetAllUser);

module.exports = router;

