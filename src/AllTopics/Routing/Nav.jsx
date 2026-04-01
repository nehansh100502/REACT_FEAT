// import React from "react"

// const Navbar = ({ setPath }) => {
//     return (
//         <>
//             <header>
//                 <div onClick={() => setPath('/')}>Home</div>
//                 <div onClick={() => setPath('/about')}>About</div>
//             </header>
//         </>
//     )
// }
// export default Navbar;

//! using routing 

// import { NavLink } from "react-router-dom"
// const Nav = () => {
//     return (
//         <>
//             <h1>Navbar</h1>
//             <header>
//                 <NavLink className={(isActive) => `${isActive && 'bg-white text-black'}`} to="/">Home</NavLink>
//                 <NavLink className={(isActive) => `${isActive && 'bg-white text-black'}`} to="/about">About</NavLink>
//             </header>
//         </>
//     )
// }
// export default Nav;

import { NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
    return (
        <>
            <h1>Navbar</h1>
            <header>
                <NavLink
                    className={({ isActive }) => isActive ? "active-link" : "link"}
                    to="/"
                >
                    Home
                </NavLink>

                <NavLink
                    className={({ isActive }) => isActive ? "active-link" : "link"}
                    to="/about"
                >
                    About
                </NavLink>
            </header>
        </>
    );
};

export default Nav;