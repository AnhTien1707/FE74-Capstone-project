import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import Header from '../component/Header'

const MainLayout = () => {
  return (
    <div className='MainLayout flex flex-col h-full'>
        <Header />
        <div className='MainContent flex-1 min-h-screen'>
          <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default MainLayout