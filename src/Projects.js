import "./Projects.css";
import Project from "./Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function Projects() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [link, setLink] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [stack, setStack] = useState([]);
  const [projectOpen, setProjectOpen] = useState(false);
  const [visibilityIcon, setVisibilityIcon] = useState(false);
  const [id, setId] = useState(0);

  const toggleProject = (e, id) => {
    if (!projectOpen) {
      setName(projectsList[id].name);
      setDescription(projectsList[id].description);
      setImg(projectsList[id].img);
      setLink(projectsList[id].link);
      setGitHub(projectsList[id].gitHub);
      setStack(projectsList[id].stack);
    }
    // e.stopPropagation();
    setProjectOpen(!projectOpen);
  };

  const toggleIcon = (id) => {
    console.log("id", id);
    setId(id);
    setVisibilityIcon(true);
  };

  const projectsList = [
    {
      id: 0,
      name: "Subscription Form",
      description: "Subscription for Cloud Provider",
      link: "",
      class: "color1",
      img: "/dragrace.png",
      gitHub: "https://github.com/Lanuitjedanse/subscription-form",
      stack: ["React", "Tailwind", "Lodash"],
    },
    {
      id: 1,
      name: "Spin Spin Shop",
      description: "Helped to change CSS for this Shopify Shop",
      link: "https://spinspinshop.com/",
      class: "color2",
      img: "/spinspin.png",
      gitHub: "",
      stack: ["Shopify", "HTML5", "CSS3", "FontAwesome"],
    },
    {
      id: 2,
      name: "thing Online",
      description:
        "My first profesionnal project working as a Frontend Developer. thing Online aims to revolutionise virtual workshops. This project uses stack such as Node.js, Nuxt.js, Vue.js, Vuex, socket.io, JavaScript, TypeScript, Python, MongoDB, LiveSwitch, PixiJS, and more",
      link: "https://app.thing.online/login",
      class: "color3",
      img: "/thing-online.png",
      gitHub: "",
      stack: [
        "Vue.js",
        "Vuex",
        "Socket.io",
        "MongoDB",
        "Tailwind",
        "JavaScript",
        "TypeScript",
        "Python",
        "LiveSwitch",
        "PixiJS",
      ],
    },
    {
      id: 3,
      name: "Lanuitjedanse",
      description:
        "My final fullstack project during the bootcamp at Spiced Academy. Lanuitjedanse allows you to find a bar or a club depending on your music taste. This project was done using Node.js, React, PostgresSQL and Google Maps API.",
      link: "https://lanuitjedanse.herokuapp.com/",
      class: "color4",
      img: "/lanuitjedanse.png",
      gitHub: "https://github.com/Lanuitjedanse/Lanuitjedanse",
      stack: [
        "React",
        "Redux",
        "Socket.io",
        "PostgresSQL",
        "Node.js",
        "Express.js",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
    },
    {
      id: 4,
      name: "Tracklist",
      description:
        "My third fullstack project at Spiced Academy using Node.js, React and Postgres. It is a social media platform for music lovers.",
      link: "https://social-tracklist.herokuapp.com/",
      class: "color5",
      img: "/tracklist.png",
      gitHub: "https://github.com/Lanuitjedanse/tracklist",
      stack: [
        "React",
        "Redux",
        "Socket.io",
        "PostgresSQL",
        "Node.js",
        "Express.js",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
    },
    {
      id: 5,
      name: "Greenstagram",
      description:
        "My second fullstack project, this project was done using Node.js, Vue.js and Postgres. It is a social media platform similar to instagram for plant lovers",
      link: "https://lucie-greenstagram.herokuapp.com/",
      class: "color6",
      img: "/greenstagram.png",
      gitHub: "https://github.com/Lanuitjedanse/greenstagram",
      stack: [
        "Vue.js",
        "PostgresSQL",
        "Node.js",
        "Express.js",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
    },
    {
      id: 6,
      name: "Petition for Cheese Rights",
      description:
        "My first fullstack project at Spiced Academy. This project was done using Node.js, Handlebars and Postgres. This is a petition website for cheese rights :) ",
      link: "https://stormy-chamber-44911.herokuapp.com/register",
      class: "color7",
      img: "/petition.png",
      gitHub: "https://github.com/Lanuitjedanse/petition-for-cheese-rights",
      stack: [
        "HandleBars",
        "PostgresSQL",
        "Node.js",
        "Express.js",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
    },
    {
      id: 7,
      name: "Soundify",
      description:
        "Soundify is a platform to search for music on Spotify. JQuery and Spotify' API.",
      link: "",
      class: "color8",
      img: "/soundify.png",
      gitHub: "https://github.com/Lanuitjedanse/soundify",
      stack: ["JQuery", "HTML5", "CSS3"],
    },
    {
      id: 8,
      name: "Connect Four Drag Race",
      description: "Connect four project done with JQuery.",
      link: "",
      class: "color9",
      img: "/dragrace.png",
      gitHub: "https://github.com/Lanuitjedanse/connect-four-drag-race",
      stack: ["JQuery", "HTML5", "CSS3"],
    },
  ];
  return (
    <>
      <div className="box-projects">
        {projectsList &&
          projectsList.map((project) => (
            <div
              className={`${project.class} box-project`}
              key={project.id}
              onMouseEnter={() => toggleIcon(project.id)}
              onMouseLeave={() => toggleIcon(project.id)}
            >
              <h2 className="title-proj">{project.name}</h2>
              {visibilityIcon && project.id === id && (
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className="icon-next fa-lg"
                  onClick={(e) => toggleProject(e, id)}
                />
              )}
            </div>
          ))}
      </div>

      {projectOpen && (
        <Project
          toggleProject={toggleProject}
          name={name}
          description={description}
          img={img}
          link={link}
          gitHub={gitHub}
          stack={stack}
        />
      )}
    </>
  );
}
