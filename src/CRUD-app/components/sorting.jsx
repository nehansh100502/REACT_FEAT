import React from 'react'

const sorting = ({ sortBy, setSortBy }) => {
    return (
        <>
            <br></br>
            <br></br>
            <lable htmlFor="sort" className=''>Sort</lable>

            <select id='sort' name='sort' value={sortBy} onChange={(e) => setSortBy(e.target.value)} className='border w-52 h-12'>
                <option value="">All</option>
                <option value='title'>Title</option>
                <option value='views'>Views</option>
            </select >
        </>
    )
}
export default sorting;