
import UserData from './UserData'

function UsersList({ currentUsers }) {

  return (
    <>
      {currentUsers &&
        currentUsers.map((user) => {
          return <UserData user={user} key={user.id}/>
        })}
    </>
  )
}
export default UsersList
