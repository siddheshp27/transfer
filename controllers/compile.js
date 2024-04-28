const generateFile = require("./../compilerTools/generateFile");
const Compiler = require("./../compilerTools/compiler");
const axios = require("axios");
const { addToDatabase, getTestcases } = require("../db/dbquery");

const compile = async (req, res) => {
  const lang = req.body.languageType;
  const code = req.body.code;
  const id = req.body.id;
  const probid = req.body.probid;

  const metadata = generateFile({ lang, code, id });
  if (lang == "java") {
    console.log("java");
    const testCaseArr = getTestcases({ id: probid });
    let flag = false;
    for (const testcase in testCaseArr) {
      const output = await Compiler(
        metadata.folderPath,
        metadata.fileName,
        lang,
        testcase.input
      );
      if (output.trim() != testcase.output) {
        flag = true;
        break;
      }
    }
    if (flag) {
      const state = await addToDatabase({ id, output, status: false });
    } else {
      const state = await addToDatabase({ id, output, status: true });
    }
  } else {
    const output = await Compiler(metadata.folderPath, metadata.fileName, lang);
    const state = await addToDatabase({ id, output, status: true });

    console.log(`output : ${output}`);
  }

  console.log(req.body);
  res.status(200).json({ status: true });
};

module.exports = compile;
