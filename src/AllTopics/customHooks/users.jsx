import { useApi } from './useApi';


const User = () => {
    let { loading, val } = useApi("https://dummyjson.com/users")
    console.log(val)
    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1>Users</h1>
        </div>
    )
}
export default User