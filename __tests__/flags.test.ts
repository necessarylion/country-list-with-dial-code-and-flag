import CountryList from '../src/index'

describe('getList', () => {
  test('getList', () => {
    expect(CountryList.getAll()).toBeInstanceOf(Array)
  })
})

describe('getList', () => {
  test('findFlag type Object', () => {
    expect(CountryList.findOneByCountryCode('mm')).toBeInstanceOf(Object)
  })

  test('findFlag with Capital type Object', () => {
    expect(CountryList.findOneByCountryCode('MM')).toBeInstanceOf(Object)
  })

  test('findFlag return exact value', () => {
    expect(CountryList.findOneByCountryCode('mm')).toEqual({
      name: 'Myanmar',
      dial_code: '+95',
      code: 'MM',
      flag: '🇲🇲',
    })
  })

  test('findFlag with Capital return exact value', () => {
    expect(CountryList.findOneByCountryCode('MM')).toEqual({
      name: 'Myanmar',
      dial_code: '+95',
      code: 'MM',
      flag: '🇲🇲',
    })
  })
})

describe('findFlagByDialCode', () => {
  test('findFlagByDialCode type Object', () => {
    expect(CountryList.findOneByDialCode('+95')).toBeInstanceOf(Object)
  })

  test('findFlagByDialCode return exact value', () => {
    expect(CountryList.findOneByDialCode('+95')).toEqual({
      name: 'Myanmar',
      dial_code: '+95',
      code: 'MM',
      flag: '🇲🇲',
    })
  })

  test('findFlagByDialCode +44 return United Kingdom', () => {
    expect(CountryList.findOneByDialCode('+44')).toEqual({
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
    const result = CountryList.findByDialCode('+44')
    expect(result.length).toBe(4)
  })
})

describe('searchFlag', () => {
  test('Search Flag length', () => {
    const result = CountryList.findByKeyword('Myanm')
    expect(result).toEqual([{ name: 'Myanmar', dial_code: '+95', code: 'MM', flag: '🇲🇲' }])
  })
})
