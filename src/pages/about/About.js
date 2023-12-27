import React from 'react'
import "./About.css"
import logo1 from "./logos/shape-17.svg"
import crown from "./logos/crown.fill.svg"
import medal from "./logos/medal.fill.svg"
import mask from "./logos/theatermasks.fill.svg"
import shield from "./logos/bolt.shield.fill.svg"
function About() {
    return (
       <div>
            <div className="container">
                <div className="text">
                    <h1 className='h11'>About Skillbridge</h1>
                </div>
                <div className="texts"><p className='ppp'>Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.</p></div>
            </div>
            <div className="archiviment">
                <div className="uptodiv">
                    <h1 className='uptodivh1'>Achievements</h1>
                    <p className='uptodivp'>Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements</p>
                </div>


                <div className="cards">
                    <div className="qator1">
                        <div className="cardone">
                            <img src={crown} alt="" />
                            <h1 className='plar1'>Trusted by Thousandss</h1>
                            <p className='plar1'>We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.</p>
                        </div>
                        <div className="cardone">
                            <img src={medal} alt="" />
                            <h1 className='plar1'>Award-Winning Courses</h1>
                            <p className='plar1'>Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.</p>
                        </div>
                    </div>
                    <div className="qator1">
                        <div className="cardone">
                            <img src={mask} alt="" />
                            <h1 className='plar1'>Positive Student Feedback</h1>
                            <p className='plar1'>We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.</p>
                        </div>
                        <div className="cardone">
                            <img src={shield} alt="" />
                            <h1 className='plar1'>Industry Partnerships</h1>
                            <p className='plar1'>We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="container" id='content2'>
                <div className="text">
                    <h1 className='h11'>Our Goals</h1>
                </div>
                <div className="texts"><p className='ppp'>At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
                        Through our carefully crafted courses, we aim to</p></div>
            </div>
            </div>
            <div className="cards" id='cards2'>
                    <div className="qator1">
                        <div className="cardone">
                            <img src={crown} alt="" />
                            <h1 className='plar1'>Trusted by Thousandss</h1>
                            <p className='plar1'>We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.</p>
                        </div>
                        <div className="cardone">
                            <img src={medal} alt="" />
                            <h1 className='plar1'>Award-Winning Courses</h1>
                            <p className='plar1'>Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.</p>
                        </div>
                    </div>
                    <div className="qator1">
                        <div className="cardone">
                            <img src={mask} alt="" />
                            <h1 className='plar1'>Positive Student Feedback</h1>
                            <p className='plar1'>We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.</p>
                        </div>
                        <div className="cardone">
                            <img src={shield} alt="" />
                            <h1 className='plar1'>Industry Partnerships</h1>
                            <p className='plar1'>We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies.</p>
                        </div>
                    </div>
                    
                </div>
                <div className="songi">
                    <div className="div1">
                        <h1 className='oxiria'>Together, let's shape the future of digital innovation</h1>
                        <p className='oxirip' id='newiiddd'>Join us on this exciting learning journey and unlock your potential in design and development.</p>
                    </div>

                    <button className='oxiribtn'>Join Now</button>
                </div>
       </div>
           
    )
}

export default About