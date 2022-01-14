// const { cwd } = require('process');
const pwd = require('./pwd.js');

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    if (cmd === "pwd") {
        console.log(process.cwd());
    }
    process.stdout.write("\nprompt >");
});

// console.log(`Current directory: ${cwd()}`);

