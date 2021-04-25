import React from 'react';
import Tab from '../../images/illustration-features-tab-1.svg';

const simpleBookmarking = () => {
  return (
    <div className="features__tab">
      <div className="features__tab--img">
        <img src={Tab} alt="desktop" />
      </div>
      <div className="features__tab--text">
        <h2>Bookmark in one click</h2>

        <p>
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>

        <a href="#" className="btn">
          More Info
        </a>
      </div>
    </div>
  );
};

export default simpleBookmarking;
