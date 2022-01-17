const express = require("express");
const route = express.Router();
const App = require("../models/appModel");
route.post("/add", async (req, res) => {
  try {
    const newNft = new App(req.body);
    const result = await newNft.save();
    res.send({ Nft: result, msg: "nft added successfully" });
  } catch (error) {
    console.log(error);
  }
});
route.get("/getall", async (req, res) => {
  try {
    const result = await App.find();
    res.send({ Nft: result, msg: "all nfts" });
  } catch (error) {
    console.log(error);
  }
});
route.get("/:id", async (req, res) => {
  try {
    const result = await App.findById({ _id: req.params.id });
    res.send({ Nft: result, msg: "Found them" });
  } catch (error) {
    console.log(error);
  }
});
route.put("/:id", async (req, res) => {
  try {
    const result = await App.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ Nft: result, msg: "Found them" });
  } catch (error) {
    console.log(error);
  }
});
module.exports = route;
