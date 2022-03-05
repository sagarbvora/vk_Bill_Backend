require("./modal");
const express = require("express");
const router = express.Router();
const controller = require("./controller");
const passport = require('passport');
require('../../middleware/index')(passport);

router.post("/create", controller.create);
router.get('/getDetails/:id', controller.findBill);
router.post('/getAllBillDetails', controller.getAllBillDetails);
router.put('/editBill/:id', controller.updateBillDetails);

module.exports = router;