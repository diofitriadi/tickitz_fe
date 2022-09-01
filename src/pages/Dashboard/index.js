import React from 'react'
import NavAdmin from "../../components/NavAdmin"
import Dashboard from "../../components/Dashboard"
import Footer from "../../components/Footer/Footer"


const AdminDashboard = () => {
  return(
    <>
      <NavAdmin/>
      <Dashboard/>
      <Footer/>
    </>
  )
}

export default AdminDashboard