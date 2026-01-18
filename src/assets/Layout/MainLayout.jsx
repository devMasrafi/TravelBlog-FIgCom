import React from 'react'
import { Outlet } from 'react-router'
import Sidebody from './Sidebody'
import Navbar from './Navbar'

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">

      <aside className="w-[27%] fixed h-full z-10 shadow-lg bg-white dark:bg-gray-800">
        <Navbar />
        <Sidebody />
      </aside>
      
      {/* Main Content - Right Section */}
      <main className="w-[73%] ml-[27%] bg-gray-50 dark:bg-gray-900">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout