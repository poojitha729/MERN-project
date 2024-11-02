const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Log", LogSchema);
