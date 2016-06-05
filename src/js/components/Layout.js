import React from "react";

import Header from "./Header";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div class="container">
          <About />
          <Resume />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}
