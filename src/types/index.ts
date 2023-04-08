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

interface filterOption {
  withSecondary: boolean
}

export { CountryInterface, CountryFlagSvgInterface, filterOption }
