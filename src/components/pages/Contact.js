import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';



function AboutMe() {


  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'text') {
      setText(inputValue);
    }
  };

  const handleFormSubmit = (e) => {

    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;

    }

    setName('');
    setEmail('');
    setText('');
  };

  


    return (
      <section id="contact">
        <div class="left-contact">
          <h2>Let's Connect!</h2>
          <p>Please reach out for any work, project, or other inquiries.
            Looking forward to hearing from you!
          </p>
          <form class="contact-form">
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="name"
            />
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
            />
            <input
              value={text}
              name="text"
              onChange={handleInputChange}
              type="text"
              placeholder="message"
            />

            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}

      </section>
    );
  }


export default AboutMe;
