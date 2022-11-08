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
    // const newResponse = response.data.map((res) => {
    //   return {
    //     ...res,
    //     classType,
    //     fromStationCode,
    //     toStationCode,
    //     trainNo,
    //     quota,
    //   };
    // });
    // res.status(200).json(newResponse);

    const data = [
      {
        total_fare: 1795,
        date: "25-11-2022",
        confirm_probability_percent: "",
        confirm_probability: "",
        current_status: "NOT AVAILABLE.",
        classType,
        fromStationCode,
        toStationCode,
        trainNo,
        quota,
      },
      {
        total_fare: 1795,
        date: "26-11-2022",
        confirm_probability_percent: "96",
        confirm_probability: "High",
        current_status: "RLWL27/WL25.",
        classType,
        fromStationCode,
        toStationCode,
        trainNo,
        quota,
      },
      {
        total_fare: 475,
        date: "27-11-2022",
        current_status: "AVAILABLE-0095.",
        classType,
        fromStationCode,
        toStationCode,
        trainNo,
        quota,
      },
      {
        total_fare: 475,
        date: "28-11-2022",
        current_status: "AVAILABLE-0108.",
        classType,
        fromStationCode,
        toStationCode,
        trainNo,
        quota,
      },
      {
        total_fare: 475,
        date: "29-11-2022",
        current_status: "AVAILABLE-0108.",
        classType,
        fromStationCode,
        toStationCode,
        trainNo,
        quota,
      },
      {
        total_fare: 475,
        date: "30-11-2022",
        current_status: "AVAILABLE-0108.",
        classType,
        fromStationCode,
        toStationCode,
        trainNo,
        quota,
      },
    ];
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { CheckAvailability };
