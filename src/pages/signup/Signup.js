import React from "react";
import "./Signup.css";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import man2 from "./images/Image.svg";
import google from "./images/Icon.svg";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
function Singup(props) {
    return (
        <div className="singup">
            <Navbar />
            <div className="singup_main">
                <div className="singup_main_left">
                    <div className="singup_main_left_box">
                        s<h1>Students Testimonials</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Tempus
                            tincidunt etiam eget elit id imperdiet et. Cras{" "}
                            <br /> eu sit dignissim lorem nibh et. Ac cum eget
                            habitasse in velit fringilla feugiat senectus in.
                        </p>
                        <div className="web_design_box">
                            <p>
                                The web design course provided a solid
                                foundation for me. The instructors were <br />{" "}
                                knowledgeable and supportive, and the
                                interactive learning environment was <br />{" "}
                                engaging. I highly recommend it!
                            </p>
                            <div className="img_and_btn">
                                <img src={man2} alt="" />
                                <h2>Sarah L</h2>
                                <button>Read More</button>
                            </div>
                            <div className="design_box_arrow">
                                <div className="left_arrow">
                                    <GoArrowLeft />
                                </div>
                                <div className="right_arrow">
                                    <GoArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="singup_main_right">
                    <div className="singup_main_left_right">
                        <div className="singup_main_right_text">
                            <h1>Sign Up</h1>
                            <p>
                                Create an account to unlock exclusive features.
                            </p>
                        </div>
                        <div className="right_signup">
                            <h2>Full Name</h2>
                            <input
                                type="text"
                                name="fullname"
                                id=""
                                placeholder="Enter your Name"
                            />
                            <h2>Email</h2>
                            <input
                                type="text"
                                name="email"
                                id=""
                                placeholder="Enter your Email"
                            />
                            <h2>Password</h2>
                            <input
                                type="number"
                                name="password"
                                id=""
                                placeholder="Enter your Password"
                            />
                            <div className="right_chekbox">
                                <input type="checkbox" name="chekbox" id="" />
                                <p>
                                    I agree with Terms of Use and Privacy Policy
                                </p>
                            </div>
                            <button className="right_signup_btn">
                                Sign Up
                            </button>
                            <p>or</p>
                            <button className="right_signup_btn2">
                                <img src={google} alt="" />
                                <h3>Sign Up with Google</h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Singup;
