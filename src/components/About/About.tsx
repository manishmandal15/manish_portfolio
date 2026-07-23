import "./About.css";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">

        <div className="section-title">
          <h2>About Me</h2>
          <p>Get to know me</p>
        </div>

        <div className="about-content">

          <div className="about-text">

            <h3>Full Stack Web Developer</h3>

            <p>
              I am a Full Stack Web Developer with 1 year of paid internship
              experience in building responsive and scalable web applications
              using React.js, Node.js, Express.js and MySQL.
            </p>

            <p>
              I enjoy solving real-world problems, building clean user
              interfaces, developing REST APIs and continuously learning new
              technologies.
            </p>

            <div className="about-points">

              <div>
                <FaCheckCircle />
                <span>1 Year Paid Internship</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>Production Level Projects</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>REST API Development</span>
              </div>

              <div>
                <FaCheckCircle />
                <span>React • Node • Express • MySQL</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;