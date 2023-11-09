const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect("mongodb://0.0.0.0:27017/Pridepaths", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("http://localhost:8000");
      console.log("MongoDB connected successfully");
    })
    .catch((err) => {
      console.log("database error \n" + err);
    });
}

module.exports = connectDB;
