const axios = require("axios");
require("dotenv").config();

// POST api/checkavailability
// @public
const CheckAvailability = async (req, res) => {
  try {
    const { classType, fromStationCode, toStationCode, trainNo, date, quota } =
      req.body;
    if (
      !fromStationCode ||
      !toStationCode ||
      !date ||
      !quota ||
      !classType ||
      !trainNo
    ) {
      return res.status(400).json({ msg: "Please fill all the fields" });
    }

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.X_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.X_RAPID_API_HOST,
      },
    };

    const url = `https://irctc1.p.rapidapi.com/api/v1/checkSeatAvailability?classType=${classType}&fromStationCode=${fromStationCode}&quota=${quota}&toStationCode=${toStationCode}&trainNo=${trainNo}&date=${date}`;

    const response = await fetch(url, options);

    const data = await response.json();

    const newResponse = data.data.map((res) => {
      return {
        ...res,
        classType,
        fromStationCode,
        toStationCode,
        trainNo,
        quota,
      };
    });

    res.status(200).json(newResponse);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { CheckAvailability };
