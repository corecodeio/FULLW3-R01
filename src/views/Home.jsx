import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Home = () => {
  const {isAuth} = useSelector(state=>state.auth);

  if(isAuth){
    return <Navigate to='/dashboard'/>
  }
  return (
    <div>
      <h1>home</h1>
      <Outlet/>
    </div>
  )
}

export default Home;