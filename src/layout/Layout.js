import React from 'react'
import Navbar from './Navbar'
import SubNavbar from './SubNavbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <SubNavbar/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout