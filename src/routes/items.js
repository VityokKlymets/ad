const express = require("express");
const Item = require("../models/Item");
const router = express.Router();

router.get("/get", (req, res) => {
  const id = req.query.id;
  Item.findById(id).then(item => res.json({ item }));
});
module.exports = router;
