#! /usr/bin/env node

const { program } = require('commander')
const { list, saya  } = require('../commands/list.js')

program
    .command('list')
    .description('List all the TODO tasks')
    .action(list)
program
    .command('saya')
    .description('ini saya')
    .action(saya)

program.parse();
