interface CountryInterface {
  name: string
  dial_code: string
  code: string
  flag: string
  preferred?: boolean
  secondary?: boolean
  area_codes?: Array<string>
  country_code?: string
}

interface CountryFlagSvgInterface {
  [key: string]: string
}

interface FilterOption {
  withSecondary: boolean
}

export type GroupedCountries = {
  [key: string]: CountryInterface[]
}

export { CountryInterface, CountryFlagSvgInterface, FilterOption }
