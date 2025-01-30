import CountryList, { Country } from '../src'

describe('Currency Information Tests', () => {
  test('should return correct currency code for countries', () => {
    expect(CountryList.findOneByCountryCode('US')?.currencyCode).toBe('USD')
    expect(CountryList.findOneByCountryCode('GB')?.currencyCode).toBe('GBP')
    expect(CountryList.findOneByCountryCode('TR')?.currencyCode).toBe('TRY')
    expect(CountryList.findOneByCountryCode('AT')?.currencyCode).toBe('EUR')
    expect(CountryList.findOneByCountryCode('JP')?.currencyCode).toBe('JPY')
  })

  test('should return correct currency name for countries', () => {
    expect(CountryList.findOneByCountryCode('US')?.currency).toBe('US Dollar')
    expect(CountryList.findOneByCountryCode('GB')?.currency).toBe('British Pound')
    expect(CountryList.findOneByCountryCode('TR')?.currency).toBe('Turkish Lira')
    expect(CountryList.findOneByCountryCode('AT')?.currency).toBe('Euro')
    expect(CountryList.findOneByCountryCode('JP')?.currency).toBe('Japanese Yen')
  })

  test('should return correct currency symbol for countries', () => {
    expect(CountryList.findOneByCountryCode('US')?.currencySymbol).toBe('$')
    expect(CountryList.findOneByCountryCode('GB')?.currencySymbol).toBe('£')
    expect(CountryList.findOneByCountryCode('TR')?.currencySymbol).toBe('₺')
    expect(CountryList.findOneByCountryCode('AT')?.currencySymbol).toBe('€')
    expect(CountryList.findOneByCountryCode('JP')?.currencySymbol).toBe('¥')
  })

  test('should return correct country with the currency code', () => {
    expect(CountryList.findOneByCurrencyCode('USD')).toBeInstanceOf(Country)
    expect(CountryList.findOneByCurrencyCode('GBP')).toBeInstanceOf(Country)
    expect(CountryList.findOneByCurrencyCode('TRY')).toBeInstanceOf(Country)
    expect(CountryList.findOneByCurrencyCode('JPY')).toBeInstanceOf(Country)
  })

  test('should match Intl.NumberFormat currency formatting', () => {
    const testAmount = 1234.56
    const testCases = [
      { code: 'US', currency: 'USD', locale: 'en-US' },
      { code: 'GB', currency: 'GBP', locale: 'en-GB' },
      { code: 'TR', currency: 'TRY', locale: 'tr-TR' },
      { code: 'JP', currency: 'JPY', locale: 'ja-JP' },
      { code: 'AT', currency: 'EUR', locale: 'de-AT' },
    ]

    testCases.forEach(({ code, currency, locale }) => {
      const country = CountryList.findOneByCountryCode(code)
      expect(country).toBeDefined()

      const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: country?.currencyCode,
      })

      // Verify that the currency code matches what Intl.NumberFormat expects
      expect(() => formatter.format(testAmount)).not.toThrow()
      expect(country?.currencyCode).toBe(currency)
    })
  })

  test('should have currency information for all countries', () => {
    CountryList.getAll({ withSecondary: false }).forEach((country) => {
      expect(country.currencyCode).toBeDefined()
      expect(country.currency).toBeDefined()
      expect(country.currencySymbol).toBeDefined()
    })
  })
})
