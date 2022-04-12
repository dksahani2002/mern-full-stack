const mongoose = require("mongoose");
const DB = process.env.DB;
// console.log('db value: ',DB);
mongoose
  .connect(DB)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });
