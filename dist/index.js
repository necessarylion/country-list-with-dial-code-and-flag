let flags = require('./data.js')

let findFlag = (code) => {
  return flags.find((flag) => flag.code.toLowerCase() == code)
}

let findFlagByDialCode = (dialCode) => {
  const flags = findFlagsByDialCode(dialCode)
  const preferredFlag = flags.find((flag) => flag.dial_code == dialCode && flag.preferred)
  if (preferredFlag) {
    return preferredFlag
  }
  return flags[0] ?? null
}

let findFlagsByDialCode = (dialCode) => {
  return flags.filter((flag) => flag.dial_code == dialCode)
}

let getList = () => {
  return flags
}

module.exports = { getList, findFlag, findFlagByDialCode, findFlagsByDialCode }
