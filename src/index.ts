import countries from './data'
import { Country } from './types'

/**
 * find one by ISO 3166-1 alpha-2 eg. US, MM
 *
 * @param {string} code
 * @returns {Country | undefined}
 */
const findOneByCountryCode = (code: string): Country | undefined => {
  return countries.find((country: Country) => country.code.toLowerCase() === code.toLowerCase())
}

/**
 * find one by phone dial code eg. +1, +95
 *
 * @param {string} dialCode
 * @returns {Country | undefined}
 */
const findOneByDialCode = (dialCode: string): Country | undefined => {
  const filteredCountries = findByDialCode(dialCode)
  const preferred = filteredCountries.find((country: Country) => country.dial_code === dialCode && country.preferred)
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
const findByDialCode = (dialCode: string): Array<Country> => {
  return countries.filter((country) => country.dial_code === dialCode)
}

/**
 * get all countries
 *
 * @returns {Array<Country>}
 */
const getAll = (): Array<Country> => {
  return countries
}

/**
 * Find list of countries by keyword, eg. United, Myanmar, India
 *
 * @param {string} keyword
 * @returns {Array<Country>}
 */
const findByKeyword = (keyword: string): Array<Country> => {
  return countries.filter((country: Country) => {
    return (
      country.code.toLowerCase().includes(keyword.toLowerCase()) ||
      country.name.toLowerCase().includes(keyword.toLowerCase()) ||
      country.dial_code.toLowerCase().includes(keyword.toLowerCase())
    )
  })
}

const CountryList = {
  findOneByCountryCode,
  findOneByDialCode,
  findByDialCode,
  findByKeyword,
  getAll,
}

declare global {
  interface Window {
    CountryList: any
  }
}
window.CountryList = CountryList

export default CountryList
export { Country }
