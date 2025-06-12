import React from 'react'
import Navbar from '../components/root components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/root components/Footer'
import { ToastContainer } from 'react-toastify'

const Root = () => {
  return (
      <div>
          <Navbar />
          <Outlet  />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default Root