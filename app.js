const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("dist"));

app.get("/health", (req, res) => {
  throw "error...";
  // eslint-disable-next-line no-unreachable
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`serving app at http://localhost:${PORT}`);
});
