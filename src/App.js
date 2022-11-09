import React, {useEffect, useContext} from 'react';
import { ListUserContext } from './Context/ListUserContest';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
//componets
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//views
import Home from './views/Home';
import DashBoard from './views/DashBoard';
import Profile from './views/Profile';
import ListUsers from './views/ListUsers';
import Effect from './views/Effect';
//import NotFound from './views/NotFound';
/*const rutas = [
  {
    path:'dashboard/*',
    element:<DashBoard />
  },
  {
    path:'/profile/:id',
    element:<Profile />
  },
  {
    path:'*',
    element:<Navigate to='/' />
  },
]*/
function App() {
  const {setList} = useContext(ListUserContext);
  const getListUsersAPI = async ()=>{
      const response = await fetch('https://reqres.in/api/users?page=2');
      const responseJson = await response.json();
      //console.log(responseJson)
      setList(responseJson.data);
  }

  useEffect(()=>{
      getListUsersAPI();
      // eslint-disable-next-line
  },[]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/' element={<div>welcome</div>} />
            <Route path='/login' element={<div>login</div>} />
            <Route path='/register' element={<div>register</div>} />
          </Route>
          <Route path='/dashboard/*' element={<DashBoard />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/users' element={<ListUsers/>}/>
          <Route path='/effect' element={<Effect/>}/>
          <Route path='*' element={<Navigate to='/' />} />
          {/*rutas.map((item,index)=>{
            return <Route key={index} path={item.path} element={item.element}/>
          })*/}
          {/*<Route path='*' element={<NotFound />} />*/}

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/