const fs = require("fs");
// const pwd = require("./pwd");

const cat = (file) => {
    // const path = `${pwd()}/${file}`;

    fs.readFile(file, (err, data) => {
        if (err) {
            throw err;
        } else {
            process.stdout.write(`
            ---------------------
            ****start of file****
            \n${data}\n
            *****end of file****
            ---------------------
            `);
            process.stdout.write("\nprompt > ");
        }
    })
}

module.exports = {
    cat
}