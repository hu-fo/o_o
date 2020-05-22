const { existsSync, writeFileSync } = require('fs')
const { join } = require('path')
const regs = require('./regs')
const prettify = require('./prettify')
const { cuttingBoardIndex, ext, outHTML, outCSS, cuttingBoard } = require('./common')
const boilerplate = require('./boilerplate')
const { readFile, matchCSS, matchHTML, prepareCSS, prepareHTML, randomName, replaceClasses } = require('./utils')
const state = require('./state')


function replacer() {
  let data = readFile(cuttingBoardIndex)
  let match = data.match(regs.point)
  let CSS = ''

  while(match) {
    const filePath = join(cuttingBoard, match[1] + ext)

    if(!existsSync(filePath)) {
      writeFileSync(filePath, boilerplate.component)
      state[match[1]] = {
        path: filePath,
        code: randomName(match[1])
      }
      writeFileSync(join(__dirname, 'storage.js'), JSON.stringify(state))
    } else {
      let part = readFile(filePath)
      part = replaceClasses(part, state[match[1]].code)
      let partHTML = prettify.html(matchHTML(part))


      const partCSS = prettify.css(matchCSS(part))
      data = data.replace(match[0], partHTML)
      CSS += partCSS ? partCSS + '\n\n' : ''

      match = data.match(regs.point)
    }
  }

  writeFileSync(outHTML, prepareHTML(data))
  writeFileSync(outCSS, prepareCSS(CSS))
}

module.exports = replacer