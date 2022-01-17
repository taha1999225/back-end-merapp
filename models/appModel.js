const mongoose = require("mongoose");
const NftSchema = new mongoose.Schema({
  name: String,
  image: String,
  value: Number,
  owner: String,
});
const App = mongoose.model("Nft", NftSchema);
module.exports = App;
