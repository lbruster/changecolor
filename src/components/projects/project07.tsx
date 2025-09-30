import { useState } from "react";
/*    
7. Generador de Contraseñas Aleatorias
Objetivo del ejercicio: Practicar generación de cadenas aleatorias y uso de formularios.
Ejercicio:
Crea una página con un campo de entrada para especificar la longitud de una contraseña y un botón que
diga “Generar contraseña”.
• Al hacer clic en el botón, se debe mostrar una contraseña generada aleatoriamente usando
letras, números y caracteres especiales.
• Si la longitud es menor a 4 o el campo está vacío, muestra un mensaje de error indicando que la
longitud debe ser mayor o igual a 4.


*/

const project07 = () => {
  const [displayValue, setDisplayValue] = useState<string>("0");

  const generatePassword = (): string => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    const length = 16;
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);

    return Array.from(array)
      .map((x) => charset[x % charset.length])
      .join("");
  };
  const handleGenerate = () => {
    setDisplayValue(generatePassword());
  };
  return (
    <>
      <section className="projects">
        <div>
          <h1>Project 07</h1>
          <p>Generador de Contraseñas Aleatorias</p>
        </div>
      </section>
      <section className="projects-password">
        <input type="text" value={displayValue} readOnly />

        <div className="divrow">
          <div className="divrsp">
            <button onClick={() => handleGenerate()}>Generate</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default project07;
