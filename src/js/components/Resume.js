import React from "react";

export default class Resume extends React.Component {
  render() {
    return (
      <div class="top-200">
        <h3>Experience</h3>
        <div class="col-xs-4">Web Developer</div>
        <div class="col-xs-4">GoPaperless Solutions</div>
        <div class="col-xs-4">March 2015 - Present</div>
        <div class="col-xs-12">
          <ul>
            <li>Backend (C#) and frontend (JS, HTML, CSS) development within the
              .NET framework.
            </li>
            <li>Improved application scalability by implementing a distrubuted
              processing architecture. Moved document processing from web
              servers to application servers.
            </li>
            <li>Created stored procedures in Microsoft's SQL server to access
              and manipulate large system databases.
            </li>
            <li>Followed SCRUM agile development framework.</li>
            <li>Participated in peer code reviews.</li>
          </ul>
        </div>
        <div class="col-xs-4">Santa Cruz, California</div>
        <div class="col-xs-4">University of California Santa Cruz</div>
        <div class="col-xs-4">Fall 2010 - Fall 2014</div>
        <div class="col-xs-12">
          <ul>
            <li>B.S. in Computer Science. GPA: 3.4</li>
          </ul>
        </div>
      </div>
    );
  }
}
