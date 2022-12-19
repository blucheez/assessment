import PaginatedItems from '../components/PaginatedItems'

function Main() {
  return (
    <>
      <div className='container d-flex flex-column align-items-center'>
        <PaginatedItems itemsPerPage={10} />
      </div>
    </>
  )
}

export default Main
