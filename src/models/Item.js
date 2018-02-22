const mongoose = require("mongoose");
const path = require("path");
const saveStaticFile = require("../utils/utils").saveStaticFile;

const schema = new mongoose.Schema({
  name: { type: String, required: true, lowercase: true },
  description: { type: String, required: false, lowercase: true },
  type: {type : String ,required : true ,lowercase : true },
  material: {type : String ,required : true ,lowercase : true },
  functional : {type : String ,required : true ,lowercase : true },
  params: { type: Object, required: false },
  mesh: { type: String, required: false },
  images: [String]
});
schema.methods.saveImages = function saveImages(images) {
  const imagesSrc = [];
  const filePath = path.join("collections", "items", this._id.toString());
  images.forEach((imageData, idx) => {
    const data = imageData.fileResult;
    const fileName = `${this.name}${idx > 0 ? `(${idx})` : ""}${
      imageData.format
    }`;
    imagesSrc.push(saveStaticFile(data, fileName, filePath));
  });
  this.images = imagesSrc;
};
schema.methods.checkAndUpdateImgs = function checkAndUpdateImgs(images) {
  const filePath = path.join("collections", "items", this._id.toString());
  images.forEach((image, idx) => {
    let newImage = "";
    if (image instanceof Object) {
      let data = imageData.fileResult;
      let fileName = `${this.name}${idx > 0 ? `(${idx})` : ""}${
        imageData.format
      }`;
      newImage = saveStaticFile(data, fileName, filePath);
    } else {
      newImage = image;
    }
    this.images[idx] = newImage;
  });
};
module.exports = mongoose.model("Item", schema);
