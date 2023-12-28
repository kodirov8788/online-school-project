import React from 'react'
import "./Pricing.css"
import { BiCheck } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

function Pricing() {
    return (
        <div className='pricing'>
            <div className="pricing_main">
                <div className="pricing_left">
                    <h1>Our Pricing</h1>
                </div>
                <div className="pricing_right">
                    <p>Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive <br /> options to cater to your needs: Free and Pro. We believe in providing flexible and <br /> affordable pricing options for our services. Whether you're an individual looking to <br /> enhance your skills or a business seeking professional development solutions, we <br /> have a plan that suits you. Explore our pricing options below and choose the one <br /> best fits your requirements.</p>
                </div>
            </div>
            <div className="main_plan">
                <div className="main_plan_btn">
                    <div className="first_btn">
                        <h3>Monthly</h3>
                    </div>
                    <div className="second_btn">
                        <h3>Yearly</h3>
                    </div>
                </div>
                <div className="main_plan_flex">
                    <div className="flex_left">
                        <div className="free_plan">
                            <h2>Free plan</h2>
                        </div>
                        <h1>$0 / month</h1>
                        <div className="left_chekbox">
                            <h2>Available Features</h2>
                            <div className="chekbox_btn">
                                <div className="chekbox_color">
                                    <i>
                                        <BiCheck />
                                    </i>
                                </div>
                                <h3>Access to selected free courses.</h3>
                            </div>
                            <div className="chekbox_btn">
                                <div className="chekbox_color">
                                    <i>
                                        <BiCheck />
                                    </i>
                                </div>
                                <h3>Limited course materials and resources.</h3>
                            </div>
                            <div className="chekbox_btn">
                                <div className="chekbox_color">
                                    <i>
                                        <BiCheck />
                                    </i>
                                </div>
                                <h3>Basic community support.</h3>
                            </div>
                            <div className="chekbox_btn">
                                <div className="chekbox_color">
                                    <i>
                                        <BiCheck />
                                    </i>
                                </div>
                                <h3>No certification upon completion.</h3>
                            </div>
                            <div className="chekbox_btn">
                                <div className="chekbox_color">
                                    <i>
                                        <IoCloseOutline />
                                    </i>
                                </div>
                                <h3>Ad-supported platform.</h3></div>
                            <div className="chekbox_btn">
                                <div className="chekbox_color">
                                    <i>
                                        <IoCloseOutline />
                                    </i>
                                </div>
                                <h3>Early access to new courses.</h3>
                            </div>
                            <div className="chekbox_start">
                                <h1>Get Started</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex_left">
                        <div className="free_plan">
                            <h2>Pro plan</h2>
                        </div>
                        <h1>$79 / month</h1>
                        <div className="left_chekbox">
                            <h2>Available Features</h2>
                            <div className="chekbox_btn">
                                <div className="chekbox_color">
                                    <i>
                                        <BiCheck />
                                    </i>
                                </div>
                                <h3>Unlimited access to all courses.</h3>
                            </div>
                            <div className="chekbox_btn">
                                <div className="chekbox_color">
                                    <i>
                                        <BiCheck />
                                    </i>
                                </div>
                                <h3>Priority support from instructors.</h3>
                            </div>
                            <div className="chekbox_btn">
                                <div className="chekbox_color">
                                    <i>
                                        <BiCheck />
                                    </i>
                                </div>
                                <h3>Access to selected free courses.</h3>
                            </div>
                            <div className="chekbox_btn">
                                <div className="chekbox_color">
                                    <i>
                                        <BiCheck />
                                    </i>
                                </div>
                                <h3>Course completion certificates.</h3>
                            </div>
                            <div className="chekbox_btn">
                                <div className="chekbox_color">
                                    <i>
                                        <BiCheck />
                                    </i>
                                </div>
                                <h3>Early access to new courses.</h3>
                            </div>
                            <div className="chekbox_btn">
                                <div className="chekbox_color">
                                    <i>
                                        <BiCheck />
                                    </i>
                                </div>
                                <h3>Ad-free experience.</h3>
                            </div>
                            <div className="chekbox_start">
                                <h1>Get Started</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pricing_question">
                <div className="question_left">
                    <h1>Frequently <br /> Asked Questions</h1>
                    <p>Still you have any questions? Contact our <br /> Team via support@skillbridge.com</p>
                    <div className="left_shadow">
                        <h3>See All FAQ’s</h3>
                    </div>
                </div>
                <div className="question_right">
                    <div className="right_top">
                        <div className="close_btn">
                            <h1>Can I enroll in multiple courses at once?</h1>
                            <div className="Close">
                                <i>
                                    <IoCloseOutline />
                                </i>
                            </div>
                        </div>
                        <div className="close_btn">
                            <h1>Absolutely! You can enroll in multiple courses simultaneously and <br /> convenience.</h1>
                        </div>
                        <div className="close_btn1">
                            <h1>Enrollment Process for Different Courses</h1>
                            <div className="Close">
                                <i>
                                    <IoIosArrowRoundForward />
                                </i>
                            </div>
                        </div>
                    </div>
                    <div className="right_bottom">
                        <div className="four_border">
                            <h1>Can I download the course materials for offline access?</h1>
                            <div className="border_plyus">
                                <i>
                                    <FaPlus />
                                </i>
                            </div>
                        </div>
                        <div className="four_border">
                            <h1>Can I download the course materials for offline access?</h1>
                            <div className="border_plyus">
                                <i>
                                    <FaPlus />
                                </i>
                            </div>
                        </div>
                        <div className="four_border">
                            <h1>Can I download the course materials for offline access?</h1>
                            <div className="border_plyus">
                                <i>
                                    <FaPlus />
                                </i>
                            </div>
                        </div>
                        <div className="four_border">
                            <h1>Can I download the course materials for offline access?</h1>
                            <div className="border_plyus">
                                <i>
                                    <FaPlus />
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing