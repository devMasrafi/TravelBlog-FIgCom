import React from 'react'
import { Outlet } from 'react-router'
import Sidebody from './Sidebody'
import Navbar from './Navbar'

const MainLayout = () => {
  return (
    <div className="flex h-screen">

      <aside className="w-[27%] fixed h-full z-10 shadow-lg">
        <Navbar />
        <Sidebody />
      </aside>
      
      {/* Main Content - Right Section */}
      <main className="w-[73%] ml-[27%] ">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout