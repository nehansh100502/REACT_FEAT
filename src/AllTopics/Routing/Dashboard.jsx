// import { useState } from "react"
// import Home from './Home.jsx'
// import Nav from './Nav.jsx'
// import About from './About.jsx'

// const Dashboard = () => {
//     const [path, setPath] = useState('/')
//     return (
//         <>
//             {/* <h2>Dashboard </h2> */}
//             <Nav setPath={setPath} />
//             {path === "/" && <Home />}
//             {path === "about" && <About />}
//         </>
//     )
// }
// export default Dashboard;

//! Using Routing - react router dom 

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home.jsx'
import About from './About.jsx'
import Nav from './Nav.jsx'
import "./Nav.css";

const Dashboard = () => {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>

                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Dashboard;