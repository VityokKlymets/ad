const fs = require("fs");
const fx = require("mkdir-recursive");
const path = require("path");
const saveStaticFile = (base64, name, filePath) => {
  const data = base64.split(";base64,").pop();
  const absPath = path.join("static", filePath);
  const AbsPath = path.join(process.env.DIRNAME, absPath);
  const AbsFilePath = path.join(AbsPath, name);
  const absFilePath = path.join(absPath, name);
  const buff =  new Buffer(data, 'base64');
  if (!fs.existsSync(AbsPath)) fx.mkdirSync(AbsPath);
  fs.writeFileSync(AbsFilePath, buff);
  return '/'+absFilePath;
};
module.exports = {
  saveStaticFile
};
