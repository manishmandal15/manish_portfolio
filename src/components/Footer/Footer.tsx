import "./Footer.css";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <h2>Manish Kumar Mandal</h2>

      <p>
        MERN Stack Developer
      </p>

      <div className="footer-links">

        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

      </div>

      <div className="footer-social">

        <a
          href="YOUR_GITHUB"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="YOUR_LINKEDIN"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

      </div>

      <p className="copyright">
        © 2026 Manish Kumar Mandal. All Rights Reserved.
      </p>

      <a href="#home" className="scroll-top">
        <FaArrowUp />
      </a>

    </footer>
  );
};

export default Footer;