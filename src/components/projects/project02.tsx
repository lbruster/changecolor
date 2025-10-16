import { useState } from "react";

const Project02 = () => {
  const [count, setCount] = useState<number>(0);

  const incrementar = () => {
    setCount(count + 1);
  };
  return (
    /*
     2 Contador de Clics
  Objetivo del ejercicio: Practicar el manejo de eventos y la actualización del contenido del DOM.
  Ejercicio:
  Crea una página con un botón que diga "Contar clics" y un texto inicial que muestre "Clics: 0". Cada
  vez que se haga clic en el botón, el texto debe actualizarse para mostrar el número total de clics
  realizados.    
      */
    <>
      <section className="projects">
        <div>
          <h1>Project 02</h1>
          <p>Realiza un conteo de los clicks en un boton</p>
        </div>
        <h1>Contador de Clicks</h1>
        <h2 className="conteo-clicks">{count}</h2>
        <div className="card">
          <p>Here is the default counter</p>
          <button onClick={incrementar}>Contar Clicks {count}</button>
        </div>
      </section>
    </>
  );
};

export default Project02;
