import numeral from 'numeral'

export const fCurrency = (number: number) => {
  return numeral(number).format(Number.isInteger(number) ? '0,000' : '0.000')
}
