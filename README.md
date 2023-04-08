# Country list with dial code and flag

[![npm version](https://badge.fury.io/js/country-list-with-dial-code-and-flag.svg)](https://badge.fury.io/js/country-list-with-dial-code-and-flag) ![ts](https://badgen.net/badge/Built%20With/TypeScript/blue) ![contributors](https://badgen.net/github/contributors/necessarylion/country-list-with-dial-code-and-flag)

This package provide all country list with their flag emoji, flag svg and dial number code.

## Demo 

##### SVG
<img width="500" src="https://raw.githubusercontent.com/necessarylion/country-list-with-dial-code-and-flag/master/demo/svg.png" />

##### EMOJI
<img width="500" src="https://raw.githubusercontent.com/necessarylion/country-list-with-dial-code-and-flag/master/demo/emoji.png" />

## Installation

#### Via CDN

```html
<script src="https://cdn.jsdelivr.net/npm/country-list-with-dial-code-and-flag/dist/main.js"></script>
```

##### Country Flag SVG (optional)

```html
<script src="https://cdn.jsdelivr.net/npm/country-list-with-dial-code-and-flag/dist/country-flag-svg.js"></script>
```

```html
<div id="flag"></div>
<script>
  const mm = window.CountryList.findOneByCountryCode('mm')
  document.getElementById('flag').innerHTML = window.CountryFlagSvg[mm.code]
</script>
```

#### Via NPM

```sh
npm install country-list-with-dial-code-and-flag
```

```js
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

##### Country Flag SVG (optional)

```js
import CountryFlagSvg from 'country-list-with-dial-code-and-flag/dist/flag-svg'

const myanmar = CountryList.findOneByCountryCode('mm')
if (myanmar) {
  const flagSvg = CountryFlagSvg[myanmar.code]
  console.log(flagSvg) // it return svg string
}
```

## Available Functions

### CountryList

| Function               | Description                          |
| ---------------------- | ------------------------------------ |
| `getAll`               | get all available countries          |
| `findOneByCountryCode` | find country by ISO 3166-1 alpha-2   |
| `findByCountryCode`    | find countries by ISO 3166-1 alpha-2 |
| `findOneByDialCode`    | find country by dial code Eg.        |
| `findByDialCode`       | find countries by dial code Eg.      |
| `findByKeyword`        | find countries with keyword Eg.      |

`getAll()`, `findByKeyword()`, `findByCountryCode()` functions support filter option for secondary dial code.
As a default `withSecondary` is `true`

Example. 

```js

const list = CountryList.findByCountryCode('DO', {withSecondary: false})
console.log(list.length) // 1

const list = CountryList.findByCountryCode('DO', {withSecondary: true})
console.log(list.length) // 3

```

### Country

| Function / Attribute       | Description                        |
| -------------------------- | ---------------------------------- |
| `formatPhoneNumber(phone)` | format phone number with dial code |
| `name`                     | get name attr from country         |
| `dialCode` or `dial_code`  | get name dial code from country    |
| `code`                     | get code attr from country         |
| `flag`                     | get flag emoji attr from country   |
| `preferred`                | get preferred attr from country    |

#### Sample Usage of `formatPhoneNumber()`

```js
import CountryList from 'country-list-with-dial-code-and-flag'

const mm = CountryList.findOneByCountryCode('mm')
if (mm) {
    mm.formatPhoneNumber('0888888888') // +95888888888
    mm.formatPhoneNumber('+95888888888') // +95888888888
    mm.formatPhoneNumber('888888888') // +95888888888
    mm.formatPhoneNumber('088-888-888-8') // +95888888888
}
```

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
