import PaginatedItems from '../components/PaginatedItems'

function Main() {
  return (
    <>
      <div className='container'>
        <PaginatedItems itemsPerPage={10} />
      </div>
    </>
  )
}

export default Main
