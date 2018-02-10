const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true, lowercase: true },
    items: [mongoose.Schema.Types.ObjectId]
  },
  { timestamps: true }
);
module.exports = mongoose.model("Collection", schema);
