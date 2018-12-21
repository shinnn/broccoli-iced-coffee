# broccoli-iced-coffee

[![npm version](https://img.shields.io/npm/v/broccoli-iced-coffee.svg)](https://www.npmjs.com/package/broccoli-iced-coffee)
[![Build Status](https://travis-ci.com/shinnn/broccoli-iced-coffee.svg?branch=master)](https://travis-ci.com/shinnn/broccoli-iced-coffee)

A [Broccoli](https://github.com/broccolijs/broccoli) plugin to compile [IcedCoffeeScript](https://github.com/maxtaco/coffee-script/tree/iced3)

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install --save-dev broccoli-iced-coffee
```

## API

```javascript
const BroccoliIcedCoffee = require('broccoli-iced-coffee');
```

### class BroccoliIcedCoffee(*node* *[, options]*)

*node*: `string` (directory path) or `Object` ([Broccoli node](https://github.com/broccolijs/broccoli/blob/master/docs/node-api.md#part-2-node-api-specification))  
*options*: `Object` ([`compile()`](https://github.com/maxtaco/coffee-script/blob/v111.1.1/src/coffee-script.coffee#L59) options)

```javascript
//Brocfile.js
const BroccoliIcedCoffee = require('broccoli-iced-coffee');

module.exports = new BroccoliCleanCss('path/to/iced/sources');
```

## License

Copyright (c) 2014 - 2018 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT LIcense](./LICENSE).
