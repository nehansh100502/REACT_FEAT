// import react from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouet = ({ children }) => {
    let token = sessionStorage.getItem("token")
    return token ? children : <Navigate to={"/login"} />


}
export default PrivateRouet;