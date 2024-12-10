import { Navbar } from 'flowbite-react'
import Nav from '../Nav/Nav'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
export default function Layout() {
  return (
    <> 
    <Nav/>
    <Outlet></Outlet>
    <Footer/>
        </>
  )
}
