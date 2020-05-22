const settings = require('../settings')

const HTML =
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css" />
  <title>${settings.projectName}</title>
</head>
<body>

  <script type="module" src="js/main.js"></script>
</body>
</html>`

const component = '<html>\n\n</html>\n\n<style>\n\n</style>'

const commonCSS =
`*, *::after, *::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.6rem;
}

button, input, textarea {
  background: none;
  border: none;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  outline: none;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}`

module.exports = {
  HTML,
  component,
  commonCSS
}