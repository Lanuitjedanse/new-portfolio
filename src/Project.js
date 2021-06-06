import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faTimes,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import Caroussel from "./Caroussel";

export default function Project({
  name,
  description,
  img,
  link,
  gitHub,
  stack,
  toggleProject,
}) {
  return (
    <div className="overlay" onClick={toggleProject}>
      <div className="project-box" onClick={(e) => e.stopPropagation()}>
        <div className="box-left">
          <h3>{name}</h3>
          <p>{description}</p>
          {/* <img src={img} alt={`${name} project`} className="pic-project" /> */}
          <Caroussel name={name} description={description} img={img} />
          <div className="links">
            {link && (
              <a href={link} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className="icon-next fa-lg"
                />
              </a>
            )}
            {gitHub && (
              <a href={gitHub} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className="fa-lg github" />
              </a>
            )}
          </div>
        </div>
        <div className="box-right">
          <FontAwesomeIcon
            icon={faTimes}
            onClick={toggleProject}
            className="fa-lg icon-close"
          />
          <h3>
            {"<"}STACK{"/>"}
          </h3>
          <ul className="stack-list">
            {stack && stack.map((stack, i) => <li key={i}>{stack}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
