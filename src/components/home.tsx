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
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
      </div>
      <div style={{ backgroundColor: color }}>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>Here is the default counter</p>
        <button onClick={incrementar}>count is {count}</button>
        <p>Here use the buttons to change the logo background colors</p>
        <button onClick={changeColor}>Change Just Logo Color</button>
        <p>Here use the buttons to change the logo background colors</p>
        <button onClick={changeBG}>Change BG Color</button>
      </div>
    </>
  );
};

export default Home;
