# Country list with dial code and flag

[![npm version](https://badge.fury.io/js/country-list-with-dial-code-and-flag.svg)](https://badge.fury.io/js/country-list-with-dial-code-and-flag) ![ts](https://badgen.net/badge/Built%20With/TypeScript/blue) ![contributors](https://badgen.net/github/contributors/necessarylion/country-list-with-dial-code-and-flag)

This package provide all country list with their flag emoji and dial number code.

## Installation

#### Via CDN

```html
<script src="https://cdn.jsdelivr.net/npm/country-list-with-dial-code-and-flag/dist/main.js"></script>
```

#### Via NPM

```sh
npm install country-list-with-dial-code-and-flag
```

```ts
// js
import CountryList from 'country-list-with-dial-code-and-flag'

// ts
import CountryList, { Country } from 'country-list-with-dial-code-and-flag'

CountryList.getAll() // Response => Array<Country>
CountryList.findOneByCountryCode('MM') // Response => Country
CountryList.findOneByDialCode('+95') // Response => Country
CountryList.findByDialCode('+95') // Response => Array<Country>
CountryList.findByKeyword('united') // Response => Array<Country>
```

## Available Functions

| Function               | Description                        |
| ---------------------- | ---------------------------------- |
| `getAll`               | get all available countries        |
| `findOneByCountryCode` | find country by ISO 3166-1 alpha-2 |
| `findOneByDialCode`    | find country by dial code Eg.      |
| `findByDialCode`       | find countries by dial code Eg.    |
| `findByKeyword`        | find countries with keyword Eg.    |

## Example response

```json
[
 { "name": "Afghanistan", "dial_code": "+93", "code": "AF", "flag": "🇦🇫" },
 { "name": "Myanmar", "dial_code": "+95", "code": "MM", "flag": "🇲🇲" }
 ...
]
```

## Development

Want to contribute? Great!
Fork the repo and create PR to us.
