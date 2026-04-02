import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Navbar = () => {
    const navigate = useNavigate()
    const [token, setToken] = React.useState(sessionStorage.getItem("token"))

    const handleLogout = () => {
        const confirmMsg = window.confirm("Are you sure you want to logout?")
        if (confirmMsg) {
            sessionStorage.removeItem("token")
            setToken(null)
            toast.success("Logged Out")

            navigate('/login')
        }
    }

    React.useEffect(() => {
        setToken(sessionStorage.getItem("token"))
    }, [])

    return (
        <header className="bg-white shadow-md">
            <div className="flex justify-between items-center px-6 py-4">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-sky-500">
                    QManager
                </h1>

                {/* Nav */}
                <nav className="flex items-center gap-6 text-lg">
                    {token ? (
                        <>

                            <Link
                                to="/"
                                className="hover:text-sky-500 transition"
                            >
                                Dashboard
                            </Link>
                            <Link to='/create-user' className='ps-5'>Create User</Link>
                            <Link to='/all-users' className='ps-5'>All Users</Link>

                            <button
                                onClick={handleLogout}
                                className="text-red-500 hover:text-red-600 transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="hover:text-sky-500 transition"
                        >
                            Login
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Navbar