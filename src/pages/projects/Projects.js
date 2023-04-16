import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";
import { projectsHeader, projects } from "../../portfolio.js";
import "./Projects.css";
import { Masonry } from "@mui/lab";
import ProjectsImg from "./ProjectsImg";
// import { style } from "glamor";

function Projects(props) {
  const theme = props.theme;
  const column_count = 3;
  //   const styles = style({
  //     backgroundColor: `${theme.accentBright}`,
  //     ":hover": {
  //       boxShadow: `0 5px 15px ${theme.accentBright}`,
  //     },
  //   });

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <div className="masonry-container">
        <Masonry columns={2} spacing={2} className="repo-cards-div-main">
          {projects.data.map((repo, i) => {
            var order = (i + 1) % column_count || column_count;
            return (
              <ProjectCard
                repo={repo}
                theme={theme}
                order={order}
                key={i}
                className="masonry-project-card"
              />
            );
          })}
        </Masonry>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Projects;
