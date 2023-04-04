interface CountryInterface {
  name: string
  dial_code: string
  code: string
  flag: string
  preferred?: boolean
}

interface CountryFlagSvgInterface {
  [key: string]: string
}

export { CountryInterface, CountryFlagSvgInterface }
