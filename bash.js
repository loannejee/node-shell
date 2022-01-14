const pwd = require('./pwd');

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  console.log(process.cwd());
  process.stdout.write("\nprompt >");
});

// pwd();