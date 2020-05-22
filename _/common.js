const { join } = require('path')
const settings = require('../settings')

const ext = settings.ext
const cuttingBoard = join(settings.root, '_-_-_-_-_')
const cuttingBoardIndex  = join(cuttingBoard, 'index' + ext)
const commonCSS = join(cuttingBoard, 'common.css')

const projectFolder = join(settings.root, 'Project ' + settings.projectName)
const outHTML = join(projectFolder, 'index.html')
const outCSS = join(projectFolder, 'styles.css')
const jsFolder = join(projectFolder, 'js')
const mainJS = join(jsFolder, 'main.js')


module.exports = {
  ext,
  cuttingBoard,
  cuttingBoardIndex,
  commonCSS,
  projectFolder,
  outHTML,
  outCSS,
  jsFolder,
  mainJS
}