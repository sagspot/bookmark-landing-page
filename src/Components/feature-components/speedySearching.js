import React from 'react';
import Tab from '../../images/illustration-features-tab-2.svg';

const speedySearching = () => {
  return (
    <div className="features__tab">
      <div className="features__tab--img">
        <img src={Tab} alt="desktop" />
      </div>
      <div className="features__tab--text">
        <h2>Intelligent search</h2>

        <p>
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </p>

        <a href="#" className="btn">
          More Info
        </a>
      </div>
    </div>
  );
};

export default speedySearching;
