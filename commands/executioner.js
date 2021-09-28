const chalk = require('chalk')
const CLI = require('clui')
const Spinner = CLI.Spinner
//const conf = new (require('conf'))()

function make(source, destination, options) {
    console.log(chalk.blue(options.cheese + " welcome " + source + " in  " + destination))
}

function resource() {
    console.log("ini saya")
}

module.exports = {
    make,
    resource
};
