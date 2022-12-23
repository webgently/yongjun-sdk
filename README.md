# The Lord of the Rings API SDK (written by YongJun 12/23/2022)

An SDK for an existing Lord of the Rings API

## Installation

```shell
yarn add yongjun-sdk
```
or 
```shell
npm install yongjun-sdk -S
```

## Usage

- javascript

```javascript
var sdk = require('yongjun-sdk');
sdk.initApi("y-********-******")
sdk.getMovieList().then(json=>{
    console.log(json)
});
```

- typescript

```typescript
import sdk from 'yongjun-sdk';
sdk.initApi("y-********-******")
sdk.getMovieList().then(json=>{
    console.log(json)
});
```

## Development

This module supports advanced JavaScript syntax, but exports an ES5-compatible module. To re-build the exported module after making changes, run `npm run bundle` (must have [browserify](http://browserify.org/) installed).

