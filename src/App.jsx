import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Index from './Index.jsx';
import Login from './Login';
import SignUp from './SignUp.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/sign-up' element={<SignUp />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;