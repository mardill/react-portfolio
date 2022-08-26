import React from 'react';
// import '../styles/Work.css';


function Work() {
  return (
    <section id="work">


    <div class="intro">
        <div class="intro-wrapper">
            <h2>My Recent Projects</h2>
            <p>Take a look at the latest projects I've done! I've built web applicaitons
                using HTML and CSS.
        </p>
    </div>
    </div>


    <div class="other">
        <div class="p1">
        <a href="https://simplicity-art-gallery.herokuapp.com/"><h3>Art Gallery</h3></a>
            <a href="https://github.com/mardill/Art-gallery" target="_blank">
                <img src="images/artgallery.png" alt="Art Gallery"/>
                <h3>Github Repo</h3>
            </a>
        </div>
        <div class="p2">
        <a href="https://stormy-wildwood-40521.herokuapp.com/"><h3>Text Editor</h3></a>
            <a href="https://github.com/mardill/text-editor" target="_blank">
                <img src="images/jate.png" alt="Screenshot of Text Editor"/>
                <h3>Github Repo</h3>
            </a>
        </div>
        <div class="p3">
        <a href="https://genrosales11.github.io/Yummy-app/"><h3>Yummy App</h3></a>
            <a href="https://github.com/mardill/Yummy-app" target="_blank">
                <img src="images/yummy.png" alt="Yummy App"/>
                <h3>Github Repo</h3>
            </a>
        </div>
        <div class="p4">
        <a href="https://mvc-tech-blog-mdillon.herokuapp.com/"><h3>Tech Blog</h3></a>
            <a href="https://github.com/mardill/tech-blog" target="_blank">
                <img src="images/techblog.png" alt="Tech Blog"/>
                <h3>Github Repo</h3>
            </a>
        </div>
        <div class="p5">
        <a href="https://mardill.github.io/weather-dashboard/"><h3>Weather Dashboard</h3></a>
            <a href="https://github.com/mardill/weather-dashboard" target="_blank">
                <img src="images/weather.png" alt="Weather Dashboard"/>
                <h3>Github Repo</h3>
            </a>
        </div>
        <div class="p6">
        <a href="https://mardill.github.io/mary-dillon-portfolio/"><h3>Simple CSS Portfolio</h3></a>
            <a href="https://github.com/mardill/mary-dillon-portfolio" target="_blank">
                <img src="images/portfolio.png" alt="Simple CSS Portfolio"/>
                <h3>Github Repo</h3>
            </a>
        </div>
    </div>

</section>
  );
}


export default Work;
