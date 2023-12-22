import React from "react";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Card from "./components/cards/Card";
import './Courses.css'

function Cources() {
    return (
        <div className="courses">
            <Navbar />
            <Main />
            <Card />
        </div>
    );
}

export default Cources;
