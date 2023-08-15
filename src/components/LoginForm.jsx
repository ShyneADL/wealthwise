import React, { useState } from 'react';
import './form.css';
import { logo } from "../assets";
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const validateForm = () => {
    const newErrors = {};


    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Success");
      // Perform signup or API call here
    } else {
      console.log("Failed")
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="login-root">
      
    <div className="box-root flex-flex flex-direction--column" style={{minHeight: '100vh', flexGrow: '1',}}>
      <div className="box-root pt-6 flex-flex flex-direction--column" style={{flexGrow: 1, zIndex: 9,}}>
        <div className="formbg-outer">
          <div className="formbg">
            <div className="box-root pt-6 px-6 flex justify-center Content--center">
              <Link to='/'><img src={logo} alt="discount" className="w-[200px]" /></Link>
            </div>
            <div className="formbg-inner p-8">
              <span className="pb-3 sub-text">Sign in to your account</span>
              <form onSubmit={handleSubmit} id="stripe-login">
                <div className="field pb-6">
                  <label>Email</label>
                  <input
                   type="email"
                   name="email"
                   value={formData.email}
                   onChange={handleInputChange}></input>
                   {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="field pb-6">
                  <div className="grid--50-50">
                    <label>Password</label>
                  </div>
                  <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}></input>
                  {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <div className="field field-checkbox pb-6 flex align-center">
                  <label>
                    <input type="checkbox" name="checkbox"></input>
                    Stay signed in
                  </label>
                </div>
                <div className="field pb-6">
                  <input 
                   type="submit"
                   name="submit" 
                   value="Continue"></input>
                </div>
                <div className="field">
                  
                </div>
              </form>
            </div>
          </div>
          <div className="footer-link pt-6">
            <span className='sub-text' style={{color: '#fff'}}>Don't have an account? <Link to='/sign-up'>Sign Up</Link></span>
            <div className="listing pt-6 pb-6 flex center-center">
              <span className='sub-text footer-links'><a href="#" style={{color: '#fff',}}>© WealthWise</a></span>
              <span className='sub-text footer-links'><a href="#" style={{color: '#fff',}}>Contact</a></span>
              <span className='sub-text footer-links'><a href="#" style={{color: '#fff',}}>Privacy & terms</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SignUpForm;
