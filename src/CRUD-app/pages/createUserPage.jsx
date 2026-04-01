import { useState } from 'react'

const CreateUserPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const handleCreateUser = async (e) => {
        e.preventDefault()
        console.log(formData);
        //? using fetch method send data to backend
        try {
            let res = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                },
                body: JSON.stringify(formData)
            })
            let data = await res.json()
            console.log(data);

            {/** using Axios */ }
            // let resp = await axios.post('http://localhost:3001/users', formData, {
            //     headers: {
            //         Authorization: `Bearer ${sessionStorage.getItem("token")}`
            //     }
            // })
            // console.log(resp.data);

        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                <h1 className="text-3xl font-bold text-gray-800">
                    CREATE Users
                </h1>
                <p className="text-gray-500 mt-2">
                    Create users here...
                </p>
            </div>
            <article>
                <form onSubmit={handleCreateUser} className='bg-white p-6 rounded-xl shadow-md w-full md:w-1/2'>
                    <div className='mb-4 flex flex-col gap-2'>
                        <label htmlFor='username'>UserName</label>
                        <input type='text' id='username' name='username' placeholder='Enter Username' onChange={handleChange} value={formData.name} className=' border-2 border-sky-500' />
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
                        <button type='submit'>Create User</button>
                    </div>
                </form>
            </article>
        </div>
    )
}
export default CreateUserPage;