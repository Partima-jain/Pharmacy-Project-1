const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
//routing
app.get("/", (req, res) => {
  res.send("Hiii I Am server");
});
//server
app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
