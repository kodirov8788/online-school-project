import React from 'react'
import "./Contact.css"
import image1 from "./images/Logo.png"
import { Link } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

function Contact() {
    return (
        <div className="contact">

            {/* ---------------------------------- Header--------------------------- */}
            {/* <header>
                <div className="cleft">
                    <img src={image1} alt="" />

                    <Link  to={"/"}>
                        <h1>Home</h1>
                    </Link>


                    <Link  to={"/"}>
                        <h1 >Courses</h1>
                    </Link>


                    <Link  to={"/"}>
                        <h1 >About Us</h1>
                    </Link>


                    <Link  to={"/"}>
                        <h1 >Pricing</h1>
                    </Link>

                    <Link id='a'  to={"/"}>
                        <h1 >Contact</h1>
                    </Link>

                </div>
                <div className="cright">
                    <button>Sig in</button>
                    <button id='login'>Login</button>
                </div>

            </header> */}
            <Navbar />
            {/* ---------------------------------- Header--------------------------- */}


            {/*--------------------------------------  Contact Us  ------------------------------------------ */}
            <div className="contact_us">
                <h1>Contact Us</h1>
                <p>Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive <br /> options to cater to your needs: Free and Pro. We believe in providing flexible and <br /> affordable pricing options for our services. Whether you're an individual looking to <br /> enhance your skills or a business seeking professional development solutions, we <br /> have a plan that suits you. Explore our pricing options below and choose the one that <br /> best fits your requirements.</p>
            </div>
            {/*--------------------------------------  Contact Us  ------------------------------------------ */}



            {/* ------------------------------------ ContactPage ------------------------------------------- */}

            <div className="contactpe">
                <div className="contactIt">
                    <div className="df">

                        <div className="cdf">
                            <p>First Name</p>
                            <input type="text" placeholder='Enter First Name' />
                        </div>

                        <div className="cdf">
                            <p>Last Name</p>

                            <input type="text" placeholder='Enter Last Name' />
                        </div>

                    </div>

                    <div className="df">
                        <div className="cdf">
                            <p>Email</p>
                            <input type="email" placeholder='Enter your Email' />
                        </div>

                        <div className="cdf">
                            <p>Phone</p>

                            <input type="Number" placeholder='Enter Phone Number' />
                        </div>
                    </div>



                    <div className="cdf2">
                        <p>Subject</p>
                        <input type="text" placeholder='Enter your Subject' />
                    </div>


                    <div className="cdf3">
                        <p>Message</p>
                        <input type="text" placeholder='Enter your Message here...'/>
                    </div>

                    <button>Send Your Message</button>
                </div>

                <div className="contactIt2">
                    <div className="contactEmail">
                        <i><MdEmail /></i>
                        <p>support@skillbridge.com</p>
                    </div>

                    <div className="contactEmail">
                        <i><FaPhoneFlip /></i>
                        <p>+91 00000 00000</p>
                    </div>

                    <div className="contactEmail">
                        <i><IoLocationSharp /></i>
                        <p>Some Where in the World</p>
                    </div>


                    <div className="contactEmail">
                        <i><MdEmail /></i>
                    </div>
                </div>
            </div>
            {/* ------------------------------------ ContactPage ------------------------------------------- */}


            {/* -------------------------------- footer page ---------------------------------------- */}
            {/* <footer>
                <div className="cfleft">
                    <img src={image1} alt="" />
                    <ul>
                        <li><MdEmail />hello@skillbridge.com</li>
                        <li><IoLocationSharp />+91 91813 23 2309</li>
                        <li><FaPhoneFlip />Somewhere in the World</li>

                    </ul>
                </div>
                <div className="cfcenter">
                    <ul>
                        <b>Home</b>
                        <li>Benefits</li>
                        <li>Our Courses</li>
                        <li>Our Testimonials</li>
                        <li>Our FAQ</li>
                    </ul>
                </div>
                <div className="cfright">
                    <ul>
                        <b>About Us</b>
                        <li>Company</li>
                        <li>Achievements</li>
                        <li>Our Goals</li>
                    </ul>
                </div>

                <div className="cicon">
                    <b>Social Profiles</b>
                </div>

            </footer> */}
            <Footer />

            {/* -------------------------------- footer page ---------------------------------------- */}

        </div>
    )
}

export default Contact