import CountryList from '../src'
import { PhoneNumber } from '../src/phone-number'
import { PhoneNumberFormat } from '../src/types'

describe('PhoneNumber', () => {
  test('format from dial code', () => {
    expect(PhoneNumber.parse('0620350322').format('+66')).toEqual('+66620350322')
  })

  test('format from dial code', () => {
    expect(PhoneNumber.parse('620350322').format('+66')).toEqual('+66620350322')
    expect(PhoneNumber.parse('620-350-322').format('+66')).toEqual('+66620350322')
  })

  test('format from country code', () => {
    expect(PhoneNumber.parse('0620350322').format('TH')).toEqual('+66620350322')
  })

  test('format from country', () => {
    const country = CountryList.findOneByCountryCode('TH')
    if (country) {
      expect(PhoneNumber.parse('0620350322').format(country)).toEqual('+66620350322')
    }
  })

  test('format from dial code', () => {
    expect(PhoneNumber.parse('0620350322').type(PhoneNumberFormat.READABLE).format('+66')).toEqual(
      '620 350 322',
    )
  })

  test('format from dial code', () => {
    expect(
      PhoneNumber.parse('0620350322').type(PhoneNumberFormat.READABLE_WITH_DIAL_CODE).format('+66'),
    ).toEqual('+66 620 350 322')
  })

  test('format from dial code', () => {
    expect(
      PhoneNumber.parse('09876543210')
        .type(PhoneNumberFormat.READABLE_WITH_DIAL_CODE)
        .format('+66'),
    ).toEqual('+66 987 654 3210')
  })

  test('format from dial code', () => {
    expect(
      PhoneNumber.parse('09876543210')
        .separator('-')
        .type(PhoneNumberFormat.READABLE_WITH_DIAL_CODE)
        .format('+66'),
    ).toEqual('+66-987-654-3210')

    expect(
      PhoneNumber.parse('09-8765-432-10')
        .separator('-')
        .type(PhoneNumberFormat.READABLE_WITH_DIAL_CODE)
        .format('+66'),
    ).toEqual('+66-987-654-3210')
  })
})
