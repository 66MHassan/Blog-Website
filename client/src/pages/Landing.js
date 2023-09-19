import React, { useState } from 'react';
import "../App.css"
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

function Landing() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const forwardLogin = () => {
    setShowLoginForm(true);
  };

  const forwardRegister = () => {
    setShowRegisterForm(true);
  };

  return (
    <div className={`landing-page ${showLoginForm || showRegisterForm ? 'background-blur' : ''}`}>
      {showLoginForm ? (
        <div className="form-container">
          <LoginForm />
        </div>
      ) : showRegisterForm ? (
        <div className="form-container">
          <RegisterForm />
        </div>
      ) : (
        <>
          <h1>Welcome to Your App</h1>
          <p>Click the "Get Started" button to log in or register.</p>
          <button onClick={forwardLogin}>Login</button>
          <button onClick={forwardRegister}>Sign up</button>
        </>
      )}
    </div>
  );
}

export default Landing;

  