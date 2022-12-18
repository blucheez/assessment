import PaginatedItems from '../components/PaginatedItems'

function Main() {
  return (
    <>
      <div className='container d-flex flex-column align-items-center'>
        <h1 className='my-4'>User List Application</h1>
        <PaginatedItems itemsPerPage={10} />
      </div>
    </>
  )
}

export default Main
