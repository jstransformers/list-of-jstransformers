const assert = require('assert')
const test = require('testit')
const list = require('../list')
const json = require('..')

test('list-of-jstransformers.json is up to date', done => {
  list().then(transforms => {
    assert.deepStrictEqual(transforms, json)
    done()
  }, err => {
    done(err)
  }).catch(error => {
    console.error(error)
  })
})
