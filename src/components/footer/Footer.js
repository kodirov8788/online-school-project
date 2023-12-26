import React from "react";
import "./Footer.css";
import logo from "../../pages/cources/components/assets/logo.jpg";

import { ReactComponent as Email } from "../../pages/cources/components/assets/email.svg";
import { ReactComponent as Tele } from "../../pages/cources/components/assets/tel.svg";
import { ReactComponent as Location } from "../../pages/cources/components/assets/location.svg";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="block-1">
                    <img src={logo} alt="" />
                    <div>
                        <p>
                            <a href="/">
                                <Email /> hello@skillbridge.com
                            </a>
                        </p>
                        <p>
                            <a href="/">
                                <Tele /> +91 91813 23 2309
                            </a>
                        </p>
                        <p>
                            <a href="/">
                                <Location /> Somewhere in the World
                            </a>
                        </p>
                    </div>
                </div>
                <div className="block-2">
                    <div className="footer-block">
                        <h1>
                            <a href="/">Home</a>
                        </h1>
                        <p>
                            <a href="/benefits">Benefits</a>
                        </p>
                        <p>
                            <a href="/courses">Our Courses</a>
                        </p>
                        <p>
                            <a href="/testimonials">Our Testimonials</a>
                        </p>
                        <p>
                            <a href="/faq">Our Faq</a>
                        </p>
                    </div>
                    <div className="footer-block">
                        <h1>
                            <a href="/about">About us</a>
                        </h1>
                        <p>
                            <a href="/company">Company</a>
                        </p>
                        <p>
                            <a href="/achievements">Achievements</a>
                        </p>
                        <p>
                            <a href="/goals">Our Goals</a>
                        </p>
                    </div>
                    <div className="footer-block">
                        <h1>Social Profiles</h1>
                        <div className="social-medias">
                            <svg
                                width="52"
                                height="52"
                                viewBox="0 0 52 52"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="0.5"
                                    y="0.5"
                                    width="51"
                                    height="51"
                                    rx="7.5"
                                    fill="#F7F7F8"
                                />
                                <rect
                                    x="0.5"
                                    y="0.5"
                                    width="51"
                                    height="51"
                                    rx="7.5"
                                    stroke="#F1F1F3"
                                />
                                <g clip-path="url(#clip0_109_667)">
                                    <path
                                        d="M38 26C38 19.3726 32.6274 14 26 14C19.3726 14 14 19.3726 14 26C14 31.9895 18.3882 36.954 24.125 37.8542V29.4687H21.0781V26H24.125V23.3562C24.125 20.3488 25.9166 18.6875 28.6576 18.6875C29.9701 18.6875 31.3438 18.9219 31.3438 18.9219V21.875H29.8306C28.34 21.875 27.875 22.8001 27.875 23.75V26H31.2031L30.6711 29.4687H27.875V37.8542C33.6118 36.954 38 31.9895 38 26Z"
                                        fill="#333333"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_109_667">
                                        <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                            transform="translate(14 14)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg
                                width="52"
                                height="52"
                                viewBox="0 0 52 52"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="0.5"
                                    y="0.5"
                                    width="51"
                                    height="51"
                                    rx="7.5"
                                    fill="#F7F7F8"
                                />
                                <rect
                                    x="0.5"
                                    y="0.5"
                                    width="51"
                                    height="51"
                                    rx="7.5"
                                    stroke="#F1F1F3"
                                />
                                <g clip-path="url(#clip0_109_670)">
                                    <path
                                        d="M21.5502 35.75C30.6045 35.75 35.5583 28.2467 35.5583 21.7419C35.5583 21.5309 35.5536 21.3153 35.5442 21.1044C36.5079 20.4075 37.3395 19.5443 38 18.5553C37.1025 18.9546 36.1496 19.2154 35.1739 19.3287C36.2013 18.7129 36.9705 17.7455 37.3391 16.6058C36.3726 17.1786 35.3156 17.5826 34.2134 17.8006C33.4708 17.0116 32.489 16.4891 31.4197 16.3141C30.3504 16.139 29.2532 16.3211 28.2977 16.8321C27.3423 17.3431 26.5818 18.1547 26.1338 19.1413C25.6859 20.1279 25.5754 21.2346 25.8195 22.2903C23.8625 22.1921 21.9479 21.6837 20.2 20.7981C18.452 19.9125 16.9097 18.6694 15.673 17.1495C15.0444 18.2332 14.8521 19.5156 15.135 20.7361C15.418 21.9565 16.1551 23.0234 17.1964 23.72C16.4146 23.6952 15.65 23.4847 14.9656 23.1059V23.1669C14.9649 24.3041 15.3581 25.4066 16.0783 26.2868C16.7985 27.167 17.8013 27.7706 18.9162 27.995C18.1921 28.1931 17.432 28.222 16.6948 28.0794C17.0095 29.0574 17.6216 29.9129 18.4458 30.5263C19.27 31.1398 20.2651 31.4806 21.2923 31.5012C19.5484 32.8711 17.3942 33.6141 15.1766 33.6106C14.7833 33.61 14.3904 33.5859 14 33.5384C16.2529 34.9837 18.8735 35.7514 21.5502 35.75Z"
                                        fill="#333333"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_109_670">
                                        <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                            transform="translate(14 14)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg
                                width="52"
                                height="52"
                                viewBox="0 0 52 52"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="0.5"
                                    y="0.5"
                                    width="51"
                                    height="51"
                                    rx="7.5"
                                    fill="#F7F7F8"
                                />
                                <rect
                                    x="0.5"
                                    y="0.5"
                                    width="51"
                                    height="51"
                                    rx="7.5"
                                    stroke="#F1F1F3"
                                />
                                <g clip-path="url(#clip0_109_673)">
                                    <path
                                        d="M36.2234 14H15.7719C14.7922 14 14 14.7734 14 15.7297V36.2656C14 37.2219 14.7922 38 15.7719 38H36.2234C37.2031 38 38 37.2219 38 36.2703V15.7297C38 14.7734 37.2031 14 36.2234 14ZM21.1203 34.4516H17.5578V22.9953H21.1203V34.4516ZM19.3391 21.4344C18.1953 21.4344 17.2719 20.5109 17.2719 19.3719C17.2719 18.2328 18.1953 17.3094 19.3391 17.3094C20.4781 17.3094 21.4016 18.2328 21.4016 19.3719C21.4016 20.5062 20.4781 21.4344 19.3391 21.4344ZM34.4516 34.4516H30.8937V28.8828C30.8937 27.5562 30.8703 25.8453 29.0422 25.8453C27.1906 25.8453 26.9094 27.2937 26.9094 28.7891V34.4516H23.3563V22.9953H26.7687V24.5609H26.8156C27.2891 23.6609 28.4516 22.7094 30.1813 22.7094C33.7859 22.7094 34.4516 25.0813 34.4516 28.1656V34.4516Z"
                                        fill="#333333"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_109_673">
                                        <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                            transform="translate(14 14)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2023 Skillbridge. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
