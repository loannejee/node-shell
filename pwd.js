module.exports = function () {
  process.stdin.on("data", (data) => {
    console.log(process.cwd());
    process.stdout.write("\nprompt >");
  });
}

