const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

function generateFile(lang, code) {
  const currdir = __dirname;
  let filename = `${uuidv4()}.${lang}`;
  if (lang == "java") filename = "Main.java";

  const infolderpath = path.join(currdir, "input");
  const outfolderpath = path.join(currdir, "output");
  const file = path.join(infolderpath, filename);

  if (!fs.existsSync(infolderpath)) fs.mkdirSync(infolderpath);
  if (!fs.existsSync(outfolderpath)) fs.mkdirSync(outfolderpath);

  fs.writeFileSync(file, code);
  return { folderPath: currdir, fileName: filename };
}

module.exports = generateFile;
