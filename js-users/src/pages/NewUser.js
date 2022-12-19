import { useState } from 'react'
import { Link } from 'react-router-dom'

function NewUser() {
  const initialValues = {
    first_name: '',
    last_name: '',
    status: '',
  }

  const [formData, setFormData] = useState(initialValues)
  const [errorMessages, setErrorMessages] = useState({})
  const [wasValidated, setWasValidated] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        'https://assessment-users-backend.herokuapp.com/users',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )
      if (response.status === 422) {
        const res = await response.json()
        setErrorMessages(res)
        setWasValidated(true)
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  const handleOnChange = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className='container d-flex flex-column align-items-center'>
      <h1 className='my-4'>Add New User</h1>
      <form
        className={`text-center needs-validation ${
          wasValidated && 'was-validated'
        }`}
        noValidate
        onSubmit={handleSubmit}
      >
        <div className='mb-3'>
          <input
            type='text'
            className='form-control'
            id='first_name'
            name='first_name'
            placeholder='First name'
            onChange={handleOnChange}
            required
          />
          <div className='invalid-feedback'>
            {errorMessages ? errorMessages.first_name : ''}
          </div>
        </div>

        <div className='mb-3'>
          <input
            type='text'
            className='form-control'
            id='last_name'
            name='last_name'
            placeholder='Last name'
            onChange={handleOnChange}
            required
          />
          <div className='invalid-feedback'>
            {errorMessages ? errorMessages.last_name : ''}
          </div>
        </div>

        <div className='mb-3'>
          <select
            className='form-select'
            id='validationCustom04'
            placeholder='asd'
            required
            defaultValue=''
            name='status'
            onChange={handleOnChange}
          >
            <option disabled hidden value=''>
              Status
            </option>
            <option value='active'>Active</option>
            <option value='locked'>Locked</option>
          </select>
          <div className='invalid-feedback'>
            {errorMessages ? errorMessages.status : ''}
          </div>
        </div>

        <div className='mt-5'>
          <button className='btn btn-primary' type='submit'>
            Add
          </button>
        </div>
      </form>
      <Link to='/' className='btn btn-secondary mt-4'>
        Home
      </Link>
    </div>
  )
}
export default NewUser
