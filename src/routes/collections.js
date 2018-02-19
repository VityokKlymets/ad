const Collection = require("../models/Collection");
const Item = require("../models/Item");
const express = require("express");
const router = express.Router();
router.post("/", (req, res) => {
  const collection = req.body.collection;
  const collectionRecord = new Collection();

  collectionRecord.name = collection.name;
  collectionRecord.description = collection.description;
  collectionRecord.saveImage(collection.image);
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
  Collection.find({})
    .sort("-createdAt")
    .limit(3)
    .then(collections => {
      res.json({ collections: collections });
    });
});

module.exports = router;
