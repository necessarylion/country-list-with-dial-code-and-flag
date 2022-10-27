import { getList, findFlag, findFlagByDialCode, findFlagsByDialCode, searchFlag } from '../src/index'

describe('getList', () => {
  test('getList', () => {
    expect(getList()).toBeInstanceOf(Array)
  })
})

describe('getList', () => {
  test('findFlag type Object', () => {
    expect(findFlag('mm')).toBeInstanceOf(Object)
  })

  test('findFlag with Capital type Object', () => {
    expect(findFlag('MM')).toBeInstanceOf(Object)
  })

  test('findFlag return exact value', () => {
    expect(findFlag('mm')).toEqual({ name: 'Myanmar', dial_code: '+95', code: 'MM', flag: '🇲🇲' })
  })

  test('findFlag with Capital return exact value', () => {
    expect(findFlag('MM')).toEqual({ name: 'Myanmar', dial_code: '+95', code: 'MM', flag: '🇲🇲' })
  })
})

describe('findFlagByDialCode', () => {
  test('findFlagByDialCode type Object', () => {
    expect(findFlagByDialCode('+95')).toBeInstanceOf(Object)
  })

  test('findFlagByDialCode return exact value', () => {
    expect(findFlagByDialCode('+95')).toEqual({ name: 'Myanmar', dial_code: '+95', code: 'MM', flag: '🇲🇲' })
  })

  test('findFlagByDialCode +44 return United Kingdom', () => {
    expect(findFlagByDialCode('+44')).toEqual({
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
    let result = findFlagsByDialCode('+44')
    expect(result.length).toBe(4)
  })
})

describe('searchFlag', () => {
  test('Search Flag length', () => {
    let result = searchFlag('Myanm')
    expect(result).toEqual([{ name: 'Myanmar', dial_code: '+95', code: 'MM', flag: '🇲🇲' }])
  })
})
