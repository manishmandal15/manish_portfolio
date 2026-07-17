import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

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
        {/* Left Side */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-tag">👋 Hello, I'm</p>

          <h1>
            Manish Kumar
            <br />
            <span>Mandal</span>
          </h1>

          <h2>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "React Developer",
                2000,
                "Node.js Developer",
                2000,
                "MERN Stack Developer",
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

          <div className="hero-buttons">
            <button className="primary-btn">Download Resume</button>

            <button className="secondary-btn">Contact Me</button>

            <div className="social-links">
              <a href="#">
                <IconBrandGithub size={24} />
              </a>

              <a href="#">
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
          <div className="image-box">Coming Soon</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
