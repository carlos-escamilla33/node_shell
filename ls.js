const fs = require("fs");


module.exports = () => {
    fs.readdir("./", "utf8", (err, files) => {
        if (err) {
            throw err;
        } else {
            process.stdout.write(`Files: ${files.join("\n")}`);
            process.stdout.write("\nprompt > ");
        }
    })
}