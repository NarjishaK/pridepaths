var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");

const connectDB = require("./config/db");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var adminRouter = require("./routes/admin");
var instaRouter = require("./routes/insta");
var engagementRouter = require("./routes/engagement");
var salesRouter = require("./routes/sales");
var taskRouter = require("./routes/task");
var app = express();
connectDB();
app.use(
  cors({
    origin: "*",
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/admin", adminRouter);
app.use("/insta", instaRouter);
app.use("/engagement", engagementRouter);
app.use("/sales", salesRouter);
app.use("/task", taskRouter);

app.use(bodyparser.json({ limit: "500mb" })); //increse the payload size
app.use(bodyparser.urlencoded({ extended: true, limit: "500mb" }));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
