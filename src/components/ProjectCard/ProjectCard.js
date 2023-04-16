import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";
import { ExpandMoreRounded, ExpandLessRounded } from "@material-ui/icons";
import Carousel from "react-bootstrap/Carousel";
import ModdedVideoPlayer from "../ModdedVideoPlayer/ModdedVideoPlayer";

function getCarouselItem(theme, elementType, elementSrc, elementAlt = "") {
  let mediaElement;
  if (elementType === "img") {
    mediaElement = (
      <img
        src={require(`../../assests/images/${elementSrc}`)}
        width="90%"
        height="auto"
        alt={elementAlt}
      />
    );
  } else if (elementType === "vid") {
    mediaElement = <ModdedVideoPlayer elementSrc={elementSrc} theme={theme} />;
  }
  return mediaElement;
}

function getRepoDescription(repo_description, text_color) {
  if (repo_description === undefined) return;
  if (!repo_description.includes("{")) {
    return (
      <p className="repo-description" style={{ color: text_color }}>
        {repo_description}
      </p>
    );
  } else {
    var link_content = repo_description.split("{")[1].split("}")[0];
    return (
      <p className="repo-description" style={{ color: text_color }}>
        {repo_description.split("{")[0]}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={link_content.split("][")[1].split("]")[0]}
        >
          {link_content.split("][")[0].split("[")[1]}
        </a>
        {repo_description.split("}")[1]}
      </p>
    );
  }
}

export default function ProjectCard({ repo, theme, order }) {
  const [open, setOpen] = useState(false);
  const projectHasMedia = repo.media.length > 0;
  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    borderStyle: "solid",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "5px",
    height: "auto",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });
  const expandableStyles = style({
    color: "rgb(88, 96, 105)",
    borderStyle: "solid",
    cursor: "pointer",
    borderRadius: "5px",
    height: "auto",
    paddingBottom: "10px",
    marginTop: "-10px",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });
  const carouselTheme = theme.name === "light" ? "dark" : "";
  return (
    <div
      className="project-card-container"
      style={{ marginBottom: "10px", order: order }}
    >
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={repo.id}
          style={{ backgroundColor: theme.projectCard }}
          className="project-card-container-inner"
        >
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          {getRepoDescription(repo.description, theme.text)}
          {/* <div className="flexDiv"> */}
          {projectHasMedia ? (
            <div
              className="repo-details Rightitem"
              onClick={() => setOpen(!open)}
            >
              <div className="expand-icon-wrapper">
                {open ? (
                  <ExpandLessRounded fontSize="large" />
                ) : (
                  <ExpandMoreRounded fontSize="large" />
                )}
                {""}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Fade>
      {projectHasMedia && open && (
        <div
          {...expandableStyles}
          className="expandableProjectCard"
          style={{ backgroundColor: theme.projectCard }}
        >
          <div style={{ marginTop: "20px" }}>
            <Carousel
              interval={null}
              variant={carouselTheme}
              className="projects-carousel"
            >
              {repo.media.map((singleMedia, i) => {
                return (
                  <Carousel.Item className="carousel-entry" key={i}>
                    {singleMedia.description ? (
                      <div
                        className="carousel-media-description"
                        style={{ color: theme.text }}
                      >
                        {singleMedia.description}
                      </div>
                    ) : (
                      <></>
                    )}
                    {getCarouselItem(
                      theme,
                      singleMedia.mediaType,
                      singleMedia.img,
                      singleMedia.alt
                    )}
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
}
