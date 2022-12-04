import { constants } from '../utils/constants'

export const convertToString = (inputNumber) => {
  let string = ''
  let smallerThanInputValue = constants.one
  let smallerThanInputKey = 'one'
  let remainder = inputNumber
  for (let [key, value] of Object.entries(constants)) {
    if (inputNumber === value && inputNumber < 100) {
      return key
    }
    if (inputNumber === value && inputNumber >= 100) {
      return `one ${key}`
    }
    if (value < inputNumber) {
      smallerThanInputValue = value
      smallerThanInputKey = key
      remainder = getRemainder(inputNumber, smallerThanInputValue)
    }
    if (value > inputNumber) break
  }
  if (inputNumber > 20 && inputNumber < 100) {
    const starter = smallerThanInputKey
    const convRemainder = convertToString(remainder)
    string = `${starter}-${convRemainder}`
  }
  if (inputNumber >= 100) {
    const firstNum = convertToString(
      Math.floor(inputNumber / smallerThanInputValue)
    )
    const starter = smallerThanInputKey
    const convRemainder = convertToString(remainder)
    if (!remainder) {
      string = `${firstNum} ${starter}`
    } else if (
      remainder > 0 &&
      smallerThanInputValue >= 1000 &&
      remainder < 100
    ) {
      string = `${firstNum} ${starter} and ${convRemainder}`
    } else if (remainder > 0 && smallerThanInputValue === 100) {
      string = `${firstNum} ${starter} and ${convRemainder}`
    } else {
      string = `${firstNum} ${starter} ${convRemainder}`
    }
  }
  return string
}

const getRemainder = (inputNumber, smaller) => {
  return inputNumber - Math.floor(inputNumber / smaller) * smaller
}
