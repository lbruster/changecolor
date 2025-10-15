import React, { useState } from "react";
import type { ChangeEvent } from "react";
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
  const [text, setText] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(e.target.value);
  };
  // Count words (split by spaces, ignoring empty ones)
  const wordCount: number =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  // Count characters (ignore spaces and line breaks)
  const charCount: number = text.replace(/\s+/g, "").length;

  /* const [item, setItem] = useState([] as string[]);
  const predefinedList = [""];

  function handleType(event: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm !== "") {
      const filteredItems = searchTerm.length;
      /* setItem(filteredItems.toString); 
      return filteredItems;
    }
  } */

  /* function searchItem() {
    const searchTerm = (item || []).toString().toLowerCase();
    if (searchTerm !== "") {
      console.log(item);
      const testinginput = document.querySelector(".liveInput");
      console.log(testinginput);
    }
  } */
  return (
    <>
      <section className="projects">
        <div>
          <h1>Project 08</h1>
          <h3>Contador de Palabras y Caracteres</h3>
        </div>
      </section>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
        <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-lg">
          <textarea
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            rows={6}
            placeholder="Type your paragraph here..."
            value={text}
            onChange={handleChange}
          />

          <div className="mt-4 flex justify-between text-gray-700 font-medium">
            <p>Palabras: {wordCount}</p>
            <p>Caracteres (sin spacios): {charCount}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default project08;
