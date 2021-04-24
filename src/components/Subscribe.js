import React from 'react';
import errorIcon from '../images/icon-error.svg';

const Subscribe = () => {
  // const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const handleSubmit = (e) => {
    // const noEmail = e.value.validity.valueMissing;
    // const wrongEmail = e.value.validity.typeMismatch;
    e.preventDefault();
    // if (noEmail || wrongEmail) {
    // e.preventDefault();
    console.log('oh oh');
    // email.focus();
    // }

    // if(inputText.value.match(mailformat))
    console.log(e.value);
  };
  return (
    <section className="subscribe">
      <div className="container subscribe__container">
        <p>35,000+ already joined</p>
        <h2>Stay up-to-date with what we’re doing</h2>
        <form
          action="#"
          method="post"
          className="flex ai-c"
          onSubmit={handleSubmit}
        >
          <div className="subscribe__input ">
            <input
              className="subscribe__input--field"
              type="text"
              id="mail"
              placeholder="Enter your email address"
            />
            <span className="error-icon">
              <img src={errorIcon} alt="Error Icon" />
            </span>
            <label className="subscribe__input--error" htmlFor="mail">
              Whoops, make sure its's an email
            </label>
          </div>
          <input
            className="btn subscribe__btn"
            type="submit"
            value="Contact Us"
          />
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
