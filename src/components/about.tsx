import React from "react";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p style={{ textAlign: "left", width: "55%", margin: "0 auto" }}>
        The goal of these exercises is to give you practical experience through
        small, achievable projects. Each task builds on your prior knowledge
        while encouraging experimentation and creativity. Whether it’s
        interacting with the DOM, handling events, or managing data storage,
        you'll gain confidence as you progress.
      </p>
      <h2>How to Get Started</h2>
      <ol style={{ textAlign: "left", width: "55%", margin: "0 auto" }}>
        <li>Read the instructions carefully.</li>
        <li>Choose an exercise from the projects menu dropdown.</li>
        <li>Each page will have their own Dark Theme.</li>
        <li>Test each solution.</li>
      </ol>
      <p style={{ textAlign: "left", width: "55%", margin: "0 auto" }}>
        Dive in, experiment, and enjoy the process of bringing your code to
        life! This portal serves as your interactive playground for mastering
        fundamental JavaScript concepts.
      </p>
    </div>
  );
};

export default About;
