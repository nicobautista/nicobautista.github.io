import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import { greeting, skills } from "../../portfolio.js";
// import { wantToLearn } from "../../portfolio.js";

function Home(props) {
  return (
    <div>
      <Header
        theme={props.theme}
        setTheme={props.setTheme}
        resumeUrl={greeting.resumeLink}
      />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} text="Here's what I do" skillsList={skills} />
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
