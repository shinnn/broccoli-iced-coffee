'use strict';

var assert = require('assert');
var fs = require('fs');

var expected = fs.readFileSync('test/expected/await.js').toString();

describe('broccoli-iced-coffee', function () {
  it('should compile IcedCoffeeScript', function (done) {
    fs.readFile('test/actual/await.js', function(err, data) {
      if (err) done(err);
      assert.strictEqual(data.toString(), expected.toString());
      done();
    });
  });
});