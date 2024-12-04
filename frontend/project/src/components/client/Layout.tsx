import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

const Layout = () => {

  return (
    <div className='flex flex-col'>
      <div className='px-[3vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw] min-h-screen'>
        <Header />
        <Outlet />
      </div>
      <div className='bg-slate-50 px-[3vw] sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
