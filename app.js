const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("dist"));

app.get("/health", (req, res) => {
  res.send("ok");
});

app.get("/version", (req, res) => {
  res.send("v11");
});

app.listen(PORT, () => {
  console.log(`serving app at http://localhost:${PORT}`);
});
