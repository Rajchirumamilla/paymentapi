const express = require("express");
const router = express.Router();

const {savePaymentType, GetPaymentTypeDetails,deletePaymentTypeDetailsById,updatePaymentTypeDetailsById}= require("../Controller/PaymentTypecontoller")

//**PaymentType routers */

router.post("/savePaymentType" , savePaymentType);
router.get("/getpaymentdetails" , GetPaymentTypeDetails);
router.delete("/Payment/:id",deletePaymentTypeDetailsById);
router.put("/Payment/:id",updatePaymentTypeDetailsById);


module.exports = router;