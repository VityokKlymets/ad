const Item = require("../models/Item");
module.exports = {
    saveItem : item => {
        const itemRecord = new Item();
        itemRecord.name = item.name;
        itemRecord.description = item.description;
        itemRecord.tags = item.tags;
        itemRecord.params = item.params;
        itemRecord.saveImages(item.images);
        return itemRecord.save().then(rec => rec._id);
      }
}