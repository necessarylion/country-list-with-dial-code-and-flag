# Country list with dial code and flag

[![npm version](https://badge.fury.io/js/country-list-with-dial-code-and-flag.svg)](https://badge.fury.io/js/country-list-with-dial-code-and-flag) ![ts](https://badgen.net/badge/Built%20With/TypeScript/blue) ![contributors](https://badgen.net/github/contributors/necessarylion/country-list-with-dial-code-and-flag)

This package provide all country list with their flag emoji, flag svg and dial number code.

## [Full Documentation](https://zin-kyaw-kyaw.gitbook.io/country-flags/)

## Installation

#### Via NPM

```sh
npm install country-list-with-dial-code-and-flag
```

#### Via CDN

```html
<script src="https://cdn.jsdelivr.net/npm/country-list-with-dial-code-and-flag@latest/dist/main.js"></script>

https://cdn.jsdelivr.net/npm/country-list-with-dial-code-and-flag@latest/dist/main.js
```

##### With specific version number

```bash
https://cdn.jsdelivr.net/npm/country-list-with-dial-code-and-flag@5.0.4/dist/main.js
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
