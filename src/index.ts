import { Country } from './country'
import countries from './data'
import { CountryInterface, FilterOption, GroupedCountries } from './types'

class App {
  public phoneNumberUtil: any
  /**
   * find one by ISO 3166-1 alpha-2 eg. US, MM
   *
   * @param {string} code
   * @returns {Country | undefined}
   */
  public findOneByCountryCode(code: string): Country | undefined {
    const filteredCountries = this.findByCountryCode(code)
    return filteredCountries.find((country: Country) => {
      return !country.secondary
    })
  }

  /**
   * find one by phone dial code eg. +1, +95
   *
   * @param {string} dialCode
   * @returns {Country | undefined}
   */
  public findOneByDialCode(dialCode: string): Country | undefined {
    const filteredCountries = this.findByDialCode(dialCode)
    const preferred = filteredCountries.find((country: Country) => country.preferred)
    if (preferred) {
      return preferred
    }
    return filteredCountries[0] ?? undefined
  }

  /**
   * Find list of countries by country code code
   *
   * @param {string} code
   * @returns {Array<Country>}
   */
  public findByCountryCode(code: string, option?: FilterOption): Array<Country> {
    return this.getAll(option).filter(
      (country: Country) => country.code.toLowerCase() === code.toLowerCase(),
    )
  }

  /**
   * Find list of countries by phone dial code eg. +1, +95
   *
   * @param {string} dialCode
   * @returns {Array<Country>}
   */
  public findByDialCode(dialCode: string): Array<Country> {
    return this.getAll().filter((country: Country) => country.dialCode === dialCode)
  }

  /**
   * Find list of countries by keyword, eg. United, Myanmar, India
   *
   * @param {string} keyword
   * @returns {Array<Country>}
   */
  public findByKeyword(keyword: string, option?: FilterOption): Array<Country> {
    return this.getAll(option).filter((country: Country) => {
      return (
        country.code.toLowerCase().includes(keyword.toLowerCase()) ||
        country.name.toLowerCase().includes(keyword.toLowerCase()) ||
        country.dialCode.toLowerCase().includes(keyword.toLowerCase())
      )
    })
  }

  /**
   * get all countries
   *
   * @returns {Array<Country>}
   */
  public getAll(option?: FilterOption): Array<Country> {
    let list = countries
    if (option && !option.withSecondary) {
      list = countries.filter((country) => !country.secondary)
    }
    return list.map((data: CountryInterface) => new Country(data))
  }

  /**
   * Group countries by the first letter of their name
   * @param array
   * @returns
   */
  public getCountriesGroupedByName(): GroupedCountries {
    const grouped: Record<string, Country[]> = {}
    this.getAll().forEach((country) => {
      const firstLetter = country.name.charAt(0).toLowerCase()
      if (!grouped[firstLetter]) {
        grouped[firstLetter] = []
      }
      grouped[firstLetter].push(country)
    })
    return grouped
  }

  /**
   * set phone number util to use phone number formatter
   * @param phoneNumberUtil
   */
  public setPhoneNumberUtil(phoneNumberUtil: any) {
    this.phoneNumberUtil = phoneNumberUtil
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
export { Country, FilterOption }
