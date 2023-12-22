import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpg";

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-dead-1">
                <div className="nav-head">
                    Free Courses 🌟 Sale Ends Soon, Get It Now{" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3.59961 12.5C3.59961 12.0029 4.00255 11.6 4.49961 11.6L17.2651 11.6L12.2758 6.84874C11.9175 6.50423 11.9063 5.93449 12.2509 5.5762C12.5954 5.2179 13.1651 5.20673 13.5234 5.55125L20.1234 11.8512C20.2999 12.0209 20.3996 12.2552 20.3996 12.5C20.3996 12.7448 20.2999 12.9791 20.1234 13.1487L13.5234 19.4487C13.1651 19.7933 12.5954 19.7821 12.2509 19.4238C11.9063 19.0655 11.9175 18.4958 12.2758 18.1512L17.2651 13.4L4.49961 13.4C4.00255 13.4 3.59961 12.9971 3.59961 12.5Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>

            <div className="nav-menu">
                <div className="nav-menu-1">
                    <img src={logo} alt="" />
                    <ul className="ul">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/Cources">Courses</a>
                        </li>
                        <li>
                            <a href="/about">About us</a>
                        </li>
                        <li>
                            <a href="/pricing">Pricing</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-menu-2">
                    <button>Sign Up</button>
                    <button>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
