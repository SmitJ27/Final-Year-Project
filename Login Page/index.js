import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  const [signupError, setSignupError] = useState('');
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotPasswordError, setForgotPasswordError] = useState('');

  const showError = (message) => {
    setLoginError(message);
  };

  const hideError = () => {
    setLoginError('');
  };

  const validateForgotPassword = () => {
    if (forgotEmail === '') {
      setForgotPasswordError('Please enter your email address.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(forgotEmail)) {
      setForgotPasswordError('Please enter a valid email address.');
      return false;
    }
    setForgotPasswordError('');
    return true;
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    if (!validateForgotPassword()) return;

    alert('Password reset link sent to your email!');
    setIsForgotPassword(false);
    setIsLogin(true);
  };

  const handleSignInSubmit = () => {
    if (loginUsername === '' || loginPassword === '') {
      showError('Please fill in both fields.');
    } else {
      hideError();
      alert('Login successful!');
    }
  };

  const handleSignUpSubmit = () => {
    if (
      signupUsername === '' ||
      signupEmail === '' ||
      signupPassword === '' ||
      signupConfirmPassword === ''
    ) {
      setSignupError('Please fill in all fields.');
      return;
    }
    if (signupPassword !== signupConfirmPassword) {
      setSignupError('Passwords do not match.');
      return;
    }
    setSignupError('');
    alert('Account created successfully!');
    setIsSignUp(false);
    setIsLogin(true);
  };

  return (
    <div className="square">
      <i style={{ '--clr': '#00ff0a' }}></i>
      <i style={{ '--clr': '#ff0057' }}></i>
      <i style={{ '--clr': '#fffd44' }}></i>

      {isLogin && (
        <div className="login">
          <h2>Login</h2>
          <div className="inputBx">
            <input
              type="text"
              placeholder="Username"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
            />
          </div>
          <div className="inputBx">
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          {loginError && <div className="error-message">{loginError}</div>}
          <div className="inputBx">
            <input type="submit" value="Sign in" onClick={handleSignInSubmit} />
          </div>
          <div className="links">
            <a href="#" onClick={() => { setIsLogin(false); setIsForgotPassword(true); }}>
              Forgot Password?
            </a>
            <a href="#" onClick={() => { setIsLogin(false); setIsSignUp(true); }}>
              Sign Up
            </a>
          </div>
        </div>
      )}

      {isSignUp && (
        <div className="signup">
          <h2>Sign Up</h2>
          <div className="inputBx">
            <input
              type="text"
              placeholder="Username"
              value={signupUsername}
              onChange={(e) => setSignupUsername(e.target.value)}
            />
          </div>
          <div className="inputBx">
            <input
              type="email"
              placeholder="Email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />
          </div>
          <div className="inputBx">
            <input
              type="password"
              placeholder="Password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />
          </div>
          <div className="inputBx">
            <input
              type="password"
              placeholder="Confirm Password"
              value={signupConfirmPassword}
              onChange={(e) => setSignupConfirmPassword(e.target.value)}
            />
          </div>
          {signupError && <div className="error-message">{signupError}</div>}
          <div className="inputBx">
            <input type="submit" value="Sign Up" onClick={handleSignUpSubmit} />
          </div>
          <div className="links">
            <a href="#" onClick={() => { setIsSignUp(false); setIsLogin(true); }}>
              Back to Login
            </a>
          </div>
        </div>
      )}

      {isForgotPassword && (
        <div className="forgotPassword">
          <h2>Forgot Password</h2>
          <div className="inputBx">
            <input
              type="email"
              placeholder="Enter your email"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
            />
          </div>
          {forgotPasswordError && <div className="error-message">{forgotPasswordError}</div>}
          <div className="inputBx">
            <input
              type="submit"
              value="Send Reset Link"
              onClick={handleForgotPasswordSubmit}
            />
          </div>
          <div className="links">
            <a href="#" onClick={() => { setIsForgotPassword(false); setIsLogin(true); }}>
              Back to Login
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

// Use ReactDOM.createRoot() for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;


