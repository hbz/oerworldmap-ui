
module.exports = {
  "testRegex": "test/.*\\.(js|jsx)$",
  "setupTestFrameworkScriptFile": "<rootDir>test/helpers/browser.js",
  "testPathIgnorePatterns": [
    "<rootDir>/test/resources/",
    "<rootDir>/test/helpers/"
  ],
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass|pcss)$": "identity-obj-proxy"
  }
}