const express = require("express");
const app = express();
const router_compiler = require("./routes/compiler");
const cors = require("cors");
require("dotenv").config();

const port = 8080;
//app use
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/compiler", router_compiler);

//
app.listen(port, () => {
  console.log(`url : http://localhost:${port}`);
});
