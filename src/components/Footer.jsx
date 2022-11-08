import React from 'react'
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const {pathname} = useLocation();
  return (
    <div>Footer pathname:{pathname}</div>
  )
}

export default Footer;