const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  items: [],
  name: { type: String, required: true },
  phone: { type: String, required: true },
  progress: { type: Boolean, default: false },
  confirmed: { type: Boolean, default: false }
});
module.exports = mongoose.model("Order", schema);
