import "./App.css";
import Header from "./Header";
import Projects from "./Projects";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    axios.get("/projects.JSON").then((res) => {
      console.log(res.data);
      setAllProjects(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Projects allProjects={allProjects} />
    </div>
  );
}

export default App;
