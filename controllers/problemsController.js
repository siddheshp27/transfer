const { Problem, Examples, TestCases } = require("./../models/Problem");

//Problem
const getProblem = async (req, res) => {
  res.json(req.params);
};

const addProblem = async (req, res) => {
  const pb = new Problem(req.body);
  pb.save().then((a) => console.log(a));
  res.json(req.body);
};

module.exports = { getProblem, addProblem };
