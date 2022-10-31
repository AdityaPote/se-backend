const axios = require("axios");
require("dotenv").config();

// GET api/bookticket
// @public
const BookTicket = async (req, res) => {
  try {
    const options = {
      method: "GET",
      url: "https://irctc1.p.rapidapi.com/api/v1/checkSeatAvailability",
      params: {
        classType: req.body.classType,
        fromStationCode: req.body.fromStationCode,
        quota: req.body.quota,
        toStationCode: req.body.toStationCode,
        trainNo: req.body.trainNo,
        date: req.body.date,
      },
      headers: {
        "X-RapidAPI-Key": process.env.X_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.X_RAPID_API_HOST,
      },
    };

    const response = await axios.request(options);
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { BookTicket };
