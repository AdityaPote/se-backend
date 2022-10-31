const express = require("express");
const router = express.Router();
const { BookTicket } = require("../../controllers/BookTicket");

router.route("/").get(BookTicket);

module.exports = router;
