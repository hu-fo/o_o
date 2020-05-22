const { readFileSync } = require('fs')
const regs = require('./regs')
const common = require('./common')

function readFile(path) {
  return readFileSync(path, { encoding: 'utf8' })
}

function matchHTML(string) {
  return string.match(regs.html)[1]
}

function matchCSS(string) {
  return string.match(regs.css)[1]
}

function prepareCSS(string) {
  let commonCSS = readFile(common.commonCSS)
  return commonCSS + '\n\n' + string
}

function prepareHTML(string) {
  let outHTML = readFile(common.outHTML)
  let oldBody = outHTML.match(regs.body).pop()
  return outHTML.replace(oldBody, '\n' + string + '\n')
}

function randomName(componentName) {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  let str = componentName + '-' + letters[randomNumber(letters.length - 1)]
  for(let i = 0; i < 7; i++) {
    const isNum = Math.random() > 0.5
    str += isNum ? randomNumber(9) : letters[randomNumber(letters.length - 1)]
  }

  function randomNumber(max) {
    return Math.round(Math.random() * max)
  }

  return str
}

function replaceClasses(string, componentName) {
  let html = string
  const HTMLMatches = [...html.matchAll(regs.HTMLClasses)]
  const CSSMatches = [...html.matchAll(regs.CSSClasses)]

  if(HTMLMatches) {
    HTMLMatches.forEach(match => {
      let classesArray = match[1].split(' ')
      let classesString = ''
      classesArray = classesArray.filter(className => className.trim() !== '')
      classesArray.forEach(className => {
        if(className.match(/!.+/i)) {
          classesString += className.replace('!', '')
        } else {
          classesString += componentName + '-' + className + ' '
        }
      })
      html = html.replace(`class="${match[1]}"`, `class="${classesString.trim()}"`)
    })
  }

  if(CSSMatches) {
    CSSMatches.forEach(match => {
      let selector = componentName + '-' + match[1].trim()
      html = html.replace(match[0], `.${selector} {`)
    })
  }

  return html
}

module.exports = {
  readFile,
  matchHTML,
  matchCSS,
  prepareCSS,
  prepareHTML,
  randomName,
  replaceClasses
}