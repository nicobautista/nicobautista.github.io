import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function SoftwareSkill(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.skillName}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.skillName}</strong>
                  </Tooltip>
                }
              >
                <li className="software-skill-inline" name={logo.skillName}>
                  {getSoftwareSkillLogo(logo)}
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function getSoftwareSkillLogo(logo_data) {
  var logoElement;
  if (logo_data.image_path) {
    logoElement = (
      <img
        className="software_skill_image"
        src={require(`../../assests/images/${logo_data["image_path"]}`)}
        alt=""
      />
    );
  } else {
    logoElement = (
      <span
        className="iconify"
        data-icon={logo_data.fontAwesomeClassname}
        style={logo_data.style}
        data-inline="false"
      ></span>
    );
  }
  return logoElement;
}

export default SoftwareSkill;
