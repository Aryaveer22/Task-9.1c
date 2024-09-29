import React, { useState } from 'react';
import { auth } from './FirebaseConfig';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      window.location.href = '/login';
    } catch (err) {
      setError('Failed to sign up. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div className="signup-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Sign Up</button>
        {error && <p className="signup-error">{error}</p>}
      </div>
    </div>
  );
};

export default Signup;
