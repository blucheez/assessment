function UsersList({ currentUsers }) {
  return (
    <>
      {currentUsers &&
        currentUsers.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.status}</td>
              <td>{user.created_at}</td>
              <td>{user.updated_at}</td>
            </tr>
          )
        })}
    </>
  )
}
export default UsersList
