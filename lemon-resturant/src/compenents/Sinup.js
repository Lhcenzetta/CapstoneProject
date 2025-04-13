import React from 'react';
import { Link } from 'react-router-dom';


const Sinup = () => {
  return (
    <section className="signup-section">
      <div className="signup-card">
        <h2>Create an Account</h2>
        <form className="signup-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="John Doe" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="you@example.com" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" required />

          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="Confirm your password" required />

          <button type="submit">Sign Up</button>

          <div className="signup-extra">
            <p>Already have an account? <Link to="/Login">Login here</Link></p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Sinup;
