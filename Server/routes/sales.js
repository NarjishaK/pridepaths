var express = require("express");
var router = express.Router();
const SalesModel = require("../models/sales-models");
const SalesController = require("../controller/sales-controller");

router.get("/", async (req, res) => {
  const sales = {
    jan: 100,
    feb: 600,
    mar: 500,
    apr: 400,
    may: 600,
    jun: 300,
    jul: 400,
    aug: 200,
    sep: 600,
    oct: 500,
    nov: 600,
    dec: 200,
  };
  try {
    const Saleses = new SalesModel(sales);
    const savedSales = await Saleses.save();
    res.json({ success: true, Saleses: savedSales });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "An error occurred" });
  }
});

router.get ("/saleslist",SalesController.saleslist);
module.exports = router;