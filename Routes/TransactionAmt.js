const express = require('express');
const router = express.Router();
const {savetransactionhistory,getAllTransactions,getTransactionById,deleteTransactionById,updateTransactionById} = require('../Controller/TransactionAmtcontroller');

//** transaction amount routers */

router.post('/savetransactionhistory', savetransactionhistory);
router.get('/getalltransactions', getAllTransactions);
router.get('/transaction/:id', getTransactionById);
router.delete('/transaction/:id', deleteTransactionById);
router.put('/transaction/:id', updateTransactionById);

module.exports = router;

