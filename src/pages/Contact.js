import React from "react";

export default function Contact() {
  return (
    <div className="contentBody">
      <h2>Contact</h2>

      <form
        action="mailto: serina_4695@hotmail.co.uk"
        method="post"
        enctype="text/plain"
      >
        <div class="group">
          <label for="input-name" class="label">
            Name:{" "}
          </label>
          <input id="input-name" name="name" class="input" />
        </div>

        <div class="group">
          <label for="input-email" class="label">
            Email:{" "}
          </label>
          <input
            id="input-email"
            name="email"
            class="input"
            placeholder="test@email.com"
          />
        </div>

        <div class="group">
          <label for="input-message" class="label">
            Message:{" "}
          </label>
          <textarea id="input-message" name="message" class="input"></textarea>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
