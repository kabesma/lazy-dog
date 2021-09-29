const chalk = require('chalk')
const CLI = require('clui')
const Spinner = CLI.Spinner
const fs = require('fs')
const { spawn } = require('child_process')
let data = ''
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
    const add = await spawn('git', ['add', '.'])
    const commit = await spawn('git', ['commit', '-m', 'My from Bot JS'])
    const push = await spawn('git', ['push', 'origin', 'master'])
    const ls = spawn('git', ['status', '.'])

    ls.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    ls.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
}

module.exports = {
    make,
    resource
};
