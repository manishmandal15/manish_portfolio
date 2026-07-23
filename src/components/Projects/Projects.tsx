// import "./Projects.css";

// const Projects = () => {
//   return (
//     <section className="projects section" id="projects">
//       <div className="container">

//         <div className="section-title">
//           <h2>Featured Projects</h2>
//           <p>Some of my recent work</p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Projects;



import "./Projects.css";
import { projects } from "../../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="container">

        <div className="section-title">
          <h2>Featured Projects</h2>
          <p>Some of my recent work</p>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (

            <div className="project-card" key={project.id}>

              <div className="project-image">

                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="placeholder">
                    Project Screenshot
                  </div>
                )}

              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">

                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}

                </div>

                <div className="project-buttons">

  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub />
      GitHub
    </a>
  )}

  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noreferrer"
    >
      <FaExternalLinkAlt />
      Live Demo
    </a>
  )}

</div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;