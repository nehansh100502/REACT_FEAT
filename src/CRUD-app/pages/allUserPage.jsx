import { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '../components/Loader/loader.jsx'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
const AllUserPage = () => {

    const [allUsers, setAllUsers] = useState([])
    const [loading, setLoading] = useState(false)

    async function getUsers() {
        setLoading(true)
        try {
            let resp = await axios.get('http://localhost:3001/users')
            console.log(resp)
            setTimeout(() => {
                setAllUsers(resp.data)
                setLoading(false)

            }, 2000)

        } catch (error) {
            console.log(error)
            setAllUsers([])
        } finally {
            // setLoading(false)

        }
    }
    async function deleteUser(id) {
        try {
            let resp = await axios.delete(`http://localhost:3001/users/${id}`)
            console.log(resp)
            toast.success("User deleted Successfully!!!")

        } catch (error) {
            toast.success("Unable to delete User!")

            console.log(error)
        }
    }
    useEffect(() => {
        getUsers()
    }, [])
    if (loading) {
        return <Loader />
    }
    return (
        <>
            <section>
                {allUsers.length === 0 ? (<p>No users available</p>) : (
                    allUsers.map((user) => {
                        return (
                            <div key={user.id
                            }>
                                <p>
                                    <strong>
                                        Username: {user.username}
                                    </strong>
                                </p>
                                <p>
                                    <strong>
                                        Email: {user.email}
                                    </strong>
                                </p>
                                <div>
                                    <Link to={`/edit-user/${user.id}`} >Edit</Link>
                                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                                </div>
                            </div>
                        )
                    }))}
            </section >
        </>
    )
}
export default AllUserPage