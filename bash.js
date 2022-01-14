// const { cwd } = require('process');

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  // const cmd = data.toString().trim();
  console.log(process.cwd());
  // console.log("data-->", data);
  // process.stdout.write("You typed: " + cmd);
  process.stdout.write("\nprompt >");
});

// console.log(`Current directory: ${cwd()}`);
