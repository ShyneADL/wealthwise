import React from 'react';
import LoginBody from '../components/LoginBody';
import { LoginForm } from '../components';

const Login = () => {
  return (
    <div className='h-[760px]'>
      <LoginBody />
      <LoginForm />
    </div>
  )
}

export default Login;