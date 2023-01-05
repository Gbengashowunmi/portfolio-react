import React from "react";
import { BsCloudDownload, BsFillTelephoneInboundFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";

import Navigation from "../Navigation";
import EduExperience from "./EduExperience";
import Stat from "./Stat";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

AOS.init();

export default function About() {
  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <section>
        <header>
          <h1 className="back-text">resume</h1>
          <h1 className="blue">
            <span>about</span> me
          </h1>
        </header>
        <div className="info-statistics">
          <div
            className="info"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <h2>Personal imformation</h2>
            <p className="about-me">
              I am a frontend developer and I so much love to code, it gives me
              joy. I'm open to opportunities to learn and apply my skills to
              solve problems
            </p>
            <a href="tel:+2348135110104">
              <p className="contact">
                <BsFillTelephoneInboundFill />:<span> 08135110104</span>
              </p>
            </a>
            <a href="mailto:gbengashowunmi01@gmail.com">
              <p className="contact">
                <AiTwotoneMail />: <span>gbengashowunmi01@gmail.com</span>
              </p>
            </a>
            <a href="/images/gbenga_resume.pdf" download="Gbenga-Resume">
              <button>
                Download CV
                <span className="arrow">
                  <BsCloudDownload className="arrow_icon" />
                </span>
              </button>
            </a>
          </div>
          <div
            className="statistics"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <Stat figure="+2" content="years of experience" />
            <Stat figure="+15" content="Completed Projects" />
            <Stat figure="+5" content="tools" />
            <Stat figure="+2" content="tools" />
          </div>
        </div>
        <div className="hr"></div>

        <div className="ex-edu-section">
          <h2
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            experience and education
          </h2>
          <div className="ex-edu">
            <div
              className="education"
              data-aos="fade-up"
              data-aos-offset="80"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            >
              <EduExperience
                details="Worked with a team comprising a UI/UX designer and a backend developer to build a blog website and also worked with a team n building a banking app."
                date="2022-present"
                company="Essential Niegria"
              />
              <EduExperience
                date="January 2021 - present"
                details="Freelancer(Frontend web developer). created multiple page websites for onlie clients using html5, css3 and vanilla javascript"
                company="Upwork"
              />
              <EduExperience
                date="July 2021- present"
                details="Freelancer(Frontend web developer). created multiple page websites for onlie clients using html5, css3 and vanilla javascript"
                company="Fiverr"
              />
            </div>
            <div
              className="experience"
              data-aos="fade-up"
              data-aos-offset="80"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            >
              <EduExperience
                date="January 2022- present"
                details="internship"
                company="Alt School"
              />
              <EduExperience
                date="July 2020-present"
                details="student"
                company="FreeCodeCamp"
              />
            </div>
          </div>
        </div>

        {/* <div className="dark_mode">
        <IoSunny className="react_icon" />
      </div> */}
        <div className="navigation">
          <Navigation />
        </div>
      </section>
    </motion.div>
  );
}
