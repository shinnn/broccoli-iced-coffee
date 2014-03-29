# broccoli-iced-coffee

[![NPM version](https://badge.fury.io/js/broccoli-iced-coffee.png)](http://badge.fury.io/js/broccoli-iced-coffee)
[![Build Status](https://travis-ci.org/shinnn/broccoli-iced-coffee.png?branch=master)](https://travis-ci.org/shinnn/broccoli-iced-coffee)
[![Dependency Status](https://david-dm.org/shinnn/broccoli-iced-coffee.png)](https://david-dm.org/shinnn/broccoli-iced-coffee)
[![devDependency Status](https://david-dm.org/shinnn/broccoli-iced-coffee/dev-status.png)](https://david-dm.org/shinnn/broccoli-iced-coffee#info=devDependencies)

[IcedCoffeeScript](http://maxtaco.github.io/coffee-script/) compiler for [Broccoli](https://github.com/joliss/broccoli)

## Installation

Install with [npm](https://www.npmjs.org/). (Make sure you have installed [Node](http://nodejs.org/).)

```
npm i --save broccoli-iced-coffee
```

## Example

```javascript
var filterIcedCoffee = require('broccoli-iced-coffee');
tree = filterIcedCoffee(tree, options);
```

## API

### filterIcedCoffee(tree, options)

#### options.bare

Type: `Boolean` Default: `false`

Compile without the top-level function wrapper.

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT LIcense](./LICENSE).
