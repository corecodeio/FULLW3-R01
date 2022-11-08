import React from 'react'
import Styles from './Navbar.module.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div>
      <h3>Navbar</h3>
      {/*<a href='/'>home</a>
      <a href='/dashboard'>dashboard</a>*/}
      <div className={Styles[`navbar-${pathname === '/' ? '0' : '1'}`]}>
        <Link to='/'>home</Link>
        <Link to='/dashboard'>dashboard</Link>
        <Link to='/profile/1'>profile</Link>
      </div>
      <Button variant="primary" onClick={() => {
        navigate('/login')
      }}>Login</Button>
    </div>
  )
}

export default Navbar;