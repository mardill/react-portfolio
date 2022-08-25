import React from 'react';
// import '../styles/Contact.css';


function AboutMe() {
  return (
    <section id="contact">
      <div class="left-contact">
        <h2>Let's Connect!</h2>
        <p>Please reach out for any work, project, or other inquiries.
          Looking forward to hearing from you!
        </p>
        <form class="contact-form">
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Name:</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Email:</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Message:</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
        <button>Submit</button>

      </div>


    </section>
  );
}

export default AboutMe;
