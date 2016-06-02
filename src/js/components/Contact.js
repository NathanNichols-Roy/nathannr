import React from "react";

export default class Contact extends React.Component
{
  render() {
    return (
      <section>
        Your email:
        <input />
        Message:
        <input />
        <button class="btn btn-default">Send</button>
      </section>
    );
  }
}
