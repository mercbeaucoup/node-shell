process.stdout.write("prompt > ");
const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

process.stdin.on("data", (data) => {
  const promptArray = data.toString().trim().split(" ");
  const cmd = promptArray[0];
  const arg = promptArray[1];

  if (cmd === "pwd") {
    pwd();
  }
  if (cmd === "ls") {
    ls();
  }
  if (cmd === "cat") {
    cat(arg);
  }
});
