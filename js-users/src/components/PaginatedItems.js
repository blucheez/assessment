import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import UsersList from './UsersList'

function PaginatedItems({ itemsPerPage }) {
  const [allUsers, setAllUsers] = useState([])
  const [currentUsers, setCurrentUsers] = useState([])
  const [itemOffset, setItemOffset] = useState(0)
  const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          'https://assessment-users-backend.herokuapp.com/users'
        )
        const fetchData = await response.json()
        setAllUsers(fetchData)
      } catch (error) {
        console.log(error.message)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    const allUsersCopy = [...allUsers]
    setCurrentUsers(allUsersCopy.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(allUsersCopy.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, allUsers])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allUsers.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setItemOffset(newOffset)
  }

  return (
    <>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>First</th>
            <th scope='col'>Last</th>
            <th scope='col'>Status</th>
            <th scope='col'>Created at</th>
            <th scope='col'>Updated at</th>
          </tr>
        </thead>
        <tbody>
          <UsersList currentUsers={currentUsers} />
        </tbody>
      </table>

      <ReactPaginate
        nextLabel='&raquo;'
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel='&laquo;'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakLabel='...'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        containerClassName='pagination'
        activeClassName='active'
        renderOnZeroPageCount={null}
      />
    </>
  )
}
export default PaginatedItems
