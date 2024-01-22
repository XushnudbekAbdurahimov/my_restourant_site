import React, { useState } from 'react';
import './Login.css';
import allData from '../../mock/persons';








const Login = () => {

  const [login, setLogin] = useState('')
  const [parol, setParol] = useState('')

  if (allData[0].login === login && allData[0].parol === parol) {
    window.location = '/xodim'
  }
  else if (allData[1].login === login && allData[1].parol === parol) {
    window.location = '/owner'
  }
  else if (allData[2].login === login && allData[2].parol === parol) {
    window.location = '/okijvnefd'
  }


  const [isSignUp, setIsSignUp] = useState(false);
  const [closeForm, setCloseForm] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleXButtonClick = () => {
    setCloseForm(true);
  };

  const handleSignInButtonClick = () => {
    setCloseForm(true);
  };

  const handleReopenForm = () => {
    setCloseForm(false);
  };

  if (closeForm) {
    return null;
  }




  return (
    <div className={`container ${isSignUp ? 'active' : ''}`}>
      <button className='x' onClick={handleXButtonClick}>X</button>
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div class="social-icons">
            <a href="#" class="icon">
              <i class="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" class="icon">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" class="icon">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="#" class="icon">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span> or use your email for registeration</span>
          <input type="text" id="" placeholder="Name" />
          <input type="email" id="" placeholder="Email" />
          <input type="password" id="" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in">
        <form>
          <h1>Sign in</h1>
          <div class="social-icons">
            <a href="#" class="icon">
              <i class="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#" class="icon">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" class="icon">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="#" class="icon">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span> or use your email password</span>
          <input type="email" id=""    placeholder="Email"    value={login}    onChange={(e) => setLogin(e.target.value)} />
          <input type="password" id="" placeholder="Password" value={parol} onChange={(e) => setParol(e.target.value)} />
          <a href="#">Forget Your Password?</a>
          <button>Sign In</button>
        </form>
      </div>

      <div className="toogle-container">
        <div className="toogle">
          <div className="toogle-panel toogle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className={isSignUp ? '' : 'hidden'} onClick={toggleForm}>
              Sign In
            </button>

          </div>
          <div className="toogle-panel toogle-right">
            <h1>Hello, Friend!</h1>
            <p>Register your personal details to use all site features</p>
            <button className={isSignUp ? 'hidden' : ''} onClick={toggleForm}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
