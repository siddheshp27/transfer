const { exec } = require("child_process");

async function compiler(folderPath, fileName, lang, arg) {
  const fName = fileName.split(".")[0];

  let command;

  switch (lang) {
    case "cpp": {
      command = `g++ ${folderPath}/input/${fileName} -o ${folderPath}/output/${fName} &&  ${folderPath}/output/${fName}`;
      break;
    }
    case "py": {
      command = `python3 ${folderPath}/input/${fileName}`;
      console.log(command);
      break;
    }
    case "java": {
      command = `javac ${folderPath}/input/${fileName} -d ${folderPath}/output/ && java -cp ${folderPath}/output ${fName} ${arg}`;
      break;
    }
    case "js": {
      command = `node ${folderPath}/input/${fileName}`;
      break;
    }
  }

  return new Promise((resolve, reject) => {
    exec(command, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        reject(err);
      }
      if (stderr) {
        console.error(stderr);
        reject(stderr);
      } else {
        console.log(stdout);
        resolve(stdout);
      }
    });
  });
}

module.exports = compiler;
