import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import developer from "../../assets/images/hero/developer.svg";
import { IconDownload } from "@tabler/icons-react";
import { IconSend } from "@tabler/icons-react";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="blur blur1"></div>
        <div className="blur blur2"></div>
        {/* Left Side */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-tag"> 👋 Welcome to my Portfolio</p>
          <h1>
            Manish Kumar
            <br />
            <span>Mandal</span>
          </h1>
          {/* Building scalable digital experiences. */}
          <h2>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "React.js Developer",
                2000,
                "Node.js Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "Frontend Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p className="hero-description">
            I build scalable, modern and responsive web applications using
            React.js, Node.js, Express.js and MySQL with clean architecture and
            real-world solutions.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <h3>1+</h3>
              <p>Years Experience</p>
            </div>

            <div className="stat">
              <h3>3+</h3>
              <p>Projects</p>
            </div>

            <div className="stat">
              <h3>40+</h3>
              <p>REST APIs</p>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="primary-btn">
              <IconDownload size={15} />
              Download Resume
            </button>

            {/* <a
  href="/resume/Manish_Kumar_Mandal_Resume (3).pdf"
  download
  className="primary-btn"
>
  Download Resume
</a> */}

            <button className="secondary-btn">
              <IconSend size={15} />
              Contact Me
            </button>

            <div className="social-links">
              <a href="https://github.com/manishmandal15">
                <IconBrandGithub size={24} />
              </a>

              <a href="https://www.linkedin.com/in/manish-kumar-mandal-50308025b?utm_source=share_via&utm_content=profile&utm_medium=member_android">
                <IconBrandLinkedin size={24} />
              </a>

              <a href="mailto:mmanishkumar1121@gmail.com">
                <IconMail size={24} />
              </a>
            </div>
          </div>
        </motion.div>
        {/* Right Side */}

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="image-box">
            <img src={developer} alt="Developer" className="developer-image" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
