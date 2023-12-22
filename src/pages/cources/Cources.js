import React from "react";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Card from "./components/cards/Card";
import "./Courses.css";
import Footer from "./components/footer/Footer";

function Cources() {
    return (
        <div className="courses">
            <Navbar />
            <Main />
            <Card />
            <Footer />
        </div>
    );
}

export default Cources;
