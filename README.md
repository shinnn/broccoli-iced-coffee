# broccoli-iced-coffee

[![npm version](https://img.shields.io/npm/v/broccoli-iced-coffee.svg)](https://www.npmjs.com/package/broccoli-iced-coffee)
[![Build Status](https://travis-ci.com/shinnn/broccoli-iced-coffee.svg?branch=master)](https://travis-ci.com/shinnn/broccoli-iced-coffee)

A [Broccoli](https://github.com/broccolijs/broccoli) plugin to compile [IcedCoffeeScript](https://maxtaco.github.io/coffee-script/)

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install --save-dev broccoli-iced-coffee
```

## Example

```javascript
const filterIcedCoffee = require('broccoli-iced-coffee');
tree = filterIcedCoffee(tree, options);
```

## API

```javascript
const broccoliIcedCoffee = require('broccoli-iced-coffee');
```

### broccoliIcedCoffee(tree, options)

#### options.bare

Type: `boolean`  
Default: `false`

Compile without the top-level function wrapper.

## License

Copyright (c) 2014 - 2018 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT LIcense](./LICENSE).
