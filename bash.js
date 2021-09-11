const pwd = require("./pwd");
const ls = require("./ls");
const { cat } = require("./cat");

//Output a prompt
process.stdout.write("prompt > ");

//The stdin "data" event fires after a user types in a line
process.stdin.on("data", (data) => {
    const cmd = data.toString().trim(); //remove the newline
    const command = cmd.split(" ");

    switch (command[0]) {
        case "pwd":
            pwd();
            break;
        case "ls":
            ls();
            break;
        case "cat":
            const fileName = command[1];
            cat(fileName);
            break;
        default:
            process.stdout.write(`You typed: ${command.join(" ")}`);
            process.stdout.write("\nprompt > ");
    }
});