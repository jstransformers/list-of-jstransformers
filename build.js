'use strict'

var list = require('./list')
var fs = require('fs')

list().done(function (transforms) {
  var output = JSON.stringify(transforms, null, 2)
  fs.writeFileSync('list-of-jstransformers.json', output)
})
