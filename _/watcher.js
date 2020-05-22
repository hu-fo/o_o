const { watch } = require('fs')

function watcher(pth, callback) {
  let wait = false
  watch(pth, (event, filename) => {
    if (wait) return
    wait = setTimeout(() => wait = false, 100)

    callback()
  })
}

module.exports = watcher