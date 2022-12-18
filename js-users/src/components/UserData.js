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
      className={
        isLocked && `text-decoration-line-through text-warning`
      }
    >
      <td>{user.id}</td>
      <td>{user.first_name}</td>
      <td>{user.last_name}</td>
      <td>{user.status}</td>
      <td>{user.created_at}</td>
      <td>{user.updated_at}</td>
      <td>
        <button className='btn btn-primary'>Edit</button>
        <button className='btn btn-primary'>Lock</button>
      </td>
    </tr>
  )
}
export default UserData
