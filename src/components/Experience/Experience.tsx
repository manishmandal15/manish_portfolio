import "./Experience.css";
import { experience } from "../../data/experience";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <div className="container">

        <div className="section-title">
          <h2>Experience</h2>
          <p>My professional journey</p>
        </div>

        {experience.map((exp, index) => (
          <div className="experience-card" key={index}>

            <div className="experience-header">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
            </div>

            <div className="experience-info">
              <span>
                <FaCalendarAlt />
                {exp.duration}
              </span>

              <span>
                <FaMapMarkerAlt />
                {exp.location}
              </span>
            </div>

            <ul>
              {exp.points.map((point, i) => (
                <li key={i}>
                  <FaBriefcase className="bullet-icon" />
                  {point}
                </li>
              ))}
            </ul>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Experience;