import { describe, it } from 'mocha'
import assert from 'assert'
import testdata from './resources/test.json'

describe('JSON', function () {
  describe('load', function () {
    it('should load resources/test.json', function () {
      assert.deepEqual({ 'foo': 'bar' }, testdata)
    })
  })
})
