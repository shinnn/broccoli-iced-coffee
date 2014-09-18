'use strict';

var readFiles = require('read-files-promise');
var test = require('tape');

test('broccoli-iced-coffee', function(t) {
  t.plan(1);
  
  readFiles(['test/actual/await.js', 'test/expected/await.js'])
  .then(function(bufs) {
    var actual = bufs[0].toString();
    var expected = bufs[1].toString();
    t.equal(actual, expected, 'should compile IcedCoffeeScript');
  }, function(err) {
    t.error(err);
  });
});
