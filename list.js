'use strict'

const npmKeyword = require('npm-keyword')

const ignore = [
  'jstransformer-cli',
  'jstransformer-loader'
]

module.exports = function () {
  return npmKeyword.names('jstransformer').then(data => {
    // Filter out all the none-Transforms
    const jstransformers = data.filter(name => {
      return name.indexOf('jstransformer-') === 0 &&
        !ignore.includes(name)
    })

    // Remove the prefixing 'jstransformer-' from the name
    const transforms = jstransformers.map(currentValue => {
      return currentValue.replace('jstransformer-', '')
    })

    // Sort the transformer list.
    transforms.sort()

    return transforms
  })
}
