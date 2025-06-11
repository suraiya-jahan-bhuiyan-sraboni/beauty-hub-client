import React from 'react'
import Navbar from '../components/root components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/root components/Footer'

const Root = () => {
  return (
      <div>
          <Navbar />
          <Outlet />
          <Footer />
    </div>
  )
}

export default Root