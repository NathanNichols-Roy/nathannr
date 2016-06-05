import React from "react";

export default class Contact extends React.Component
{
  render() {
    return (
      <div class="contact top-150">
        <form class="contact-form col-md-6 col-md-offset-3"
          action="https://formspree.io/n.nicholsroy@gmail.com" method="POST">
          <h2>Contact me</h2>
          <div class="col-sm-6">
            Your name
            <input class="form-control" name="name"></input>
          </div>
          <div class="col-sm-6">
            Your email
            <input class="form-control" name="email"></input>
          </div>
          <div class="col-sm-12 top-20">
            Message
            <textarea class="form-control" rows="5" name="message"></textarea>
          </div>
          <button type="submit" value="Send" class="btn btn-default top-20">
            Send Message
          </button>
        </form>
      </div>
    );
  }
}
