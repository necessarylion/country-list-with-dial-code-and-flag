import { Country } from './country'
import countries from './data'
import { CountryInterface } from './types'

class App {
  /**
   * find one by ISO 3166-1 alpha-2 eg. US, MM
   *
   * @param {string} code
   * @returns {Country | undefined}
   */
  public findOneByCountryCode(code: string): Country | undefined {
    const data = countries.find((country: CountryInterface) => {
      return country.code.toLowerCase() === code.toLowerCase()
    })
    if (!data) {
      return undefined
    }
    return new Country(data)
  }

  /**
   * find one by phone dial code eg. +1, +95
   *
   * @param {string} dialCode
   * @returns {Country | undefined}
   */
  public findOneByDialCode(dialCode: string): Country | undefined {
    const filteredCountries = this.findByDialCode(dialCode)
    const preferred = filteredCountries.find((country: Country) => {
      return country.dialCode === dialCode && country.preferred
    })
    if (preferred) {
      return preferred
    }
    return filteredCountries[0] ?? undefined
  }

  /**
   * Find list of countries by phone dial code eg. +1, +95
   *
   * @param {string} dialCode
   * @returns {Array<Country>}
   */
  public findByDialCode(dialCode: string): Array<Country> {
    return countries
      .filter((country: CountryInterface) => country.dial_code === dialCode)
      .map((data: CountryInterface) => new Country(data))
  }

  /**
   * get all countries
   *
   * @returns {Array<Country>}
   */
  public getAll(): Array<Country> {
    return countries.map((data: CountryInterface) => new Country(data))
  }

  /**
   * Find list of countries by keyword, eg. United, Myanmar, India
   *
   * @param {string} keyword
   * @returns {Array<Country>}
   */
  public findByKeyword(keyword: string): Array<Country> {
    return countries
      .filter((country: CountryInterface) => {
        return (
          country.code.toLowerCase().includes(keyword.toLowerCase()) ||
          country.name.toLowerCase().includes(keyword.toLowerCase()) ||
          country.dial_code.toLowerCase().includes(keyword.toLowerCase())
        )
      })
      .map((data: CountryInterface) => new Country(data))
  }
}

const CountryList = new App()

declare global {
  interface Window {
    CountryList: App
  }
}

window.CountryList = CountryList

export default CountryList
export { Country }
