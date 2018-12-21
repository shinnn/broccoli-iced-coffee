'use strict';

const BroccoliIcedCoffee = require('.');
const {build, Node} = require('broccoli-fixture');
const cloneDeep = require('lodash/cloneDeep');
const test = require('tape');

test('broccoli-iced-coffee', async t => {
	const files0 = await build(new BroccoliIcedCoffee(new Node({
		'non-iced.txt': 'console.log 1',
		'await.iced': `for i in [0..5]
	await setTimeout(defer(), 10)
	console.log 'Hi'`
	})));

	t.ok(
		files0['await.js'].includes('require(\'iced-runtime-3\')'),
		'should compile IcedCoffeeScript files.'
	);

	t.equal(
		files0['non-iced.txt'],
		'console.log 1',
		'should ignore non-iced-coffee files.'
	);

	const options = {
		persist: true,
		bare: true
	};
	const clonedOptions = cloneDeep(options);

	const files1 = await build(new BroccoliIcedCoffee(new Node({'1.iced': 'x=1'}), options));

	t.equal(
		files1['1.js'],
		'var x;\n\nx = 1;\n',
		'should support IcedCoffeeScript options.'
	);

	t.deepEqual(options, clonedOptions, 'should not mutate original options.');

	t.end();
});

test('Argument validation', async t => {
	t.throws(
		() => new BroccoliIcedCoffee('dir/', {}, {}),
		/^RangeError.*Expected 1 or 2 arguments \(<string\|Object>\[, <Object>\]\), but got 3 arguments\./u,
		'should fail when it takes too many arguments.'
	);

	t.throws(
		() => new BroccoliIcedCoffee(),
		/^RangeError.*Expected 1 or 2 arguments \(<string\|Object>\[, <Object>\]\), but got no arguments\./u,
		'should fail when it takes no arguments.'
	);

	t.end();
});
