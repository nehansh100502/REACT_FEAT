import react from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <h1></h1>

            <header className='p-5 border flex gap-10'>
                <Link to='/'>Home😀</Link>
                <Link to='/about'>About🤓</Link>
                <p>⛄︎⛄︎⛄︎⛄︎⛄︎⛄︎⛄︎⛄︎⛄︎⛄︎⛄︎⛄︎⛄︎⛄︎⛄︎⛄︎</p>
            </header>♠
        </>
    )
}
export default Navbar