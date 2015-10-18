A simple clean way to parse numbers with Javascript

# Setup

```sh
npm install simple-parse-number
```

# Usage

```js
var parseNumber = require('simple-format-number');

parseNumber('1,000.342'); // => 1000.342
parseNumber('1.000,342', { decimal: ',', grouping: '.' }); // => 1000.342 (italian format)
```

# API

```js
parseNumber(string, options)
```

where:

- `number` the number to format
- `options` (compatible with the `symbols` option of [simple-format-number](https://github.com/gcanti/simple-format-number))
  - `decimal` the decimal symbol (default `.`)
  - `grouping` the grouping symbol (default `,`)

