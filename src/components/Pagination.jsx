import React from 'react'

// Component handling pagination.
const Pagination = React.memo(function Pagination({ postsPerPage, length, selectedPage, setPageSelection }) {
    const paginationNumbers = [];

    for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
        paginationNumbers.push(i);
    }
    return (
        <div className='pagination'>
            {paginationNumbers.map((pageNumber) => (
                <button key={pageNumber} onClick={() => setPageSelection(pageNumber)} className={pageNumber === selectedPage ? 'active' : ''}>{pageNumber}</button>
            ))}
        </div>
    )
})

export default Pagination