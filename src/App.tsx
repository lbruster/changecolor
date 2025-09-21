import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const colors = ["red", "blue", "green", "yellow", "black", "white"];

function App() {
  const [color, setColor] = useState("white");
  const [count, setCount] = useState(0);
  const [bgcolor, setBG] = useState(0);
  const origFontStyle = document.body.style.backgroundColor;

  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  };

  const changeBG = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setBG(randomIndex);
    document.body.style.backgroundColor = colors[randomIndex];
  };
  /* const blackExist =() =>{
    const black = colors.filter{( colors ) => colors === 'black'}.length > 0
    return black
  } */

  const incrementar = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div style={{ backgroundColor: color }}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={incrementar}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button onClick={changeColor}>ChangeColor</button>
        <button onClick={changeBG}>ChangeBGColor</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
