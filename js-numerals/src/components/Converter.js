import { useState } from 'react'
import { convertToString } from '../utils/converterFunc'

function Converter() {
  const [number, setNumber] = useState('')

  const handleInput = (e) => {
    if (e.target.value !== '') {
      setNumber(parseInt(e.target.value))
    } else {
      setNumber('')
    }
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
