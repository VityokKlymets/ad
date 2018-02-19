const mongoose = require("mongoose");
const path = require("path");
const saveStaticFile = require("../utils/utils").saveStaticFile;

const schema = new mongoose.Schema({
  name: { type: String, required: true, lowercase: true },
  description: { type: String, required: false, lowercase: true },
  tags: [String],
  params: { type: Object, required: false },
  mesh: { type: String, required: false },
  images: [String]
});
schema.methods.saveImages = function saveImages(images) {
  const imagesSrc = [];
  images.forEach((imageData, idx) => {
    const data = imageData.fileResult;
    const filePath = path.join("collections", "items", this._id.toString());
    const fileName = `${this.name}${idx > 0 ? `(${idx})` : ""}${
      imageData.format
    }`;
    imagesSrc.push(saveStaticFile(data, fileName, filePath));
  });
  this.images = imagesSrc;
};
module.exports = mongoose.model("Item", schema);
