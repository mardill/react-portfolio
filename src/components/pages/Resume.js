import React from 'react';



function Resume() {
    return (
        <section id="resume">


            <a href="files/Resume-Mary_Dillon.pdf" download="resume-mary_dillon.pdf">Resume</a>

            <div class="resumes">
                <div class="skills">
                    <h4>Front-end Proficiencies</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>Javascript</li>
                        <li>Jquery</li>
                        <li>Bootstrap</li>
                    </ul>
                    <h4>Back-end Proficiencies</h4>
                    <ul>
                        <li>APIs</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySql, Sequelize</li>
                        <li>Mongo, Mongoose</li>
                        <li>Rest</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}


export default Resume;