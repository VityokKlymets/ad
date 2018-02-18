const fs = require("fs");
const fx = require("mkdir-recursive");
const path = require("path");
const saveStaticFile = (base64, name, filePath) => {
  const absPath = path.join("static", filePath);
  const AbsPath = path.join(process.env.DIRNAME, absPath);
  fx(AbsPath, () => {
    console.log("done!");
  });
};

module.exports = {
  saveStaticFile
};
