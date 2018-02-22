const Item = require("../models/Item");
module.exports = {
  saveItem: item => {
    const itemRecord = new Item();
    itemRecord.name = item.name;
    itemRecord.description = item.description;
    itemRecord.type = item.type;
    itemRecord.material = item.material;
    itemRecord.functional = item.functional;
    itemRecord.params = item.params;
    itemRecord.saveImages(item.images);
    return itemRecord.save().then(rec => rec._id);
  }
};
