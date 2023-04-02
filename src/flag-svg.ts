import * as Svg from './svg'
import { CountryFlagSvgInterface } from './types'

const CountryFlagSvg = Svg as unknown as CountryFlagSvgInterface

declare global {
  interface Window {
    CountryFlagSvg: CountryFlagSvgInterface
  }
}
window.CountryFlagSvg = CountryFlagSvg
export default CountryFlagSvg
