import React from 'react'
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"



export const VerifyUser = () => {
    const {data} = useSelector(state => state.auth)
    return (
        // data.role === "user" ? <Navigate to="/"/> : <Outlet/>
        data && data.role === "user" ? <Navigate to="/"/> : data && data.role === "admin" ? <Navigate to="/dashboard"/> : <Outlet/>
        
    )
}

export const VerifyAdmin = () => {
    const {data} = useSelector(state => state.auth) 
    return (
        data.role === "user" ? <Navigate to="/"/> : <Outlet/>
    )
}