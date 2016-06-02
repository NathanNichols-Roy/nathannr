import React from "react";

export default class Nav extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Nathan Nichols-Roy</a>
          <ul class="nav navbar-nav navbar-right">
            <li><a class="active" href="/">Contact Me</a></li>
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
