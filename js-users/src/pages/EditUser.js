import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function EditUser() {
  const location = useLocation()

  const [formData, setFormData] = useState(location.state.user)
  const [errorMessages, setErrorMessages] = useState({})
  const [successMessage, setSuccessMessage] = useState({})
  const [wasValidated, setWasValidated] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        `https://assessment-users-backend.herokuapp.com/users/${location.state.user.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            first_name: formData.first_name,
            last_name: formData.last_name,
          }),
        }
      )
      console.log(response)
      if (response.status === 422) {
        const res = await response.json()
        setErrorMessages(res)
        setWasValidated(true)
      } else if (response.ok) {
        setSuccessMessage('User edit was successful')
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
      <h2 className='my-4'>Edit User</h2>
      <form
        className={`needs-validation ${wasValidated && 'was-validated'}`}
        noValidate
        onSubmit={handleSubmit}
      >
        <div className='mb-3'>
          <label htmlFor='first_name' className='form-label'>
            First name
          </label>
          <input
            type='text'
            className='form-control'
            id='first_name'
            name='first_name'
            placeholder='First name'
            onChange={handleOnChange}
            value={formData.first_name}
            required
          />
          <div className='invalid-feedback'>
            {errorMessages ? errorMessages.first_name : ''}
          </div>
        </div>

        <div className='mb-3'>
          <label htmlFor='last_name' className='form-label'>
            Last name
          </label>
          <input
            type='text'
            className='form-control'
            id='last_name'
            name='last_name'
            placeholder='Last name'
            onChange={handleOnChange}
            value={formData.last_name}
            required
          />
          <div className='invalid-feedback'>
            {errorMessages ? errorMessages.last_name : ''}
          </div>
        </div>

        <div className='mt-5 text-center'>
          <button className='add-btn' type='submit'>
            Edit
          </button>
          <div className='valid-feedback mt-4 fs-6'>
            <strong>{successMessage.length ? successMessage : ''}</strong>
          </div>
        </div>
      </form>
      <Link to='/' className='home-link mt-4'>
        Home
      </Link>
    </div>
  )
}
export default EditUser
