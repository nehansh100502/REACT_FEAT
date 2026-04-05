import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './Home.jsx'
// import About from './about.jsx'
// import Nav from './Nav.jsx'
import { lazy, Suspense } from 'react'
//LAZY loading 
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./about'))
const Nav = lazy(() => import('./Nav'))

// Suspense: used to not break Ui 
function CodeSplitting() {
    return (
        <BrowserRouter>
            <Suspense fallback={<p className='text-5xl font-extrabold'> Loading...</p>}>
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />

                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
export default CodeSplitting
