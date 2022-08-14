import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"



export const VerifyUser = () => {
    const {isLogin} = useSelector(state => state.auth)
    return (
        isLogin? <Navigate to="/"/> : <Outlet/>
    )
}