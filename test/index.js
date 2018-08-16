const test = require('testit')
const assert = require('assert')
const list = require('../list')
const json = require('..')

test('list-of-jstransformers.json is up to date', done => {
  list().then(transforms => {
    assert.deepStrictEqual(transforms, json)
    done()
  }, err => {
    done(err)
  })
})
