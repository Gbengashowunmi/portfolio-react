import React from "react";
import Navigation from "../Navigation";
import Project from "./Project";
import { motion } from "framer-motion";
import AOS from 'aos';
import "aos/dist/aos.css";

AOS.init();


export default function Portfolio() {
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
          <h1 className="back-text">works</h1>
          <h1 className="blue">
            <span>My</span> Portfolio
          </h1>
        </header>

        <div className="filter-btns">
          <button className="filter-btn active">all</button>
          <button className="filter-btn">logo</button>
          <button className="filter-btn">video</button>
          <button className="filter-btn">mockup</button>
        </div>

        <div className="projects" 
                      data-aos="zoom-in"
                      data-aos-offset="80"
                      data-aos-delay="50"
                      data-aos-duration="1500"
                      data-aos-easing="ease-in-out"
                      data-aos-once="false">
          <Project
            link="//https://gbengashowunmi.github.io/my-banking-app/"
            img="/images/bank-app.jpg"
          />
          <Project
            link="//https://e-blog-next.vercel.app/"
            img="/images/e-blog-next.jpg"
          />
          <Project
            link="//https://e-blog-news.vercel.app/"
            img="/images/e-blog-react.jpg"
          />
          <Project
            link="//https://gbengashowunmi.github.io/guessing/"
            img="/images/guess.jpg"
          />
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
