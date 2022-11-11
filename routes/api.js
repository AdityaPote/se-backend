const express = require("express");
const router = express.Router();
const { CheckAvailability } = require("../controllers/CheckAvailability");
const { Checkout } = require("../controllers/Checkout");
const { GetPnrStatus } = require("../controllers/GetPnrStatus");

router.route("/checkavailability").post(CheckAvailability);

router.route("/checkout").post(Checkout);

router.route("/getpnrstatus").post(GetPnrStatus);

module.exports = router;
