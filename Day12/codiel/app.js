const express = require("express");
const hostName = "http://localhost";
const port = 8000;

const app = express();

// middleware 
app.use("/", require("./routes/index"));

app.listen(port, (err) => {
  if (err) {
    console.log("error", err);
  }
  console.log(`server runs on ${hostName}:${port}`);
});
