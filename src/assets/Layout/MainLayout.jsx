import React from 'react'
import { Outlet } from 'react-router'
import Sidebody from './Sidebody'
import Navbar from './Navbar'

const MainLayout = () => {
  return (
    <div className="flex h-screen">

      <aside className="w-[30%] bg-blue-200 fixed h-full z-10">
        <Navbar />
        <Sidebody />
      </aside>
      
      {/* Main Content - Right Section */}
      <main className="w-[70%] ml-[30%] ">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout