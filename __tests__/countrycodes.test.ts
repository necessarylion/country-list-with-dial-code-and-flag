import CountryList, { Country } from '../src'

describe('country code', () => {
  test('unique country code', () => {
    const uniqueCountryCodes = new Set<string>()
    const primaryCountryCodes = CountryList.getAll({ withSecondary: false }).map(
      (country: Country) => country.code,
    )
    primaryCountryCodes.forEach((code) => uniqueCountryCodes.add(code))

    expect(primaryCountryCodes.length).toBe(uniqueCountryCodes.size)
  })

  test('part of correct country code', () => {
    const primaryCountryCodes = CountryList.getAll({ withSecondary: false }).map(
      (country: Country) => country.code,
    )
    CountryList.getAll()
      .flatMap((country: Country) => country.partOf)
      .forEach((partOf: string) => {
        expect(primaryCountryCodes.includes(partOf)).toBe(true)
      })
  })
})
