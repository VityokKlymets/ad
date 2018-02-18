const Collection = require("../models/Collection");
const Item = require("../models/Item");
const express = require("express");
const router = express.Router();
const saveImages = images => {
  const src = [];

  return src;
};
router.get("/get", (req, res) => {
  const id = req.query.id;
  console.log(id);
});
router.post("/", (req, res) => {
  const collection = req.body.collection;
  const collectionRecord = new Collection();

  collectionRecord.name = collection.name;
  collectionRecord.description = collection.description;

  collectionRecord.items = collection.items.map(item => {
    const itemRecord = new Item();
    itemRecord.name = item.name;
    itemRecord.description = item.description;
    itemRecord.tags = item.tags;
    itemRecord.params = item.params;
    itemRecord.saveImages(item.images);
    itemRecord.save();
    return itemRecord._id;
  });
  collectionRecord.save().then(record => {
    res.json({ record });
  });
});

router.get("/actual", (req, res) => {
  res.json({ collections: ["bi"] });
});

module.exports = router;
