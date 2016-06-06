import React from "react";

export default class Skills extends React.Component {
  render() {

    return (
      <section class="text-center top-150 row">
        <h3>SKILLS</h3>
        <div class="col-md-6 col-md-offset-3">
          <table id="skills-graph">
            <tbody>
              <tr id="asp">
                <th scope="row">ASP.NET</th>
                <td class="bar" style={{ height: 180 }}></td>
              </tr>
              <tr id="javascript">
                <th scope="row">JavaScript</th>
                <td class="bar" style={{ height: 160 }}></td>
              </tr>
              <tr id="css">
                <th scope="row">CSS</th>
                <td class="bar" style={{ height: 150 }}></td>
              </tr>
              <tr id="html">
                <th scope="row">HTML</th>
                <td class="bar" style={{ height: 175 }}></td>
              </tr>
              <tr id="sql">
                <th scope="row">SQL</th>
                <td class="bar" style={{ height: 140 }}></td>
              </tr>
              <tr id="react">
                <th scope="row">React</th>
                <td class="bar" style={{ height: 75 }}></td>
              </tr>
            </tbody>
          </table>

          <div id="ticks">
            <div class="tick"><p>Savage</p></div>
            <div class="tick"><p>Expert</p></div>
            <div class="tick"><p>Pretty Good</p></div>
            <div class="tick"><p>Experienced</p></div>
            <div class="tick"><p>Beginner</p></div>
          </div>
        </div>
      </section>
    );
  }
}
