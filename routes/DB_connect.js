const mongoose = require("mongoose");
const DbConnect = async () => {
  try {
    let result = await mongoose.connect(
      "mongodb+srv://tutu:tutu123456@cluster0.06siv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    console.log("database is connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = DbConnect;
