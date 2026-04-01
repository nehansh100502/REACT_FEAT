import { createBrowserRouter } from "react-router-dom"
import Layout from '../pages/Layout'
import Dashboard from "../pages/Dashboard"
import LogIn from "../pages/Login"
import PrivateRoute from "./PrivateRoute";
import AllUserPage from "../pages/allUserPage";
import CreateUserPage from "../pages/createUserPage";

export const myRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element:
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
            },
            {
                path: '/Login',
                element: <LogIn />
            },
            {
                path: '/all-users',
                element: <PrivateRoute>
                    <AllUserPage />
                </PrivateRoute>
            },
            {
                path: '/create-user',
                element: <PrivateRoute>
                    <CreateUserPage />
                </PrivateRoute>
            }
        ]
    }
]);