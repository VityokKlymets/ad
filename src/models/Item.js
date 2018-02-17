const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: { type: String, required: true, lowercase: true },
  description: { type: String, required: true, lowercase: true },
  tags: [String],
  params: { type: Object, required: false },
  mesh: { type: String, required: false },
  image: { type: String, required: true }
});
module.exports = mongoose.model("Item", schema);
