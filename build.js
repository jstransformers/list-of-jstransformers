'use strict'

var list = require('./list')
var fs = require('fs')

list().then(function (transforms) {
  var output = JSON.stringify(transforms, null, 2)
  fs.writeFileSync('list-of-jstransformers.json', output)
}, function (err) {
  throw new Error(err)
})
