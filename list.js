'use strict'

var Promise = require('promise')
var npmKeyword = require('npm-keyword')

var ignore = [
  'jstransformer-cli',
  'jstransformer-loader'
]

module.exports = function () {
  return Promise.resolve(npmKeyword.names('jstransformer')).then(function (data) {
    // Filter out all the none-Transforms
    var jstransformers = data.filter(function (name) {
      return name.indexOf('jstransformer-') === 0 &&
        ignore.indexOf(name) === -1
    })

    // Remove the prefixing 'jstransformer-' from the name
    var transforms = jstransformers.map(function (currentValue) {
      return currentValue.replace('jstransformer-', '')
    })

    return transforms
  })
}
