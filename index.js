module.exports = {

  "extends": "airbnb-base/legacy",
  "env": {
    "browser": true,
    "jasmine": true,
    "jquery": true
  },
  "globals": {
    "angular": false,
    "inject": false,
    "getJSONFixture": false
  },
  "rules": {
    "func-names": "off",
    "max-len": "off",
    "vars-on-top": "warn",
    "one-var": "warn",
    "no-undef": "warn",
    "no-unused-vars": "warn"
  }

};