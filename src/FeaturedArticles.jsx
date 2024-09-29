import React from 'react';
import './FeaturedArticles.css'; 

const FeaturedArticles = () => {
  return (
    <div className="featured-articles">
      <h2>Featured Articles</h2>
      <div className="article-cards">
        <div className="article-card">
          <img
            className="article-image"
            src="./images/5.png"
            alt="Article 1"
          />
          <p className="description">UVW</p>
        </div>
        <div className="article-card">
          <img
            className="article-image"
            src="./images/6.png"
            alt="Article 2"
          />
          <p className="description">XYZ</p>
        </div>
        <div className="article-card">
          <img
            className="article-image"
            src="./images/7.png"
            alt="Article 3"
          />
          <p className="description">HIJ</p>
        </div>
      </div>
      <button className="see-all-articles">See All Articles</button>
    </div>
  );
};

export default FeaturedArticles;
