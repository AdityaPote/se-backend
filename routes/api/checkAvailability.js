const express = require("express");
const router = express.Router();
const { CheckAvailability } = require("../../controllers/CheckAvailability");

router.route("/").post(CheckAvailability);

module.exports = router;
