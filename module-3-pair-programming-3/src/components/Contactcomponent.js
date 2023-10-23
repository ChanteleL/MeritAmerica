import React from "react";
import "../contact.css";

export default function Contact() {
  return (
    <div id="contact-form">
        <h2>Contact Us</h2>
        <form action="" method="post">
          <label for="name">Name:</label>
          <br />
          <input type="text" id="name" name="name" />
          <br />
          <label for="source">How did you hear of us?</label>
          <br />
          <select id="source" name="source" >
            <option value="popscile-monthly">Popscile Monthly</option>
            <option value="gelatos">Gelatos</option>
            <option value="Sherberts">Sherberts</option>
            <option value="Ice-cream">Ice Cream</option>
          </select>
          <br />
          <label for="color">What color is your favorite popscile?</label>
          <br />
          <input
            type="color"
            name="color"
            value="#00afef"
            id="color"
            width="100%"
          />
          <br />
          <label for="comments">
            Please let us know any comments you have:
          </label>
          <br />
          <textarea
            id="comments"
            name="comments"
            rows="13"
            colums="60"
          ></textarea>
          <br />
          <input type="submit" value="Submit" className="submit" />
        </form>
    </div>
  );
}
