import React from 'react'
import "./Signup.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { SlEnvolopeLetter } from "react-icons/sl";
import { MdCall } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import man from './images/Logo.svg'
import man2 from './images/Image.svg'
import google from './images/Icon.svg'
function Singup(props) {
    return (
        <div className='singup'>
            <div className="singup_navbar">
                <h1>Free Courses 🌟 Sale Ends Soon, Get It Now</h1>
                <i>
                    <GoArrowRight />
                </i>
            </div>
            <div className="singup_navbartwo">
                <img src={man} alt="" />
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Courses</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
                <div className="singup_navbartwo_login">
                    <div className="Up">
                        <h2>Sign Up</h2>
                    </div>
                    <div className="In">
                        <h2>Login</h2>
                    </div>
                </div>
                <i className='fries'>
                    <GiHamburgerMenu />
                </i>
            </div>
            <div className="singup_main">
                <div className="singup_main_left">
                    <div className="singup_main_left_box">
                        <h1>Students Testimonials</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras <br /> eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.</p>
                        <div className="web_design_box">
                            <p>The web design course provided a solid foundation for me. The instructors were <br /> knowledgeable and supportive, and the interactive learning environment was <br /> engaging. I highly recommend it!</p>
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
                            <p>Create an account to unlock exclusive features.</p>
                        </div>
                        <div className="right_signup">
                            <h2>Full Name</h2>
                            <input type="text" name="fullname" id="" placeholder='Enter your Name' />
                            <h2>Email</h2>
                            <input type="text" name="email" id="" placeholder='Enter your Email' />
                            <h2>Password</h2>
                            <input type="number" name="password" id="" placeholder='Enter your Password' />
                            <div className="right_chekbox">
                                <input type="checkbox" name="chekbox" id="" />
                                <p>I agree with Terms of Use and Privacy Policy</p>
                            </div>
                            <button className='right_signup_btn'>Sign Up</button>
                            <p>or</p>
                            <button className='right_signup_btn2'>
                                <img src={google} alt="" />
                                <h3>Sign Up with Google</h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="singup_footer">
                <div className="singup_footer_In">
                    <div className="footer_part_one">
                        <img src={man} alt="" />
                        <div className="part_one_letter">
                            <i>
                                <SlEnvolopeLetter />
                            </i>
                            <p>hello@skillbridge.com</p>
                        </div>
                        <div className="part_one_call">
                            <i>
                                <MdCall />
                            </i>
                            <p>+91 91813 23 2309</p>
                        </div>
                        <div className="part_one_location">
                            <i>
                                <IoLocationSharp />
                            </i>
                            <p>Somewhere in the World</p>
                        </div>
                    </div>
                    <div className="footer_part_two">
                        <div className="footer_first">
                            <h2>Home</h2>
                            <p>Benefits</p>
                            <p>Our Courses</p>
                            <p>Our Testimonials</p>
                            <p>Our FAQ</p>
                        </div>
                        <div className="footer_second">
                            <h2>About Us</h2>
                            <p>Benefits</p>
                            <p>Our Courses</p>
                            <p>Our Testimonials</p>
                        </div>
                    </div>
                    <div className="footer_part_three">
                        <h2>Social Profiles</h2>
                        <div className="three_icon">
                            <i>
                                <FaTwitter />
                            </i>
                            <i>
                                <FaFacebook />
                            </i>
                            <i>
                                <FaInstagram />
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Singup