# Country list with dial code and flag

[![npm version](https://badge.fury.io/js/country-list-with-dial-code-and-flag.svg)](https://badge.fury.io/js/country-list-with-dial-code-and-flag) ![ts](https://badgen.net/badge/Built%20With/TypeScript/blue) ![ts](https://badgen.net/npm/license/lodash) ![countributers](https://badgen.net/github/contributors/necessarylion/country-list-with-dial-code-and-flag)


This package provide all country list with their flag emoji and dial number code.

## Installation

```sh
npm install country-list-with-dial-code-and-flag
```

```js
import CountryList from 'country-list-with-dial-code-and-flag'
```

## Available Functions

| Function | Description |
| ------ | ------ |
| `getList` | get all available countries |
| `searchFlag` | filter countries with keyword Eg. `searchFlag('keywordToSearch')`  |
| `findFlag` | get specific country by 2 character country code Eg. `findFlagByDialCode('MM')` |
| `findFlagsByDialCode` | get list of countries by dial code Eg. `findFlagByDialCode('+95')` |
| `findFlagByDialCode` | get country by dial code Eg. `findFlagByDialCode('+95')` |

## Example response
```
[
 { "name": "Afghanistan", "dial_code": "+93", "code": "AF", "flag": "🇦🇫" },
 { "name": "Myanmar", "dial_code": "+95", "code": "MM", "flag": "🇲🇲" }
]
```

## Development
Want to contribute? Great!
Fork the repo and create PR to us.

###### Buy me Coffee
[![kofi](https://badgen.net/badge/icon/kofi?icon=kofi&label)](https://ko-fi.com/zinkyawkyaw)
