import React from 'react'

const Pagination = ({ skip, setSkip }) => {

    return (
        <>
            <button onClick={() => setSkip((prev) => Math.max(0, prev - 10))}
                disabled={skip === 0 && true}
                className='bg-blue-500 text-white px-3 py-1 rounded disabled:bg-blue-300 m-4 cursor-pointer'
            >prev</button>
            <button onClick={() => setSkip((prev) => prev + 10)}
                className='bg-blue-500 text-white px-3 py-1 rounded m-4 cursor-pointer' >next</button>
        </>
    )
}
export default Pagination