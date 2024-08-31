import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/static/Header'
import Footer from '../components/static/Footer'

const WebLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default WebLayout