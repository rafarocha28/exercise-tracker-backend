const mongoose = require("mongoose");
const debug = require("debug")("exercise:*");

require("dotenv").config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  debug(`MongoDB database connection established successfully.`);
});

module.exports = connection;
