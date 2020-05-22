const { existsSync, mkdirSync, writeFileSync } = require('fs')
const boilerplate = require('./boilerplate')
const common = require('./common')

function init() {
  if(!existsSync(common.cuttingBoard)) {
    mkdirSync(common.cuttingBoard)
  }

  if(!existsSync(common.commonCSS)) {
    writeFileSync(common.commonCSS, boilerplate.commonCSS)
  }

  if(!existsSync(common.cuttingBoardIndex)) {
    writeFileSync(common.cuttingBoardIndex, '')
  }

  if(!existsSync(common.projectFolder)) {
    mkdirSync(common.projectFolder)
  }

  if(!existsSync(common.jsFolder)) {
    mkdirSync(common.jsFolder)
  }

  if(!existsSync(common.mainJS)) {
    writeFileSync(common.mainJS, '')
  }

  if(!existsSync(common.outHTML)) {
    writeFileSync(common.outHTML, boilerplate.HTML)
  }

  if(!existsSync(common.outCSS)) {
    writeFileSync(common.outCSS, '')
  }
}

module.exports = init