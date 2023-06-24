const express = require("express");
const {
  getProblem,
  addProblem,
} = require("./../controllers/problemsController");

const router = express.Router();

router.route("/").post(addProblem);
router.route("/:p_id").get(getProblem).post();

module.exports = router;
