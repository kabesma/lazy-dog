const chalk = require('chalk')
const CLI = require('clui')
const Spinner = CLI.Spinner
const fs = require('fs')
const { spawn } = require('child_process')
let data = ''
const simpleGit = require('simple-git')
const git = simpleGit()
//const conf = new (require('conf'))()

/**
 * Command make controller, view , and model
 *
 * @param {[string]} source - [you can write model, view, or controller]
 * @param {[string]} destination - [location path for source]
 * @param {[string]} options - [you can write all source with options]
 * @return {[string]} [result from execute you file request]
 */
async function make(source, destination, options) {
//     console.log(chalk.green(options.cheese + " welcome " + source + " in  " + destination))
    let waiting = new Spinner(
        'Exiting in 10 seconds...  ', 
        [chalk.red('⣾'),chalk.red('⣽'),chalk.red('⣻'),chalk.red('⢿'),chalk.red('⡿'),chalk.red('⣟'),chalk.red('⣯'),chalk.red('⣷')]
    )
    waiting.start()
    var number = 10
    data = fs.readFileSync(destination + source, 'utf8')
    setInterval(function () {
        number--
        waiting.message('Exiting in ' + number + ' seconds...  ')
        if (number === 0) {
            waiting.stop(); 
            process.stdout.write('\n')
            
            try {
                console.log(data)
            } catch (err) {
                console.error(err)
            } 
            process.exit(0)
        }
    }, 1000);
}

/**
 * [TODO:description]
 *
 * @return {[TODO:type]} [TODO:description]
 */
async function resource() {
//     console.log("ini saya")
    let gitStatus = await git.status('-s')
    let xxxx = gitStatus.modified
    console.log(xxxx)
}

module.exports = {
    make,
    resource
};
