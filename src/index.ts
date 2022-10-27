import flags from './data'
import { Flag } from './types'

const findFlag = (code: string) => {
  return flags.find((flag: Flag) => flag.code.toLowerCase() === code.toLowerCase())
}

const findFlagByDialCode = (dialCode: string) => {
  const filtersFlags = findFlagsByDialCode(dialCode)
  const preferredFlag = filtersFlags.find((flag: Flag) => flag.dial_code === dialCode && flag.preferred)
  if (preferredFlag) {
    return preferredFlag
  }
  return filtersFlags[0] ?? null
}

const findFlagsByDialCode = (dialCode: string) => {
  return flags.filter((flag) => flag.dial_code === dialCode)
}

const getList = () => {
  return flags
}

const searchFlag = (keyword: string) => {
  return flags.filter((flag: Flag) => {
    return (
      flag.code.toLowerCase().includes(keyword.toLowerCase()) ||
      flag.name.toLowerCase().includes(keyword.toLowerCase()) ||
      flag.dial_code.toLowerCase().includes(keyword.toLowerCase())
    )
  })
}

export { getList, findFlag, findFlagByDialCode, findFlagsByDialCode, searchFlag }
