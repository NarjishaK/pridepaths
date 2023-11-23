var express = require("express");
var router = express.Router();
const TaskModel = require("../models/tasks-models");
const TaskController = require("../controller/tasks-controller");

router.get("/", async (req, res) => {
  const task = {
    jan: 100,
    feb: 300,
    mar: 500,
    apr: 400,
    may: 600,
    jun: 300,
    jul: 600,
    aug: 400,
    sep: 100,
    oct: 150,
    nov: 250,
    dec: 400,
  };
  try {
    const Tasks = new TaskModel(task);
    const savedTask = await Tasks.save();
    res.json({ success: true, Tasks: savedTask });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "An error occurred" });
  }
});

router.get ("/tasklist",TaskController.tasklist);
module.exports = router;