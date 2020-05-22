const { cuttingBoard } = require('./common')
const init = require('./init')
const watcher = require('./watcher')
const replacer = require('./replacer')

init()
watcher(cuttingBoard, replacer)
