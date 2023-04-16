import React from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
// import { Accordion, Panel } from "baseui/accordion";
import { Fade } from "react-reveal";
// import { DarkTheme, LightTheme, ThemeProvider } from "baseui";

function ExperienceAccordion(props) {
  const theme = props.theme;
  var count = 0;
  return (
    <div className="experience-accord" key="experience-accordion">
      {/* <ThemeProvider key={"theme-provider-experience-accordion"} theme={theme.name === "light" ? LightTheme : DarkTheme}> */}
      {props.sections.map((section) => {
        /* return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
              > */
        return section["experiences"].map((experience) => {
          count += 1;
          return count % 2 === 0 ? (
            <Fade right duration={2000}>
              <ExperienceCard
                experience={experience}
                theme={theme}
                key={count}
              />
            </Fade>
          ) : (
            <Fade left duration={2000}>
              <ExperienceCard
                experience={experience}
                theme={theme}
                key={count}
              />
            </Fade>
          );
        });
        /* </Panel>
            ); */
      })}
      {/* </Accordion> */}
      {/* </ThemeProvider> */}
    </div>
  );
}

export default ExperienceAccordion;
