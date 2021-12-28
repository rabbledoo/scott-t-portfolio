import React from "react";
import author from "../assets/ScottEvenSmaller.jpeg";

const AboutMe = () => {
  return (
    <div className="header-wrapper">
    <div className="container py-5">
      <div className="about-me-container">
        <div className="row">
          <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
              <img className="profile-img" src={author} alt="author" />
            </div>
          </div>
          <div className="col-lg-6 col-xm-12">
            <div className="about-header-wrapper">
            <h1 className="about-header">About Me</h1>
            </div>
            <div className="paragraph-wrap">
            <p className="paragraph">
              My name is Scott Tarnowsky. I am a Metro-Detroit based Full-Stack
              Software Developer, Wireless Consultant, brother, son, dog dad,
              and kimchi fermenter. I build progressive web apps and single page
              applications. Currently, I build projects using HTML, CSS,
              JavaScript and the MERN stack (MongoDB, Express.js, React.js,
              Node.js). I recently started building projects using Python and
              pretty soon I will add the Django web framework to my Python
              arsenal. Please take a look at my portfolio to check out some work
              I have done. If you are interested in learning more about me,
              don’t hesitate to reach out. If you are looking for a teammate to
              help build a project, shoot me an email and we can set up a time
              to chat, so I can learn more. I help people build a web presence,
              web applications and managed wireless business solutions. Also, if
              you have some general questions, don’t hesitate to contact me.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutMe;
