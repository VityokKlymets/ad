const Collection = require("../models/Collection");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  Collection.find({})
    .limit(3)
    .then(function(collections) {
      res.json({
        collections: collections
      });
    });
});
module.exports = router;
