import "./Project.css";
import Arrow from "./Arrow";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faTimes,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Caroussel from "./Caroussel";

export default function Project({ project, toggleVisibility, visible }) {
  return (
    <div className="overlay" onClick={toggleVisibility}>
      <div className="project-box" onClick={(e) => e.stopPropagation()}>
        <div className="box-left">
          <Arrow direction={"left"} id={project.id} />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <Caroussel
            name={project.name}
            description={project.description}
            img={project.cover}
          />
          <div className="links">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className="icon-next fa-lg"
                />
              </a>
            )}
            {project.gitHub && (
              <a href={project.gitHub} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className="fa-lg github" />
              </a>
            )}
          </div>
        </div>
        <div className="box-right">
          <FontAwesomeIcon
            icon={faTimes}
            className="fa-lg icon-close"
            onClick={toggleVisibility}
          />
          <h3>
            {"<"}STACK{"/>"}
          </h3>
          <ul className="stack-list">
            {project.stack &&
              project.stack.map((stack, i) => <li key={i}>{stack}</li>)}
          </ul>
          <Arrow direction={"right"} id={project.id} />
        </div>
      </div>
    </div>
  );
}
