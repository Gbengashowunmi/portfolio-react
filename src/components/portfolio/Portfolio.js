import React from "react";
import Navigation from "../Navigation";
import Project from "./Project";
import { motion } from "framer-motion";
import AOS from 'aos';
import "aos/dist/aos.css";
import { BsGithub } from "react-icons/bs";
import { FaReact, FaSass } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";

AOS.init();


export default function Portfolio() {
  const icongit = <BsGithub />
  const iconReact = <FaReact/>
  const iconCSS = <IoLogoCss3/>
  const iconNext = <TbBrandNextjs/>
  const iconjs = <IoLogoJavascript/>
  const iconHtml = <IoLogoHtml5/>
  const iconSass = <FaSass/>
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
                      data-aos="fade-up"
                      data-aos-offset="80"
                      data-aos-delay="50"
                      data-aos-duration="1500"
                      data-aos-easing="ease-in-out"
                      data-aos-once="false">
          <Project
            link="//gbengashowunmi.github.io/my-banking-app/"
            img="/images/bank-app.jpg"
            title="Banking Web App"
            description="This is a website built for online banking transaction where you can log in, check your blance, take a loan, transfer money to another existing customer, make withdrawals and also close your account. "
            iconjs={iconjs}
            iconCss={iconCSS}
            iconHtml={iconHtml}
            icongit={icongit}
            
          />
          <Project
            link="//e-blog-next.vercel.app/"
            img="/images/e-blog-next.jpg"
            title="News Website (NextJS)"
            description="This is a news/Blog website that displays latest news around the globe. you can visit to read news, create account to comment and also publish post that'll be verified by an admin before actual publishing.  "
            icongit={icongit}
            iconNext={iconNext}
            iconSass ={iconSass}

          />
          <Project
            link="//e-blog-news.vercel.app/"
            img="/images/e-blog-react.jpg"
            title="News Website (Reactjs)"
            description="This is a news/Blog website that displays latest news around the globe. you can visit to read news, create account to comment and also publish post that'll be verified by an admin before actual publishing.  "
            icongit={icongit}
            iconReact={iconReact}
            iconSass ={iconSass}
            

          />
          <Project
            link="//gbengashowunmi.github.io/guessing/"
            img="/images/guess.jpg"
            title="Guessing game"
            description="This is a simple game app where you guess a number and get a increase in score for correct answer and decrease in score for a wrong answer "
            icongit={icongit}
              iconjs={iconjs}
            iconCss={iconCSS}
            iconHtml={iconHtml}

          />
        </div>
        <div className="navigation">
          <Navigation />
        </div>
      </section>
    </motion.div>
  );
}
