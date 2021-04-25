import React from 'react';
import Bookmarking from './feature-components/simpleBookmarking';
import Searching from './feature-components/speedySearching';
import Sharing from './feature-components/easySharing';

const Features = () => {
  return (
    <section className="features">
      <div className="container features__container">
        <div className="features__head">
          <h2>Features</h2>

          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <div className="features__wrapper">
          <div className="features__wrapper--head">
            <h3 className="features__title active">Simple Bookmarking</h3>
            <h3 className="features__title">Speedy Searching</h3>
            <h3 className="features__title">Easy Sharing</h3>
          </div>
          <div className="features__wrapper--body">
            <Bookmarking />
            {/* <Searching /> */}
            {/* <Sharing /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
