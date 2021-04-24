import React from 'react';
import heroImg from '../images/illustration-hero.svg';

function hero() {
  return (
    <section className="hero">
      <div className="container hero__container flex">
        <div className="hero__content">
          <h1>A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="hero-links flex">
            <a href="#" className="btn">
              Get it on Chrome
            </a>
            <a href="#" className="btn btn-sec">
              Get it on Firefox
            </a>
          </div>
        </div>
        <div className="hero__img">
          <img src={heroImg} alt="illustration hero" />
        </div>
      </div>
    </section>
  );
}

export default hero;
