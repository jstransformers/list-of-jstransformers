var test = require('testit')
var assert = require('assert')
var list = require('../list')
var json = require('..')

test('list-of-jstransformers.json is up to date', function (done) {
  list().then(function (transforms) {
    assert.deepEqual(transforms, json)
    done()
  }, function (err) {
    done(err)
  })
})
