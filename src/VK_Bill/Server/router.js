require("./modal");
const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/create", controller.create);
router.get('/create/:id', controller.findBill);

module.exports = router;