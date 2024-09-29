import React from 'react';
import './FeaturedTutorials.css'; 

const FeaturedTutorials = () => {
  return (
    <div className="featured-tutorials">
      <h2>Featured Tutorials</h2>
      <div className="tutorial-cards">
        <div className="tutorial-card">
          <img
            className="tutorial-image"
            src="./images/1.png"
            alt="Tutorial 1"
          />
          <p className="description">ABC</p>
        </div>
        <div className="tutorial-card">
          <img
            className="tutorial-image"
            src="./images/2.png"
            alt="Tutorial 2"
          />
          <p className="description">DEF</p>
        </div>
        <div className="tutorial-card">
          <img
            className="tutorial-image"
            src="./images/3.png"
            alt="Tutorial 3"
          />
          <p className="description">GHI</p>
        </div>
      </div>
      <button className="see-all-tutorials">See All Tutorials</button>
    </div>
  );
};

export default FeaturedTutorials;
