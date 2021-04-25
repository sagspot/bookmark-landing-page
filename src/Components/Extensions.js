import React from 'react';
import opera from '../images/logo-opera.svg';
import chrome from '../images/logo-chrome.svg';
import firefox from '../images/logo-firefox.svg';

const extensions = [
  {
    id: 1,
    img: chrome,
    imgAlt: 'Chrome icon',
    title: 'Add to Chrome',
    version: 'Minimum version 62',
    action: 'Add & Install Extension',
  },
  {
    id: 2,
    img: firefox,
    imgAlt: 'Firefox icon',
    title: 'Add to Firefox',
    version: 'Minimum version 55',
    action: 'Add & Install Extension',
  },
  {
    id: 3,
    img: opera,
    imgAlt: 'Opera icon',
    title: 'Add to Opera',
    version: 'Minimum version 46',
    action: 'Add & Install Extension',
  },
];

const Extensions = () => {
  return (
    <section className="extension">
      <div className="container">
        <div className="extension__description">
          <h2>Download the extension</h2>
          <p>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>
        <div className="extension__cards">
          {extensions.map((extension) => {
            const { id, img, imgAlt, title, version } = extension;
            return (
              <div className="extension__card" key={id}>
                <img src={img} alt={imgAlt} className="extension__card--img" />
                <div className="extension__card--title">{title}</div>
                <div className="extension__card--version">{version}</div>
                <div className="extension__card--break">
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#495DCF"
                      fillOpacity=".2"
                      fillRule="evenodd"
                      d="M0 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm280 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-17 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-18 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-17 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm122 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-35 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-70 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM88 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM70 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM53 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM35 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM18 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                    />
                  </svg>
                </div>
                <div className="extension__card--btn btn">Add & Install</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Extensions;
