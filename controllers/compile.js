const generateFile = require("./../compilerTools/generateFile");
const Compiler = require("./../compilerTools/compiler");
const axios = require("axios");

const compile = async (req, res) => {
  const lang = req.body.languageType;
  const code = req.body.code;

  const metadata = generateFile(lang, code);

  const output = await Compiler(metadata.folderPath, metadata.fileName, lang);

  console.log(`output : ${output}`);
  axios
    .post("https://webhook.site/452e5d91-b134-4ada-b69e-9cbc03bd4251", output)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });

  console.log(req.body);
  res.json({ output: output });
};

module.exports = compile;
