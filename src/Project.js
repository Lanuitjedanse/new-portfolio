import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon
          icon={faTimes}
          onClick={toggleProject}
          className="fa-lg icon-close"
        />

        <h3>{name}</h3>
        <p>{description}</p>
        <img src={img} alt={`${name} project`} className="pic-project" />
        {link && <p>{link}</p>}
        {gitHub && <p>{gitHub}</p>}
        <ul>{stack && stack.map((stack, i) => <li key={i}>{stack}</li>)}</ul>
      </div>
    </div>
  );
}
