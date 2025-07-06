import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main>
        <Outlet />
        {/* This is where the nested routes will be rendered */}
    </main>
  )
}

export default Layout