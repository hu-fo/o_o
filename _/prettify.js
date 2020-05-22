function CSSPrettify(string) {
  const TAB = '  '

  let freshCSS = string.trim().split('}').filter(str => str !== '')
  freshCSS = freshCSS.map(block => {
    const strings = block.split('\n').filter(string => string.trim() !== '').map(string => string.trim())
    const res = strings.map((string, i) => {
      if(i === 0) return string
      if(i === strings.length - 1) return TAB + string + '\n' + '}'
      else return TAB + string
    })
    return res.join('\n')
  }).join('\n\n')

  return freshCSS
}

function HTMLPrettify(string) {
  const TAB = '  '
  return string.split('\n').map(str => str.replace(TAB, '')).join('\n').trim()
}

module.exports = {
  html: HTMLPrettify,
  css: CSSPrettify
}