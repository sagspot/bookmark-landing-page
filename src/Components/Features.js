import React from 'react';
import simpleBookmarking from './feature-components/simpleBookmarking';
import speedySearching from './feature-components/speedySearching';
import easySharing from './feature-components/easySharing';

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2>Features</h2>

        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
        <h3 className="features__title active">Simple Bookmarking</h3>
        <h3 className="features__title">Speedy Searching</h3>
        <h3 className="features__title">Easy Sharing</h3>
      </div>
    </section>
  );
};

export default Features;
