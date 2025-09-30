import React from "react";
import { useState } from "react";
/*
8. Contador de Palabras y Caracteres
Objetivo del ejercicio: Practicar eventos en tiempo real y manipulación avanzada del DOM.
Ejercicio:
Crea una página con un campo de texto donde el usuario pueda escribir un párrafo.
• Muestra en tiempo real el número de caracteres y palabras ingresados debajo del campo.
• Palabras deben ser separadas por espacios, y los caracteres no deben incluir espacios ni saltos de
línea.

*/

const project08 = () => {
  const [item, setItem] = useState([] as string[]);
  const predefinedList = ["Perro", "Gato", "Pez", "Loro", "Hamster", "Conejo"];

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm !== "") {
      const filteredItems = predefinedList.filter((item) =>
        item.toLowerCase().includes(searchTerm)
      );
      setItem(filteredItems);
    }
  }

  function searchItem() {
    const searchTerm = (item || []).toString().toLowerCase();
    if (searchTerm !== "") {
      console.log(item);
      const testinginput = document.querySelector(".liveInput");
      console.log(testinginput);
    }
  }
  return (
    <>
      <section className="projects">
        <div>
          <h1>Project 08</h1>
          <p>Contador de Palabras y Caracteres</p>
        </div>
      </section>
      <div className="filter-search">
        <input
          className="liveInput"
          type="text"
          //value={searchIteam}
          onChange={handleSearch}
          placeholder="Add a new task..."
        />
        <button className="add-button" onClick={searchItem}>
          Search
        </button>
      </div>
      <h3>Results:</h3>
      <ul className="livesearch-results">
        {item.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default project08;
