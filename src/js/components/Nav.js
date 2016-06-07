import React from "react";
import Scroll from "react-scroll";

const Link = Scroll.Link;
const scroll = Scroll.animateScroll;

export default class Nav extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" onClick={() => scroll.scrollToTop()}>
            Nathan Nichols-Roy
          </a>
          <ul class="nav navbar-nav navbar-right">
            <li><Link activeClass="active" to="contactForm" spy={true}
              smooth={true} duration={900}>Contact Me</Link>
            </li>
            <li>
              <a class="active"
                href="https://www.linkedin.com/in/nathan-nichols-roy-29132494 ">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
