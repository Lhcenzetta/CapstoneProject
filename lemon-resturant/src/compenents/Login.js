import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <section className="login-section">
      <div className="login-card">
        <h2>Login to Little Lemon</h2>
        <form className="login-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="you@example.com" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />

          <button type="submit">Login</button>

          <div className="login-extra">
            <a href="#">Forgot password?</a>
            <p>Don't have an account?<Link to="/Sinup">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
