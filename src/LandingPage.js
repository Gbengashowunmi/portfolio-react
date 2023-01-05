import React from "react";
import { ImArrowRight2 } from "react-icons/im";
import { Link } from "react-router-dom";
import Navigation from "./components/Navigation";import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


AOS.init();

export default function LandingPage() {
  return (
    <motion.div
    className="container text-center  bg-black"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
    <main>
      <aside     
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-once="false"
    >
        <img src="/images/gbenga.jpeg" alt="mine" />
      </aside>
      <div className="description"
      
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
      >
        <p className="magenta"
        > ~Hi Distinguished! </p>
        <h2 className="name"> i'm gbenga showunmi.</h2>
        <h2 className="job-title">Web developer</h2>
        <p>
        I am a Frontend web app developer. I have over 2 years experience working on Frontend web projects and  with libraries and frameworks like ReactJs,  NextJs, SASS, FramerMotion, Material UI, and redux.
        I am very enthusiastic and tenacious about growth.  I obstinately endeavour to broaden the horizon of my knowledge. 
        </p>
<Link to="/about">
        <button>
          About Me
          <span className="arrow">
            <ImArrowRight2 className="arrow_icon" />
          </span>
        </button>
        </Link>
      </div>
      <div className="navigation">
        <Navigation />
      </div>
    </main>
    </motion.div>
  );
}
