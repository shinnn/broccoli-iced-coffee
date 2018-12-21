'use strict';

const BroccoliPersistentFilter = require('broccoli-persistent-filter');
const {compile} = require('iced-coffee-script-3');
const jsonStableStringify = require('json-stable-stringify');

const internalOptions = Symbol('internalOptions');
const optionHash = Symbol('optionHash');

class IcedCoffeeFilter extends BroccoliPersistentFilter {
	constructor(...args) {
		super(...args);

		this.inputTree = args.shift();
		this[internalOptions] = args[0] || {};
	}

	baseDir() { // eslint-disable-line class-methods-use-this
		return __dirname;
	}

	cacheKeyProcessString(string, relativePath) {
		this[optionHash] = this[optionHash] || jsonStableStringify(this[internalOptions]);

		return `${this[optionHash]}${super.cacheKeyProcessString(string, relativePath)}`;
	}

	processString(str) {
		return compile(str, this[internalOptions]);
	}
}

IcedCoffeeFilter.prototype.extensions = ['iced'];
IcedCoffeeFilter.prototype.targetExtension = 'js';

module.exports = IcedCoffeeFilter;
