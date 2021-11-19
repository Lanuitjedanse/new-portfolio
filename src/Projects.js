import "./Projects.css";
import Project from "./Project";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function Projects({ allProjects }) {
  const [id, setId] = useState(null);
  const [project, setProject] = useState({});
  const [visible, setVisible] = useState(false);

  const getProject = (id) => {
    axios.get("/projects.JSON").then((res) => {
      console.log(res.data[id]);
      setProject(res.data[id]);
      setVisible(true);
    });
  };

  const toggleIcon = (id) => {
    setId(id);
  };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div className="box-projects">
        {allProjects &&
          allProjects.map((project) => (
            <div
              className={`${project.class} box-project`}
              key={project.id}
              onMouseEnter={() => toggleIcon(project.id)}
              onMouseLeave={() => toggleIcon(null)}
            >
              <img
                className="cover-project"
                src={project.cover}
                alt={project.name}
              />

              {project.id === id && (
                <>
                  <h2 className="title-proj tracking-in-expand">
                    {project.name}
                  </h2>
                  <FontAwesomeIcon
                    icon={faArrowAltCircleRight}
                    className="icon-next fa-lg fade-in"
                    onClick={() => getProject(id)}
                  />
                </>
              )}
            </div>
          ))}
      </div>
      {project && visible && (
        <Project
          toggleVisibility={toggleVisibility}
          project={project}
          visible={visible}
        />
      )}
    </>
  );
}
