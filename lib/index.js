#! /usr/bin/env node

const {program} = require('commander')
const {make, resource} = require('../commands/executioner.js')
const chalk = require('chalk')

/**
 * This main function for show all command
 */
function main() {
  program
    .command('make <source> [destination]')
    .description(
      'Create a new ' + chalk.green('model, view, controller') + ' class '
    )
    .option('-c, --cheese <type>', 'Add cheese with optional type')
    .action(make)

  program
    .command('resource')
    .description('Create all Base resources')
    .action(resource)

  program.parse(process.argv)
}

main()
