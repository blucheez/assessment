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

    return string
  }

  const getRemainder = (inputNumber, smaller) => {
    return inputNumber - Math.floor(inputNumber / smaller) * smaller
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <form className='d-flex flex-column'>
        <label htmlFor='number' className='form-label mb-2 display-6'>
          Number
        </label>
        <input
          type='number'
          name='number'
          id='number'
          className='form-control-lg'
          onChange={handleInput}
        />
      </form>
      <div className='mt-5'>{convertToString(number)}</div>
    </div>
  )
}
export default Converter
