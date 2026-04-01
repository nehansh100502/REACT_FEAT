import { Outlet, } from 'react-router-dom'
import Nav from '../AllTopics/Routing/Nav.jsx'

const Layout = () => {

    return (
        <div>
            <Nav />
            <Outlet />
            {/* //? used to render children routes */}
        </div>
    )

}
export default Layout;