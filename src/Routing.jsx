import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './AllTopics/Routing/Home.jsx'
import About from './AllTopics/Routing/About.jsx'
import Layout from './Layout/layout.jsx'
import NotFound from './AllTopics/Routing/NotFound.jsx';

const myRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    },

    {
        path: "*",
        element: <NotFound />
    }

])

const routing = () => {
    return <RouterProvider router={myRoutes} />
}

export default routing;