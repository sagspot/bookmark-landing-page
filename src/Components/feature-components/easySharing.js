import React from 'react';
import Tab from '../../images/illustration-features-tab-3.svg';

const easySharing = () => {
  return (
    <div className="features__tab">
      <div className="features__tab--img">
        <img src={Tab} alt="desktop" />
      </div>
      <div className="features__tab--text">
        <h2>Share your bookmarks</h2>

        <p>
          Easily share your bookmarks and collections with others. Create a
          shareable link that you can send at the click of a button.
        </p>

        <a href="#" className="btn">
          More Info
        </a>
      </div>
    </div>
  );
};

export default easySharing;
