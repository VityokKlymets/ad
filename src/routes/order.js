const express = require("express");
const Order = require("../models/Order");
const router = express.Router();
router.get("/", (req, res) => {
  Order.find({}).then(orders => res.json({ orders }));
});
router.post("/", (req, res) => {
  const order = req.body.order;
  new Order(order)
    .save()
    .then(()=>res.json({}))
    .catch(()=>res.status(400).json({}));
});

module.exports = router;
