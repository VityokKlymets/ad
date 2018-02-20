const mongoose = require("mongoose");
const saveStaticFile = require("../utils/utils").saveStaticFile;
const schema = new mongoose.Schema(
  {
    name: { type: String, required: true, lowercase: true },
    description: { type: String, required: false },
    image: { type: String, required: false },
    items: [mongoose.Schema.Types.ObjectId]
  },
  { timestamps: true }
);
schema.methods.saveImage = function saveImage(imageData) {
  const data = imageData.fileResult;
  const filePath = path.join("collections", this._id.toString());
  const fileName = `${this.name}${imageData.format}`;
  const imageSrc = saveStaticFile(data, fileName, filePath);
  this.image = imageSrc;
};
module.exports = mongoose.model("Collection", schema);
