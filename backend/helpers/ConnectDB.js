const mongoose = require("mongoose");
require("dotenv").config();

const ConnectDB = () => {
  mongoose.connect(process.env.MONGO_URL, (err) => {
    if (err) {
      throw err;
    }
    console.log("Database connected...");
  });
};

module.exports = ConnectDB;
