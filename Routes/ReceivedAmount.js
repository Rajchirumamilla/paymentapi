const express = require('express');
const router = express.Router();

const {savereceivedamount,getAllReceivedDetails,getreceivedTransactionById,deletereceivedTransactionById,updatereceivedTransactionById} = require('../Controller/receivedamtcontroller');

//**received amount routers */

router.post('/savereceivedamount', savereceivedamount);
router.get('/getAllReceivedDetails', getAllReceivedDetails);
router.get('/Received/:id', getreceivedTransactionById);
router.delete('/Received/:id', deletereceivedTransactionById);
router.put('/Received/:id', updatereceivedTransactionById);

module.exports = router;
