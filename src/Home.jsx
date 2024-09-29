import React from 'react';
import HeaderImage from './HeaderImage';
import FeaturedArticles from './FeaturedArticles';
import FeaturedTutorials from './FeaturedTutorials';
import SubscriptionBar from './SubscriptionBar';
import { useUserContext } from './context/user.context';
import { signOutUser } from './FirebaseConfig';

const Home = () => {
  const { currentUser, setCurrentUser } = useUserContext();

  const handleSignOut = () => {
    signOutUser();
    setCurrentUser(null);
  };

  return (
    <div>
      <HeaderImage />
      <h2>Welcome, {currentUser ? currentUser.displayName : "Guest"}</h2>
      {currentUser && <button onClick={handleSignOut}>Sign Out</button>}
      <FeaturedArticles />
      <FeaturedTutorials />
      <SubscriptionBar />
    </div>
  );
};

export default Home;
