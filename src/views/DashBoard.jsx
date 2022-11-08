import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';

const DashBoard = () => {

  /*if (!auth){
    return <Navigate to='/'/>
  }*/
  return (
    <div>
      <h1>Dashboard</h1>
      <Routes>
          <Route path='/' element={<div>home dashboard</div>}/>
          <Route path='/config' element={<div>config dashboard</div>}/>
          <Route path='/list' element={<div>list dashboard</div>}/>
        </Routes>
    </div>
  )
}

export default DashBoard;