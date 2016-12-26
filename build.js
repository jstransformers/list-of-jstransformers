'use strict'

var fs = require('fs')
var list = require('./list')

list().done(function (transforms) {
  var output = JSON.stringify(transforms, null, 2)
  fs.writeFileSync('list-of-jstransformers.json', output)
})
