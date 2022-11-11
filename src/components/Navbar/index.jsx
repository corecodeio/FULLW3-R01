import React from 'react'
import Styles from './Navbar.module.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import { logIn, logOut, logInAsync } from './../../store/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state.auth);
  const { pathname } = useLocation();

  return (
    <div>
      <h3>Navbar</h3>
      {/*<a href='/'>home</a>
      <a href='/dashboard'>dashboard</a>*/}
      <div className={Styles[`navbar-${pathname === '/' ? '0' : '1'}`]}>
        {!isAuth && <Link to='/'>home</Link>}
        <Link to='/dashboard'>dashboard</Link>
        <Link to='/profile/1'>profile</Link>
        {!isAuth ? <Button variant="primary" onClick={() => {

          dispatch(logIn({ username: 'leonardo903', email: 'leonardo@gmail.com' }))
          //dispatch(logInAsync());
        }}>Log In</Button> :
          <Button variant="primary" onClick={() => {

          dispatch(logOut());

          }}>Log Out</Button>}
      </div>
    </div>
  )
}

export default Navbar;