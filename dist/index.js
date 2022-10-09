let flags = require('./data.js')

let findFlag = (code, type = 'png') => {
  return flags.find(flag => flag.code.toLowerCase() == code);
}

let findFlagByDialCode = (dialCode, type = 'png') => {
  return flags.find((flag) => flag.dial_code == dialCode);
};

let getList = () => {
  return flags; 
}

module.exports = { getList, findFlag, findFlagByDialCode };