import "./Skills.css";
import { skills } from "../../data/skills";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">

        <div className="section-title">
          <h2>Tech Stack</h2>
          <p>Technologies I work with</p>
        </div>

        <div className="skills-grid">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <Icon
                  className="skill-icon"
                  style={{ color: skill.color }}
                />

                <h3>{skill.name}</h3>
                {/* <p className="skill-level">{skill.level}</p> */}
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Skills;