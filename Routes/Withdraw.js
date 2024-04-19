const express = require("express");
const router = express.Router();

const {savewithdrawAmt,GetwithdrwaDetails,deletewithdrawDetailsById,updatewithdrawDetailsById} = require('../Controller/Withdrawlcontroller')

//**PaymentType routers */

router.post("/savewithdrawAmt" , savewithdrawAmt);
router.get("/GetwithdrwaDetails" , GetwithdrwaDetails);
router.delete("/Withdrawl/:id",deletewithdrawDetailsById);
router.put("/Withdrawl/:id",updatewithdrawDetailsById);


module.exports = router;