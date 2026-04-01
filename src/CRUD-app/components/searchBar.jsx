import React from 'react'

const Navbar = ({ query, setQuery }) => {
    return (
        <input type='search' name='search' id='search' placeholder=' serach here' className='border h-14 w-96'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    )
}
export default Navbar;