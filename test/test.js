'use strict';

var assert = require('assert');
var fs = require('fs');

var expected = fs.readFileSync('test/expected.js').toString();

describe('broccoli-iced-coffee', function () {
  it('should compile IcedCoffeeScript', function (done) {
    fs.readFile('test/actual/fixture.js', function(err, data) {
      assert.strictEqual(data.toString(), expected);
      done();
    });
  });
});