import React from 'react';
import devHubHome from "../../assets/images/DevHubNewScreenShot.png";
import triviaKings from "../../assets/images/Screen Shot 2021-01-08 at 11.54.00 AM.png";
import robotGladiators from "../../assets/images/Robot-gladiators.gif";
import techNews from "../../assets/images/DevHubCodeScreenShot.png";
import runBuddy from "../../assets/images/runbuddy.png";
import ohSnap from "../../assets/images/ohsnap.png";

const Projects = () => {

    return (
        <div className="projects">
                <div className="project">
                    <img src={devHubHome} alt="DevHub Screenshot" />
                    <h3><a className="text-dark" href="https://devhubhome.herokuapp.com/" target="_blank" rel="noreferrer">DevHub</a>
                        </h3>
                    <p>The Social Media For Developers</p>
                </div>
                <div className="project">
                    <img src={triviaKings} alt="Trivia Kings Screenshot" />
                    <h3><a className="text-dark" href="https://jakerobs.github.io/group-12/" target="_blank" rel="noreferrer">Trivia
                                Kings</a></h3>
                    <p>Jeopardy Based Trivia Game</p>
                </div>
                <div className="project">
                    <img src={robotGladiators} alt="Robot Gladiators Gif" />
                    <h3><a className="text-warning" href="https://zackaryanderson.github.io/robot-gladiators/"
                        target="_blank" rel="noreferrer">Robot Gladiators</a></h3>
                    <p className="text-warning">A Fun and Interactive Text Based Game</p>
                </div>
                <div className="project">
                    <img src={techNews} alt="Tech News Code Screenshot" />
                    <h3><a href="https://devhubhome.herokuapp.com/" target="_blank" rel="noreferrer">Tech News</a></h3>
                    <p className="text-light">The New News Platform for Technology</p>
                </div>
                <div className="project">
                    <img src={runBuddy} alt="Runbuddy Screenshot" />
                    <h3><a href="https://zackaryanderson.github.io/run-buddy/" target="_blank" rel="noreferrer">Run Buddy</a></h3>
                    <p>An Example Webpage</p>
                </div>
                <div className="project">
                    <img src={ohSnap} alt="Oh Snap Screen Shot" />
                    <h3><a href="https://zackaryanderson.github.io/photo-port" target="_blank" rel="noreferrer">Oh Snap</a></h3>
                    <p>A React Application</p>
                </div>
        </div>
    );
}

export default Projects;