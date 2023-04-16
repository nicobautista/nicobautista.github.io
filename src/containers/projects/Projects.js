import React, { useState } from "react";
import "./Project.css";
import ProjectCard from "../../components/ProjectCard/";

export default function Projects() {
  const [repo] = useState([]);
  var column_count = 3;
  return (
    <div className="main" id="opensource">
      {/* <h1 className="project-title">Open Source Projects</h1> */}
      <div className="repo-cards-div-main">
        {repo.map((v, i) => {
          console.log(v);
          var order = (i + 1) % column_count || column_count;
          return <ProjectCard repo={v} key={v.node.id} props={order} />;
        })}
      </div>
      {/* <a className="resume-btn" href="https://github.com/harikanani">
        More Projects (Github)
      </a> */}
    </div>
  );
}
