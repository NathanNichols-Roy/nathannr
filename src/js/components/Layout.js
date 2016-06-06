import React from "react";

import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div class="container">
          <About />
          <Resume />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}
