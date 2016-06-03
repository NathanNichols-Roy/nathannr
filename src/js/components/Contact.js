import React from "react";

export default class Contact extends React.Component
{
  render() {
    return (
      <section class="contact top-150">
        <form>
          <h2>Contact me</h2>
          <div class="col-sm-6">
            Your name
            <input class="form-control"></input>
          </div>
          <div class="col-sm-6">
            Your email
            <input class="form-control"></input>
          </div>
          <div class="col-sm-12 top-20">
            Message
            <textarea class="form-control" rows="5"></textarea>
          </div>
          <button class="btn btn-default top-20">Send Message</button>
        </form>
      </section>
    );
  }
}
