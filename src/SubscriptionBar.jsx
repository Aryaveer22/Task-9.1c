import React from 'react';
import './SubscriptionBar.css';

const SubscriptionBar = () => (
  <div className="subscription-bar">
    <span className="subscription-text">Subscribe to our newsletter:</span>
    <input className="subscription-input" type="email" placeholder="Enter your email" />
    <button className="subscription-button">Subscribe</button>
  </div>
);

export default SubscriptionBar;
