import React from "react";
import { useState } from "react";

const colors = ["red", "blue", "green", "yellow", "black", "white"];

const Project01 = () => {
  const [bgcolor, setBG] = useState<string>("white");
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
  /* 1. Cambiador de Color de Fondo Objetivo del ejercicio: Practicar
        eventos en JavaScript y manipulación de estilos del DOM. Ejercicio: Crea
        una página web con un botón que diga "Cambiar color". Cada vez que el
        usuario haga clic en el botón, el color de fondo de la página debe
        cambiar a un color aleatorio. */
  return (
    <>
      <section className="projects">
        <div>
          <h1>Project 01 </h1>
          <p>Cambiador de Color de Fondo</p>
        </div>

        <div className="card">
          <p>Here use the buttons to change the logo background colors</p>
          <button onClick={changeBG}>Change BG Color</button>
        </div>
      </section>
    </>
  );
};

export default Project01;
