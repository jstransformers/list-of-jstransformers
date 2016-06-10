'use strict'

var Promise = require('promise')
var github = Promise.denodeify(require('github-repositories'))

var ignore = [
  'jstransformer-cli',
  'jstransformer-loader'
]

module.exports = function () {
  return github('jstransformers').then(function (data) {
    // Filter out all the none-Transforms
    var jstransformers = data.filter(function (value) {
      return value.name.indexOf('jstransformer-') === 0 &&
        ignore.indexOf(value.name) === -1
    })

    // Remove the prefixing 'jstransformer-' from the name
    var transforms = jstransformers.map(function (currentValue) {
      return currentValue.name.replace('jstransformer-', '')
    })

    return transforms
  })
}
