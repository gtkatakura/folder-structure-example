const path = require('path')

module.exports = {
  "extends": [
    "airbnb",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  "rules": {
    "arrow-parens": "off",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 1,
      },
    ],
    "semi": ["error", "never"],
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": "off"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [path.join(__dirname, 'src')],
      },
    },
  },
}
