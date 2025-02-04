import { Country } from '..'

interface CountryInterface {
  name: string
  dial_code: string
  code: string
  flag: string
  preferred?: boolean
  secondary?: boolean
  area_codes?: Array<string>
  country_code?: string
  local_name?: string
  part_of?: string[]
  currency?: string
  currency_code?: string
  currency_symbol?: string
}

interface CountryFlagSvgInterface {
  [key: string]: string
}

interface FilterOption {
  withSecondary: boolean
}

type GroupedCountries = {
  [key: string]: Country[]
}

export { CountryInterface, CountryFlagSvgInterface, FilterOption, GroupedCountries }
