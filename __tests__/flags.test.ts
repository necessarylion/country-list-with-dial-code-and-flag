import CountryList, { Country } from '../src/index'
import CountryFlagSvg from '../src/flag-svg'
import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber'

CountryList.setPhoneNumberUtil(PhoneNumberUtil.getInstance())

describe('getList', () => {
  test('getList', () => {
    expect(CountryList.getAll()).toBeInstanceOf(Array)
  })

  test('getCountriesGroupedByName', () => {
    expect(CountryList.groupCountriesByFirstLetter()).toBeInstanceOf(Object)
    expect(CountryList.groupCountriesByFirstLetter()['a'][0]).toBeInstanceOf(Country)
    expect(CountryList.groupCountriesByFirstLetter(CountryList.getAll())).toBeInstanceOf(Object)
  })
})

describe('multiple area code', () => {
  test('withSecondary true', () => {
    const result = CountryList.findByCountryCode('DO', { withSecondary: true })
    expect(result).toBeInstanceOf(Array)
    expect(result.length).toBe(3)
  })

  test('withSecondary false', () => {
    const result = CountryList.findByCountryCode('DO', { withSecondary: false })
    expect(result).toBeInstanceOf(Array)
    expect(result.length).toBe(1)
  })
})

describe('getList', () => {
  test('findFlag type Object', () => {
    expect(CountryList.findOneByCountryCode('mm')).toBeInstanceOf(Country)
  })

  test('findFlag with Capital type Object', () => {
    expect(CountryList.findOneByCountryCode('MM')).toBeInstanceOf(Country)
  })

  test('findFlag return exact value', () => {
    const result = CountryList.findOneByCountryCode('mm')
    expect(result?.code).toEqual('MM')
    expect(result?.dialCode).toEqual('+95')
    expect(result?.flag).toEqual('🇲🇲')
    expect(result?.name).toEqual('Myanmar')
    expect(result?.preferred).toEqual(false)
  })

  test('findFlag with Capital return exact value', () => {
    const result = CountryList.findOneByCountryCode('MM')
    expect(result?.code).toEqual('MM')
    expect(result?.dialCode).toEqual('+95')
    expect(result?.dial_code).toEqual('+95')
    expect(result?.flag).toEqual('🇲🇲')
    expect(result?.name).toEqual('Myanmar')
    expect(result?.preferred).toEqual(false)
  })
})

describe('findFlagByDialCode', () => {
  test('findFlagByDialCode type Object', () => {
    const mm = CountryList.findOneByDialCode('+95')
    expect(mm).toBeInstanceOf(Country)
    expect(mm?.formatPhoneNumber('0888888888')).toEqual('+95888888888')
    expect(mm?.formatPhoneNumber('+95888888888')).toEqual('+95888888888')
    expect(mm?.formatPhoneNumber('888888888')).toEqual('+95888888888')
    expect(mm?.formatPhoneNumber('8-888-888-88')).toEqual('+95888888888')
    expect(mm?.formatPhoneNumber(888888888)).toEqual('+95888888888')
  })

  test('findFlagByDialCode return exact value', () => {
    const result = CountryList.findOneByDialCode('+95')
    expect(result?.code).toEqual('MM')
    expect(result?.dialCode).toEqual('+95')
    expect(result?.dial_code).toEqual('+95')
    expect(result?.flag).toEqual('🇲🇲')
    expect(result?.name).toEqual('Myanmar')
    expect(result?.preferred).toEqual(false)
  })

  test('findFlagByDialCode +44 return United Kingdom', () => {
    expect(CountryList.findOneByDialCode('+44')?.code).toEqual('GB')
  })
})

describe('findFlagsByDialCode', () => {
  test('findFlagsByDialCode length', () => {
    const result = CountryList.findByDialCode('+44')
    expect(result.length).toBe(4)
  })
})

describe('searchFlag', () => {
  test('Search Flag length', () => {
    const result = CountryList.findByKeyword('Myanm')
    expect(result).toEqual([
      new Country({ name: 'Myanmar', dial_code: '+95', code: 'MM', flag: '🇲🇲' }),
    ])
  })
})

describe('test svg string', () => {
  test('svg should return string', () => {
    const result = CountryList.findOneByCountryCode('ac')
    if (result) {
      const flagSvg = CountryFlagSvg[result.code]
      expect(typeof flagSvg).toBe('string')
    }
  })
})

describe('group countries by first letter', () => {
  test('should return countries with group by first letter', () => {
    const result = CountryList.groupCountriesByFirstLetter()
    expect(result['a']).not.toBeUndefined()
  })
})

describe('Phone number formatter', () => {
  test('PhoneNumberFormat', () => {
    const us = CountryList.findOneByCountryCode('US')

    expect(us?.formatPhoneNumber('2124567890', PhoneNumberFormat.E164)).toEqual('+12124567890')

    expect(us?.formatPhoneNumber('2124567890', PhoneNumberFormat.INTERNATIONAL)).toEqual(
      '+1 212-456-7890',
    )

    expect(us?.formatPhoneNumber('2124567890', PhoneNumberFormat.NATIONAL)).toEqual(
      '(212) 456-7890',
    )

    expect(us?.formatPhoneNumber('2124567890', PhoneNumberFormat.RFC3966)).toEqual(
      'tel:+1-212-456-7890',
    )

    const pr = CountryList.findOneByCountryCode('PR')
    expect(pr?.formatPhoneNumber('5303334', PhoneNumberFormat.INTERNATIONAL)).toEqual(
      '+1 939-530-3334',
    )

    expect(pr?.formatPhoneNumber('05303334', PhoneNumberFormat.NATIONAL)).toEqual('(939) 530-3334')
  })
})
