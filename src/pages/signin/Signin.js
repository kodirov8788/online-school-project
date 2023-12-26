import React from "react";
import Navbar from "../../components/navbar/Navbar"
import Footer from '../../components/footer/Footer'
import img from "./img.png"
import './Signin.css'

export default function Signin() {
    return (
        <div className="container">
            <Navbar />
            <div className="signin-wrap">
                <div className="sec_l">
                    <div className="div1">
                        <p>Students Testimonials</p>
                        <span>
                            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                            eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
                            cum eget habitasse in velit fringilla feugiat senectus in.
                        </span>
                    </div>
                    <div className="div2">
                        <span>
                            The web design course provided a solid foundation for me. The
                            instructors were knowledgeable and supportive, and the interactive
                            learning environment was engaging. I highly recommend it!
                        </span>
                    </div>
                    <div className="div3">
                        <img src={img} alt="" />
                        <p>Sarah L</p>
                        <div className="middlediv">
                            <p>Read More</p>
                        </div>
                    </div>
                    <div className="svgs">
                        <svg
                            width="62"
                            height="63"
                            viewBox="0 0 62 63"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="0.5"
                                y="1"
                                width="61"
                                height="61"
                                rx="7.5"
                                fill="white"
                            />
                            <rect
                                x="0.5"
                                y="1"
                                width="61"
                                height="61"
                                rx="7.5"
                                stroke="#F1F1F3"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M39.5 31.5C39.5 32.2042 38.9292 32.775 38.225 32.775H26.9405L30.6087 36.106C31.1163 36.594 31.1321 37.4011 30.6441 37.9087C30.156 38.4163 29.3489 38.4321 28.8413 37.9441L22.8913 32.4191C22.6413 32.1787 22.5 31.8468 22.5 31.5C22.5 31.1532 22.6413 30.8213 22.8913 30.581L28.8413 25.056C29.3489 24.5679 30.156 24.5837 30.6441 25.0913C31.1321 25.5989 31.1163 26.406 30.6087 26.8941L26.9405 30.225H38.225C38.9292 30.225 39.5 30.7959 39.5 31.5Z"
                                fill="#262626"
                            />
                        </svg>
                        <svg
                            width="62"
                            height="63"
                            viewBox="0 0 62 63"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="0.5"
                                y="1"
                                width="61"
                                height="61"
                                rx="7.5"
                                fill="white"
                            />
                            <rect
                                x="0.5"
                                y="1"
                                width="61"
                                height="61"
                                rx="7.5"
                                stroke="#F1F1F3"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M22.5 31.5C22.5 30.7958 23.0708 30.225 23.775 30.225H35.0595L31.3913 26.8941C30.8837 26.406 30.8679 25.5989 31.3559 25.0913C31.844 24.5837 32.6511 24.5679 33.1587 25.056L39.1087 30.581C39.3587 30.8213 39.5 31.1532 39.5 31.5C39.5 31.8468 39.3587 32.1787 39.1087 32.4191L33.1587 37.9441C32.6511 38.4321 31.844 38.4163 31.3559 37.9087C30.8679 37.4011 30.8837 36.594 31.3913 36.106L35.0595 32.775H23.775C23.0708 32.775 22.5 32.2042 22.5 31.5Z"
                                fill="#262626"
                            />
                        </svg>
                    </div>
                </div>
                <div className="sec_r">
                    <div className="div4">
                        <p>Login</p>
                        <span>Welcome back! Please log in to access your account.</span>
                    </div>
                    <div className="div5">
                        <p>Email</p>
                        <input placeholder="Enter your Email" type="text" />
                        <p>Password</p>
                        <input placeholder="Enter your Password" type="text" />
                        <span>Forgot Password?</span>
                    </div>
                    <div className="div6">
                        <p>
                            {" "}
                            <input type="checkbox" />
                            Remember me
                        </p>
                        <button>Login</button>
                        <div className="line">
                            <svg
                                width="255"
                                height="2"
                                viewBox="0 0 255 2"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line y1="1" x2="255" y2="1" stroke="#E4E4E7" />
                            </svg>
                            <p>OR</p>
                            <svg
                                width="255"
                                height="2"
                                viewBox="0 0 255 2"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line y1="1" x2="255" y2="1" stroke="#E4E4E7" />
                            </svg>
                        </div>
                        <div className="google">
                            <button>
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_38_3002)">
                                        <path
                                            d="M29.7083 15.3456C29.7083 14.3259 29.6256 13.3007 29.4493 12.2976H15.3008V18.0738H23.4029C23.0667 19.9368 21.9864 21.5848 20.4046 22.632V26.3799H25.2383C28.0768 23.7674 29.7083 19.9092 29.7083 15.3456Z"
                                            fill="#4285F4"
                                        />
                                        <path
                                            d="M15.2989 30.001C19.3445 30.001 22.7562 28.6727 25.242 26.3799L20.4082 22.6319C19.0634 23.5469 17.3272 24.065 15.3044 24.065C11.3911 24.065 8.07311 21.4249 6.88259 17.8754H1.89453V21.739C4.44092 26.8043 9.6274 30.001 15.2989 30.001Z"
                                            fill="#34A853"
                                        />
                                        <path
                                            d="M6.87895 17.8753C6.25063 16.0124 6.25063 13.9951 6.87895 12.1322V8.26849H1.89641C-0.231095 12.507 -0.231095 17.5005 1.89641 21.739L6.87895 17.8753Z"
                                            fill="#FBBC04"
                                        />
                                        <path
                                            d="M15.2989 5.93708C17.4374 5.90401 19.5043 6.70871 21.0531 8.18583L25.3356 3.90327C22.6239 1.35688 19.0248 -0.0430825 15.2989 0.00101083C9.6274 0.00101083 4.44092 3.19778 1.89453 8.26851L6.87708 12.1322C8.06209 8.57716 11.3856 5.93708 15.2989 5.93708Z"
                                            fill="#EA4335"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_38_3002">
                                            <rect width="30" height="30" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Login with Google
                            </button>
                            <p>
                                Don’t have an account? <span>Sign Up</span>
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.50005 19.5L19.5 6.49996M19.5 6.49996V18.98M19.5 6.49996H7.02005"
                                        stroke="#262626"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
