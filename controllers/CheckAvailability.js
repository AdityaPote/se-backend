const axios = require("axios");
require("dotenv").config();

// GET api/checkavailability
// @public
const CheckAvailability = async (req, res) => {
  try {
    const { classType, fromStationCode, toStationCode, trainNo, date, quota } =
      req.body;
    if (
      !classType ||
      !fromStationCode ||
      !toStationCode ||
      !trainNo ||
      !date ||
      !quota
    ) {
      return res.status(400).json({ msg: "Please enter all the fields" });
    }
    // const options = {
    //   method: "GET",
    //   url: "https://irctc1.p.rapidapi.com/api/v1/checkSeatAvailability",
    //   params: {
    //     classType: classType,
    //     fromStationCode: fromStationCode,
    //     toStationCode: toStationCode,
    //     trainNumber: trainNumber,
    //     date: date,
    //     quota: quota,
    //   },
    //   headers: {
    //     "X-RapidAPI-Key": process.env.X_RAPID_API_KEY,
    //     "X-RapidAPI-Host": process.env.X_RAPID_API_HOST,
    //   },
    // };

    // const response = await axios.request(options);
    // res.status(200).json(response.data);

    res.status(200).json([
      {
        total_fare: 1795,
        date: "25-11-2022",
        confirm_probability_percent: "",
        confirm_probability: "",
        current_status: "NOT AVAILABLE.",
      },
      {
        total_fare: 1795,
        date: "26-11-2022",
        confirm_probability_percent: "96",
        confirm_probability: "High",
        current_status: "RLWL27/WL25.",
      },
      {
        total_fare: 475,
        date: "27-11-2022",
        current_status: "AVAILABLE-0095.",
      },
      {
        total_fare: 475,
        date: "28-11-2022",
        current_status: "AVAILABLE-0108.",
      },
      {
        total_fare: 475,
        date: "29-11-2022",
        current_status: "AVAILABLE-0108.",
      },
      {
        total_fare: 475,
        date: "30-11-2022",
        current_status: "AVAILABLE-0108.",
      },
    ]);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { CheckAvailability };
