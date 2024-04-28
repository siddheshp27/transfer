const fs = require("fs");
const path = require("path");

function generateFile({ lang, code, id }) {
  const currdir = __dirname;
  let filename = `${id}.${lang}`;
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
