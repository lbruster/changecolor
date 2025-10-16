import React from "react";
import { useState } from "react";
import reactLogo from "../assets/react.svg";

const colors = ["red", "blue", "green", "yellow", "black", "white"];

const Home = () => {
  const [color, setColor] = useState<string>("white");
  const [count, setCount] = useState<number>(0);
  const [bgcolor, setBG] = useState<string>("white");

  // avoid reading/modifying body style directly during render

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  const changeBG = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBG(randomColor);
  };

  React.useEffect(() => {
    document.body.style.backgroundColor = bgcolor;
    return () => {
      // optional: cleanup not strictly necessary here
    };
  }, [bgcolor]);

  const incrementar = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h1>Welcome to Your Interactive JavaScript Exercises Hub</h1>
        <p>
          Our collection of exercises is designed to reinforce and expand your
          JavaScript skills through hands-on practice. Each activity is a small,
          self-contained challenge that lets you apply what you've learned in a
          practical, engaging way. Here's what you can explore:
        </p>
      </div>
      {/* <div style={{ backgroundColor: color }}>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h2>Core Exercises</h2>
      <div className="card">
        {/* <p>Here is the default counter</p>
        <button onClick={incrementar}>count is {count}</button>
        <p>Here use the buttons to change the logo background colors</p>
        <button onClick={changeColor}>Change Just Logo Color</button>
        <p>Here use the buttons to change the logo background colors</p>
        <button onClick={changeBG}>Change BG Color</button> */}
        <ul style={{ textAlign: "left" }}>
          <li>
            {" "}
            <span style={{ fontWeight: 700 }}>Color Changer</span> – Experiment
            with dynamic background color changes.
          </li>
          <li>
            {" "}
            Click Counter – Track user interaction with real-time click
            counting.
          </li>
          <li>
            {" "}
            Dynamic List – Learn to manipulate lists and DOM elements
            dynamically.
          </li>
          <li> Live Search Filter – Filter items instantly as you type. </li>
          <li>
            {" "}
            Simple Calculator – Practice form handling and arithmetic logic.
          </li>
          <li>
            {" "}
            Timer with Start, Pause, Reset – Control time-based activities
            programmatically.
          </li>
          <li>
            {" "}
            Random Password Generator – Create secure passwords on the fly.
          </li>
          <li> Word and Character Counter – Analyze text input for counts.</li>
          <li>
            {" "}
            To-Do List with LocalStorage – Save and manage tasks persistently.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
