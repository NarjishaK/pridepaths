const asyncHandler = require("express-async-handler");
const TaskModel = require("../models/tasks-models");

exports.tasklist = asyncHandler(async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.json(tasks);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "an error occured in sales list" });
  }
});
