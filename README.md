# list-of-jstransformers

A cached JSON array of officially supported [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/list-of-jstransformers/master.svg)](https://travis-ci.org/jstransformers/list-of-jstransformers)
[![NPM version](https://img.shields.io/npm/v/list-of-jstransformers.svg)](https://www.npmjs.org/package/list-of-jstransformers)

## Installation

    npm install list-of-jstransformers

## API

```js
var jstransformers = require('list-of-jstransformers')

jstransformers.each(function (name) {
  console.log(name)
})
```

## Update

To update `list-of-jstransformers.json`, run:
  ```
  npm run build
  ```

## License

MIT
