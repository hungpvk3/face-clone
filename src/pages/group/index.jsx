import React from 'react'
import {Outlet} from 'react-router-dom'

const MainRoute = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default MainRoute