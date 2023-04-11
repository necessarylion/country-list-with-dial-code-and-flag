import CountryList, { Country } from '.'
import { PhoneNumberFormat } from './types'

export class PhoneNumber {
  private static _instance: PhoneNumber

  private dialCode?: string
  private number?: string | number
  private formatType?: PhoneNumberFormat
  private separatorString = ' '

  private static get Instance() {
    return this._instance || (this._instance = new this())
  }

  /**
   * parse phone number and init PhoneNumber instance
   *
   * @param {string | number} phoneNumber
   * @returns {PhoneNumber}
   */
  public static parse(phoneNumber: string | number): PhoneNumber {
    const self = PhoneNumber.Instance
    self.number = phoneNumber
    return self
  }

  /**
   * set formatting type
   *
   * @param {PhoneNumberFormat|undefined} type
   * @returns {PhoneNumber}
   */
  public type(type?: PhoneNumberFormat): PhoneNumber {
    this.formatType = type
    return this
  }

  /**
   * set formatting type
   *
   * @param {PhoneNumberFormat|undefined} type
   * @returns {PhoneNumber}
   */
  public separator(separator: string): PhoneNumber {
    this.separatorString = separator
    return this
  }

  /**
   * format phone number from
   *
   * @param {string | Country} from
   * @returns {string}
   */
  public format(from: string | Country): string | undefined {
    let country: Country | undefined
    if (typeof from == 'string') {
      if (from.startsWith('+')) {
        country = CountryList.findOneByDialCode(from)
      } else {
        country = CountryList.findOneByCountryCode(from)
      }
    } else {
      country = from
    }
    if (country) {
      this.dialCode = country.dialCode
      return this._format()
    }
  }

  /**
   * format phone number with dial code
   *
   * @returns {string}
   */
  private _format(): string {
    if (!this.number) {
      throw new Error('phone number is not assigned yet')
    }
    let phoneNumber = this.number.toString()
    phoneNumber = phoneNumber.replace(/[^\d+]/g, '')
    if (phoneNumber.charAt(0) === '0') {
      phoneNumber = phoneNumber.slice(1)
    }
    if (phoneNumber.charAt(0) === '+') {
      return phoneNumber
    }

    switch (this.formatType) {
      case PhoneNumberFormat.DEFAULT:
        return this.formatToE164String(phoneNumber)
      case PhoneNumberFormat.READABLE_WITH_DIAL_CODE:
        return this.formatToReadableStringWithDialCode(phoneNumber)
      case PhoneNumberFormat.READABLE:
        return this.formatToReadableString(phoneNumber)
      default:
        return this.formatToE164String(phoneNumber)
    }
  }
  /**
   * @param {string} phoneNumber
   * @returns {string}
   */
  private formatToE164String(phoneNumber: string): string {
    return `${this.dialCode}${phoneNumber}`
  }

  /**
   * @param {string} phoneNumber
   * @returns {string}
   */
  private formatToReadableString(phoneNumber: string): string {
    return (
      phoneNumber.slice(0, 3) +
      this.separatorString +
      phoneNumber.slice(3, 6) +
      this.separatorString +
      phoneNumber.slice(6)
    )
  }

  /**
   * @param {string} phoneNumber
   * @returns {string}
   */
  private formatToReadableStringWithDialCode(phoneNumber: string): string {
    return (
      this.dialCode +
      this.separatorString +
      phoneNumber.slice(0, 3) +
      this.separatorString +
      phoneNumber.slice(3, 6) +
      this.separatorString +
      phoneNumber.slice(6)
    )
  }
}
