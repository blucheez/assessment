import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='container d-flex justify-content-between align-items-center px-5'>
      <Link to='/' className='title'>
        <h1 className='my-4'>User List Application</h1>
      </Link>
      <Link to='/new' className='new-user text-center fs-6'>
        Add New User
      </Link>
    </nav>
  )
}
export default Navbar
