const path = require('path')

module.exports = {
  "extends": [
    "react-app",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [path.join(__dirname, 'src')]
      }
    }
  }
}
