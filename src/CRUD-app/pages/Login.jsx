import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let payload = {
            email: formData.email.trim(),
            password: formData.password.trim()
        }
        console.log(payload)
        sessionStorage.setItem("user", JSON.stringify(formData))
        sessionStorage.setItem("token", "dummy-token")

        navigate('/')
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-10 rounded-xl shadow-md w-96 border border-sky-300">

                <h1 className="text-2xl text-center text-sky-400 font-bold mb-6">
                    Login Form
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full p-2 border rounded-md"
                    />

                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full p-2 border rounded-md"
                    />

                    <button className="bg-sky-400 text-white py-2 rounded-md">
                        Log In
                    </button>

                </form>
            </div>
        </div>
    )
}

export default LogIn