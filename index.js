'use strict';

const BroccoliPersistentFilter = require('broccoli-persistent-filter');
const {compile} = require('iced-coffee-script-3');
const jsonStableStringify = require('json-stable-stringify');

const ARG_LENGTH_ERROR = 'Expected 1 or 2 arguments (<string|Object>[, <Object>])';
const internalOptions = Symbol('internalOptions');
const optionHash = Symbol('optionHash');

class IcedCoffeeFilter extends BroccoliPersistentFilter {
	constructor(...args) {
		const argLen = args.length;

		if (argLen === 0) {
			const error = new RangeError(`${ARG_LENGTH_ERROR}, but got no arguments.`);
			error.code = 'ERR_MISSING_ARGS';

			throw error;
		}

		if (argLen > 2) {
			const error = new RangeError(`${ARG_LENGTH_ERROR}, but got ${argLen} arguments.`);
			error.code = 'ERR_TOO_MANY_ARGS';

			throw error;
		}

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
