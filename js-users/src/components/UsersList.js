
import UserData from './UserData'

function UsersList({ currentUsers }) {

  return (
    <>
      {currentUsers &&
        currentUsers.map((user) => {
          return <UserData user={user} />
        })}
    </>
  )
}
export default UsersList
