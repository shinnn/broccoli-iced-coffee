'use strict';

var assert = require('assert');
var fs = require('fs');
var Q = require('q');

var readFile = Q.denodeify(fs.readFile);

describe('broccoli-iced-coffee', function() {
  it('should compile IcedCoffeeScript', function() {
    return Q.all([
      readFile('test/actual/await.js'),
      readFile('test/expected/await.js')
    ]).spread(function(actual, expected) {
      assert.strictEqual(actual.toString(), expected.toString());
    });
  });
});
