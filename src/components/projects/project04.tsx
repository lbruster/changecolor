import React, { useState } from "react";

const About = () => {
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
    /*
        4  Filtro de Búsqueda en Tiempo Real
      Objetivo del ejercicio: Practicar la interacción entre eventos del DOM y lógica en JavaScript.
      Ejercicio:
      Crea una página con un campo de texto y una lista predefinida de elementos.
      ● Mientras el usuario escribe en el campo, la lista debe actualizarse en tiempo real para
      mostrar solo los elementos que contienen el texto escrito.
      Ejemplo: Si la lista contiene ["Perro", "Gato", "Pez"] y el usuario escribe "Ga", solo "Gato" debe
      quedar visible.

      will continue later, missing removing when inputfield is empty
      */
    <>
      <section className="projects">
        <div>
          <h1>Project 04</h1>
          <p>Search in real time.</p>
        </div>
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
      </section>
    </>
  );
};

export default About;
