'use strict'

const fs = require('fs')
const list = require('./list')

list().then(transforms => {
  const output = JSON.stringify(transforms, null, 2)
  fs.writeFileSync('list-of-jstransformers.json', output)
}).catch(err => {
  console.error(err)
})
