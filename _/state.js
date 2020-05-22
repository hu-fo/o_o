const { readFile } = require('./utils')
const { join } = require('path')

const pre = readFile(join(__dirname, 'storage.js'))
const state = pre ? JSON.parse(pre) : {}

module.exports = state