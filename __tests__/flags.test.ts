import CountryFlag from '../src/index'

describe('getList', () => {
  test('getList', () => {
    expect(CountryFlag.getAll()).toBeInstanceOf(Array)
  })
})

describe('getList', () => {
  test('findFlag type Object', () => {
    expect(CountryFlag.findOneByCountryCode('mm')).toBeInstanceOf(Object)
  })

  test('findFlag with Capital type Object', () => {
    expect(CountryFlag.findOneByCountryCode('MM')).toBeInstanceOf(Object)
  })

  test('findFlag return exact value', () => {
    expect(CountryFlag.findOneByCountryCode('mm')).toEqual({
      name: 'Myanmar',
      dial_code: '+95',
      code: 'MM',
      flag: '🇲🇲',
    })
  })

  test('findFlag with Capital return exact value', () => {
    expect(CountryFlag.findOneByCountryCode('MM')).toEqual({
      name: 'Myanmar',
      dial_code: '+95',
      code: 'MM',
      flag: '🇲🇲',
    })
  })
})

describe('findFlagByDialCode', () => {
  test('findFlagByDialCode type Object', () => {
    expect(CountryFlag.findOneByDialCode('+95')).toBeInstanceOf(Object)
  })

  test('findFlagByDialCode return exact value', () => {
    expect(CountryFlag.findOneByDialCode('+95')).toEqual({ name: 'Myanmar', dial_code: '+95', code: 'MM', flag: '🇲🇲' })
  })

  test('findFlagByDialCode +44 return United Kingdom', () => {
    expect(CountryFlag.findOneByDialCode('+44')).toEqual({
      name: 'United Kingdom',
      dial_code: '+44',
      code: 'GB',
      preferred: true,
      flag: '🇬🇧',
    })
  })
})

describe('findFlagsByDialCode', () => {
  test('findFlagsByDialCode length', () => {
    const result = CountryFlag.findByDialCode('+44')
    expect(result.length).toBe(4)
  })
})

describe('searchFlag', () => {
  test('Search Flag length', () => {
    const result = CountryFlag.findByKeyword('Myanm')
    expect(result).toEqual([{ name: 'Myanmar', dial_code: '+95', code: 'MM', flag: '🇲🇲' }])
  })
})
