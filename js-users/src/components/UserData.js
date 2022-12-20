import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function UserData({ user }) {
  const [isLocked, setIsLocked] = useState(false)
  const [statusChanged, setStatusChanged] = useState(false)

  const date = new Date(user.created_at)
  const localDate = date.toLocaleDateString('hu-HU', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })

  useEffect(() => {
    if (user.status === 'locked') {
      setIsLocked(true)
    }
  }, [user.status])

  useEffect(() => {
    const editStatus = async () => {
      if (statusChanged) {
        let editedStatus
        if (!isLocked) {
          editedStatus = 'active'
        } else {
          editedStatus = 'locked'
        }

        try {
          await fetch(
            `https://assessment-users-backend.herokuapp.com/users/${user.id}`,
            {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                status: editedStatus,
              }),
            }
          )
        } catch (error) {
          throw new Error(error)
        }
      }
    }
    editStatus()
    // eslint-disable-next-line
  }, [statusChanged])

  const handleClick = () => {
    setIsLocked((prev) => !prev)
    setStatusChanged((prev) => !prev)
  }

  return (
    <tr
      key={user.id}
      className={`${
        isLocked ? 'text-decoration-line-through text-warning' : ''
      }`}
    >
      <td className='align-middle text-break'>{user.first_name}</td>
      <td className='align-middle text-break'>{user.last_name}</td>
      <td className='align-middle'>{localDate}</td>
      <td className='align-middle'>
        <Link
          to={`/edit/${user.id}`}
          state={{ user }}
          className={isLocked ? 'disabled-link' : ''}
        >
          <button className={`btn btn-warning ${isLocked ? 'disabled' : ''}`}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              fill='currentColor'
              className='bi bi-pencil'
              viewBox='0 0 16 16'
            >
              <path d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z' />
            </svg>
          </button>
        </Link>
        <button
          className='btn btn-warning ms-0 ms-lg-2 mt-2 mt-lg-0'
          onClick={handleClick}
        >
          {!isLocked ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              fill='currentColor'
              className='bi bi-lock'
              viewBox='0 0 16 16'
            >
              <path d='M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z' />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='18'
              height='18'
              fill='currentColor'
              className='bi bi-unlock'
              viewBox='0 0 16 16'
            >
              <path d='M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z' />
            </svg>
          )}
        </button>
      </td>
    </tr>
  )
}
export default UserData
