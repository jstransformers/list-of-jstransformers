'use strict'

var github = require('github-repositories')
var Promise = require('promise')

var ignore = [
  'jstransformer-cli',
  'jstransformer-loader'
]

module.exports = function () {
  return new Promise(function (fulfill, reject) {
    github('jstransformers', function (err, data) {
      if (err) {
        reject(err)
      }

      // Filter out all the none-Transforms
      var jstransformers = data.filter(function (value) {
        return value.name.indexOf('jstransformer-') === 0 &&
          ignore.indexOf(value.name) === -1
      })

      // Remove the prefixing 'jstransformer-' from the name
      var transforms = jstransformers.map(function (currentValue) {
        return currentValue.name.replace('jstransformer-', '')
      })

      fulfill(transforms)
    })
  })
}
