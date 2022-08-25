import React from 'react';


const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function AboutMe() {
  return (
    <section id="about">
    <div class="left">
          <img src="./assets/images/marydillon.jpg" alt="Photo of Mary Dillon"/>
     </div>


    <div class="right">
        <h1>Hi, I'm Mary</h1>
        <p>
            I'm a full-time student at UC Berkeley learning skills in web development and full-stack 
            engineering. These skills include HTML, CSS, Javascript, Node.js and Express.js among
            others. I'm excited to build beautiful web interfaces and applications. You can 
            view some examples of my recent work below!
        </p>
    </div>
</section>
  );
}

export default AboutMe;
