import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login';
import SignUp from './pages/SignUp.jsx';
import Stocks from './pages/Stocks.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/sign-up' element={<SignUp />}></Route>
          <Route path='/stocks' element={<Stocks />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;