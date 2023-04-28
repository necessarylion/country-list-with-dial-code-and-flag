# Country list with dial code and flag

[![npm version](https://badge.fury.io/js/country-list-with-dial-code-and-flag.svg)](https://badge.fury.io/js/country-list-with-dial-code-and-flag) ![ts](https://badgen.net/badge/Built%20With/TypeScript/blue) ![contributors](https://badgen.net/github/contributors/necessarylion/country-list-with-dial-code-and-flag)

This package provide all country list with their flag emoji, flag svg and dial number code.

## [Full Documentation](https://country-flag.zinkyawkyaw.dev/)

## Installation

#### Via NPM

```sh
npm install country-list-with-dial-code-and-flag
```

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

## Development

Want to contribute? Great!
Fork the repo and create PR to us.
