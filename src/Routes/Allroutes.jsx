import React from 'react'

import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Dashboard from '../Pages/Dashboard'

const Allroutes = () => {
  return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      
  )
}

export default Allroutes