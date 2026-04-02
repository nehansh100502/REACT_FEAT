import { useState, useEffect } from 'react'
import { useNavigate, useParams, } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const EditUserPage = () => {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const navigate = useNavigate()
    const params = useParams()

    async function getEditUser() {
        try {
            let respo = await axios.get(`http://localhost:3001/users/${params.id}`)
            console.log(respo.data)
            setFormData(respo.data)
        } catch (error) {
            console.log(error)
            toast.error("something went wrong")

        }
    }


    useEffect(() => {
        getEditUser()
    }, [])

    const handleUpdateUser = async (e) => {
        e.preventDefault()
        try {
            let res = await axios.put(`http://localhost:3001/users/${params.id}`, formData)
            toast.success("user Updated")
            navigate('/all-users')
            console.log(res)
        } catch (error) {
            console.log(error)
        }
        console.log(formData);
    }
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                    Edit Users
                </h1>
                <p className="text-gray-500 mt-2">
                    Edit User here...!!!!!!
                </p>
            </div>
            <article>
                <form onSubmit={handleUpdateUser} className='bg-white p-6 rounded-xl shadow-md w-full md:w-1/2'>
                    <div className='mb-4 flex flex-col gap-2'>
                        <label htmlFor='username'>UserName</label>
                        <input type='text' id='username' name='username' placeholder='Enter Username' onChange={handleChange} value={formData.username} className=' border-2 border-sky-500' />
                    </div>
                    <div className='mb-4 flex flex-col gap-2'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' placeholder='Enter email' onChange={handleChange} value={formData.email} className=' border-2 border-sky-500' />
                    </div>
                    <div className='mb-4 flex flex-col gap-2'>
                        <label htmlFor='password' >Password</label>
                        <input type='password' id='password' name='password' placeholder='Enter password' onChange={handleChange} value={formData.password} className=' border-2 border-sky-500' />
                    </div>
                    <div className='mb-4 border-2 border-sky-500 w-24 text-black h-10 flex items-center justify-center rounded-md cursor-pointer'>
                        <button type='submit'>Edit User</button>
                    </div>
                </form>
            </article>
        </div>
    )
}
export default EditUserPage;