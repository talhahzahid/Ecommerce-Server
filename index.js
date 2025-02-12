import express from "express";
import dotenv from "dotenv"
dotenv.config()
const app = express();
const port = 9000;
import connectdb from "./src/db/index.js";

app.get("/", (req, res) => {
  res.send("Ecommerce Server");
});

connectdb()
  .then(() => {
    app.listen(port, () => {
      console.log("Server Is Running At Port", port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
