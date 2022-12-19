import { useEffect, useState } from 'react'

function UserData({ user }) {
  const [isLocked, setIsLocked] = useState(false)

  useEffect(() => {
    if (user.status === 'locked') {
      setIsLocked(true)
    }
  }, [user.status])

  return (
    <tr
      key={user.id}
      className={isLocked ? 'text-decoration-line-through text-warning' : ''}
    >
      <td className='align-middle'>{user.first_name}</td>
      <td className='align-middle'>{user.last_name}</td>
      <td className='align-middle'>{user.created_at}</td>
      <td className='align-middle'>
        <button className='btn btn-primary'>Edit</button>
        <button className='btn btn-primary'>Lock</button>
      </td>
    </tr>
  )
}
export default UserData
