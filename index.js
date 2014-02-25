'use strict';

var Filter = require('broccoli-filter');
var compileIcedCoffee = require('iced-coffee-script').compile;

function ICSFilter(inputTree, options) {
  if (!(this instanceof ICSFilter)) {
    return new ICSFilter(inputTree, options);
  }
  
  this.inputTree = inputTree;
  this.options = options || {};
}

ICSFilter.prototype = Object.create(Filter.prototype);
ICSFilter.prototype.constructor = ICSFilter;

ICSFilter.prototype.extensions = ['iced'];
ICSFilter.prototype.targetExtension = 'js';

ICSFilter.prototype.processString = function(str) {
  return compileIcedCoffee(str, this.options);
};

module.exports = ICSFilter;