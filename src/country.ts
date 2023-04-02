import { CountryInterface } from './types'

class Country {
  private data: CountryInterface

  constructor(data: CountryInterface) {
    this.data = data
  }

  public get name(): string {
    return this.data.name
  }

  public get dialCode(): string {
    return this.data.dial_code
  }

  public get dial_code(): string {
    return this.data.dial_code
  }

  public get code(): string {
    return this.data.code
  }

  public get flag(): string {
    return this.data.flag
  }

  public get preferred(): boolean {
    return this.data.preferred ?? false
  }

  public formatPhoneNumber(phoneNumber: string | number) {
    phoneNumber = phoneNumber.toString()
    phoneNumber = phoneNumber.replace(/[^\d+]/g, '')
    if (phoneNumber.charAt(0) === '0') {
      phoneNumber = phoneNumber.slice(1)
    }
    if (phoneNumber.charAt(0) === '+') {
      return phoneNumber
    }
    return this.dialCode + phoneNumber
  }
}

export { Country }
