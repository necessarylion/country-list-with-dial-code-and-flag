import * as Svg from './svg'
import { CountryFlagSvgInterface } from './types'

const CountryFlagSvg = Svg as unknown as CountryFlagSvgInterface

declare global {
  interface Window {
    CountryFlagSvg: CountryFlagSvgInterface
  }
}

if (typeof window !== 'undefined') {
  window.CountryFlagSvg = CountryFlagSvg
}
export default CountryFlagSvg
