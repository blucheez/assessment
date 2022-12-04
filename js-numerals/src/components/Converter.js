import { constants } from '../utils/constants'
import { useState } from 'react'

function Converter() {
  const [number, setNumber] = useState('')

  const handleInput = (e) => {
    if (e.target.value !== '') {
      setNumber(parseInt(e.target.value))
    } else {
      setNumber('')
    }
  }

  const convertToString = (inputNumber) => {
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

  return (
    <div className='container'>
      <div className='d-flex flex-column justify-content-center align-items-center vh-100 text-center'>
        <div className='display-4'>Arabic number conversion tool</div>
        <div className='fs-5'>
          This tool converts numeric input into the English phrase of that
          number.
        </div>
        <div>eg. 42 - forty-two, 2001 - two thousand and one</div>
        <form className='d-flex flex-column mt-5 align-items-center'>
          <label htmlFor='number' className='form-label mb-2 display-6'>
            Number
          </label>
          <input
            type='number'
            name='number'
            id='number'
            className='form-control-lg'
            onChange={handleInput}
            placeholder='Start typing...'
          />
        </form>
        <div className='mt-5 display-6 d-flex flex-column align-items-center '>
          Result
          <div className='text-warning'>{convertToString(number)}</div>
        </div>
      </div>
    </div>
  )
}
export default Converter
