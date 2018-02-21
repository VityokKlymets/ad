const mongoose = require("mongoose");
const Collection = require("../models/Collection");
const Item = require("../models/Item");
const express = require("express");
const router = express.Router();
const saveItem = require('./utils').saveItem;

router.post("/", (req, res) => {
  const collection = req.body.collection;
  const collectionRecord = new Collection();

  collectionRecord.name = collection.name;
  collectionRecord.description = collection.description;
  collectionRecord.saveImage(collection.image);
  Promise.all(
    collection.items.map(item => {
      return saveItem(item);
    })
  ).then(itemsIds => {
    collectionRecord.items = itemsIds;
    collectionRecord.save().then(record => {
      res.json({ record });
    });
  });
});
router.post("/delete", (req, res) => {
  const { id } = req.body;
  Collection.findById(id).then(record => record.remove());
  res.json({});
});
router.post("/change", (req, res) => {
  const { id, data } = req.body;
  Collection.findById(id).then(collection => {
    if (collection) {
      collection.name = data.name;
      collection.description = data.description;
      collection.checkAndUpdateImg(data.image);

      Promise.all(
        data.items.map((item, idx) =>
          Item.findById(item._id).then(itemRecord => {
            if (itemRecord) {
              itemRecord.name = item.name;
              itemRecord.description = item.description;
              itemRecord.tags = item.tags;
              itemRecord.params = item.params;
              itemRecord.checkAndUpdateImgs(item.images);
              return itemRecord.save().then(() => itemRecord._id);
            } else {
              return saveItem(item);
            }
          })
        )
      ).then(itemsIds => {
        collection.items = itemsIds;
      });
      collection.save();
    }
  });
  res.json({});
});
router.get("/get", (req, res) => {
  const id = req.query.id;
  Collection.findById(id).then(collection => {
    Promise.all(collection.items.map(item => Item.findById(item))).then(
      items => {
        res.json({
          collection: {
            _id: id,
            name: collection.name,
            description: collection.description,
            items
          }
        });
      }
    );
  });
});
router.get("/getAll", (req, res) => {
  Collection.find({})
    .limit(100)
    .then(collections => res.json({ collections }));
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
