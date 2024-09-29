import React from 'react';
import { signInWithGooglePopup, signOutUser } from './FirebaseConfig';
import { useUserContext } from './context/user.context';
import './Login.css';

const Login = () => {
  const { currentUser, setCurrentUser } = useUserContext();

  const handleGoogleSignIn = async () => {
    const { user } = await signInWithGooglePopup();
    setCurrentUser(user);
  };

  const handleSignOut = () => {
    signOutUser();
    setCurrentUser(null);
  };

  return (
    <div className="login-container">
      <h2>{currentUser ? `Welcome, ${currentUser.displayName}` : 'Login'}</h2>
      {currentUser ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      )}
    </div>
  );
};

export default Login;
