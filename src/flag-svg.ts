import * as CountryFlagSvg from './svg'

declare global {
  interface Window {
    CountryFlagSvg: any
  }
}
window.CountryFlagSvg = CountryFlagSvg

export default CountryFlagSvg
