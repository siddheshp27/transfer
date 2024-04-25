const express = require("express");
const app = express();
const router_compiler = require("./routes/compiler");
const router_problem = require("./routes/problem");
const cors = require("cors");
require("dotenv").config();

const port = 8080;
const uri = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

//app use
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/compiler", router_compiler);
app.use("/problem", router_problem);

//
app.listen(port, () => {
  console.log(`url : http://localhost:${port}`);
});
