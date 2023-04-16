import React from "react";
import "./ExperienceCard.css";

function ExperienceCard(props) {
  const experience = props.experience;
  const theme = props.theme;
  return (
    <div
      className="experience-card"
      style={{
        border: `2px solid ${experience["color"]}`,
        backgroundColor: theme.imageDark,
      }}
    >
      <div className="experience-card-logo-div">
        <a
          href={experience["company_url"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="experience-card-logo"
            src={require(`../../assests/images/${experience["logo_path"]}`)}
            alt=""
          />
        </a>
      </div>
      <div className="experience-card-body-div">
        <div className="experience-card-header-div">
          <div className="experience-card-heading-left">
            <h3 className="experience-card-title" style={{ color: theme.text }}>
              {experience["title"]}
            </h3>
            <p
              className="experience-card-company"
              style={{ color: theme.secondaryText }}
            >
              <a
                href={experience["company_url"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience["company"]}
              </a>
            </p>
          </div>
          <div className="experience-card-heading-right">
            <p
              className="experience-card-duration"
              style={{ color: theme.secondaryText }}
            >
              {experience["duration"]}
            </p>
            <p
              className="experience-card-location"
              style={{ color: theme.secondaryText }}
            >
              {experience["location"]}
            </p>
          </div>
        </div>
        <div
          className="experience-card-description"
          style={{ color: theme.text }}
        >
          {descriptionList(experience)}
        </div>
      </div>
    </div>
  );
}

function descriptionList(experience_object) {
  if (experience_object["description_items"] === undefined) return;
  var description_entries = [];
  for (var i = 0; i < experience_object["description_items"].length; i++) {
    description_entries.push(
      <li key={i}>{experience_object["description_items"][i]}</li>
    );
  }
  if (experience_object["paper"] !== undefined) {
    description_entries.push(
      <li key={i + 1}>
        Published Paper:{" "}
        <a
          href={experience_object["paper_url"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {experience_object["paper"]}
        </a>
      </li>
    );
  }
  return <ol style={{ listStyle: "disc" }}>{description_entries}</ol>;
}

export default ExperienceCard;
