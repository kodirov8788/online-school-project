import React from "react";
import "./Main.css";
import work from '../assets/work.jpg'

function Main() {
    return (
        <div className="main">
                <div className="main-text">
                    <h1>UI/UX Design Course</h1>
                    <p>
                        Welcome to our UI/UX Design course! This comprehensive
                        program will equip you with the knowledge and skills to
                        create exceptional user interfaces (UI) and enhance user
                        experiences (UX). Dive into the world of design
                        thinking, wireframing, prototyping, and usability
                        testing. Below is an overview of the curriculum
                    </p>
                </div>
                <div className="middle-image">
                    <img src={work} alt="" />
                </div>
        </div>
    );
}

export default Main;
