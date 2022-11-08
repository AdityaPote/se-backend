const express = require("express");
const router = express.Router();
const { CheckAvailability } = require("../controllers/CheckAvailability");
const { Checkout } = require("../controllers/Checkout");

router.route("/checkavailability").post(CheckAvailability);

router.route("/checkout").post(Checkout);

module.exports = router;
