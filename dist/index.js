let flags = require('./data.js')

let findFlag = (code, type = 'png') => {
  return flags.find(flag => flag.code.toLowerCase() == code);
}

let getList = () => {
  return flags; 
}

module.exports = { getList, findFlag}