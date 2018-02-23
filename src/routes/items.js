const express = require("express");
const Item = require("../models/Item");
const saveItem = require("./utils").saveItem;

const router = express.Router();
router.get("/get", (req, res) => {
  const id = req.query.id;
  Item.findById(id).then(item => {
    if (item) {
      item.views++;
      item.save();
      res.json({ item });
    } else {
      res.json({ item: {} });
    }
  });
});

router.post("/paginate", (req, res) => {
  const ITEM_ON_PAGE = 14;
  const paginator = req.body.paginator;
  const { functional, material, type } = paginator;
  if (type === "все" && material === "любой") {
    Item.find({
      functional
    }).then(items => {
      res.json({ items });
    });
  } else if (type === "все") {
    Item.find({
      functional,
      material
    }).then(items => {
      res.json({ items });
    });
  } else if (material === "любой") {
    Item.find({
      functional,
      type
    }).then(items => {
      res.json({ items });
    });
  } else {
    Item.find({
      functional,
      material,
      type
    }).then(items => {
      res.json({ items });
    });
  }
});
router.post("/delete", (req, res) => {
  const { id } = req.body;
  Item.findById(id).then(record => {
    if (record) record.remove();
  });
  res.json({});
});
router.get("/getAll", (req, res) => {
  Item.find({})
    .limit(100)
    .then(items => res.json({ items }));
});
router.post("/change", (req, res) => {
  const { id, data } = req.body;
  Item.findById(id).then(itemRecord => {
    if (itemRecord) {
      itemRecord.name = data.name;
      itemRecord.description = data.description;
      itemRecord.tags = data.tags;
      itemRecord.params = data.params;
      itemRecord.checkAndUpdateImgs(data.images);
      itemRecord.save().then(() => itemRecord._id);
    }
  });
  res.json({});
});
router.post("/", (req, res) => {
  const item = req.body.item;
  saveItem(item).then(id => {
    res.json({});
  });
});
module.exports = router;
