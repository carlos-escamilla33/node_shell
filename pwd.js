const { cwd } = require("process");

module.exports = () => {
    process.stdout.write(`directory: ${cwd()}`)
}