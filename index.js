import express from "express";
const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.send("Ecommerce Server");
});

app.listen(port, () => {
  console.log("Server Is Running At Port", port);
});
