const express = require("express");
const compile = require("../controllers/compile");

const router = express.Router();

router.route("/compile").post(compile);

module.exports = router;
