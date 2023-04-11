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

enum PhoneNumberFormat {
  DEFAULT = 0,
  READABLE,
  READABLE_WITH_DIAL_CODE,
}

export { CountryInterface, CountryFlagSvgInterface, filterOption, PhoneNumberFormat }
