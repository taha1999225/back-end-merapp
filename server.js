const express = require("express");
const app = express();
const DbConnect = require("./routes/DB_connect");
DbConnect();
app.use("/nft", require("./routes/route"));
app.listen(5000, (err) => {
  err ? console.log(err) : console.log("jawk mrigl");
});
