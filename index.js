const sendmail = require("./routes/sendmail");
const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/index", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.use("/api/sendmail", sendmail);

// const connection_string = process.env.CONNECTION_STRING;
const port = process.env.PORT || 3500;

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

// mongoose
//   .connect(connection_string)
//   .then(() => console.log("MongoDB connection established..."))
//   .catch((error) =>
//     console.error("MongoDB Connection failed...", error.message)
//   );
