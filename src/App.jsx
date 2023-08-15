import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home.jsx';
import Login from './Login';
import SignUp from './SignUp.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/sign-up' element={<SignUp />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;