import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import "../styles/Login.css";
import { Link } from 'react-router-dom';

const MyComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [mobileError, setMobileError] = useState('');
  
    const validateForm = () => {
      let isValid = true;

      if (name.trim() === '') {
        setNameError('Name is required');
        isValid = false;
      } else {
        setNameError('');
      }
  
      if (email.trim() === '') {
        setEmailError('Email is required');
        isValid = false;
      } else if (!isValidEmail(email)) {
        setEmailError('Invalid email format');
        isValid = false;
      } else {
        setEmailError('');
      }
  
      if (mobile.trim() === '') {
        setMobileError('Mobile No is required');
        isValid = false;
      } else {
        setMobileError('');
      }

      if (isValid) {
        // Form submission logic goes here
      }
    };

    const isValidEmail = (email) => {
      // You can implement your email validation logic here
      // This is a simple example, you may want to use a more robust validation library
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
    };
  
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body custom-form-bg" style={{ backgroundColor: '#dddddd' }}>
                <form id="myForm">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      <i className="fas fa-user"></i> Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <div className="error-message" style={{ color: 'red' }}>
                      {nameError}
                    </div>
                  </div>
  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      <i className="fas fa-envelope"></i> Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="error-message" style={{ color: 'red' }}>
                      {emailError}
                    </div>
                  </div>
  
                  <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">
                      <i className="fas fa-mobile-alt"></i> Mobile No
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="mobile"
                      placeholder="Mobile No"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                    <div className="error-message" style={{ color: 'red' }}>
                      {mobileError}
                    </div>
                  </div>
  
                  <div className="mb-3 text-center">
                    <button
                      type="button"
                      id="submit-button"
                      className="form-control custom-pink-button"
                      style={{ backgroundColor: '#ff146e', color: 'white' }}
                      onClick={validateForm}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyComponent;
