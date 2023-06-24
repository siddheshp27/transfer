const generateFile = require("./../compilerTools/generateFile");
const Compiler = require("./../compilerTools/compiler");

const compile = async (req, res) => {
  const lang = req.body.languageType;
  const code = req.body.code;

  const metadata = generateFile(lang, code);

  const output = await Compiler(metadata.folderPath, metadata.fileName, lang);

  console.log(`output : ${output}`);

  console.log(req.body);
  res.json({ output: output });
};

module.exports = compile;
