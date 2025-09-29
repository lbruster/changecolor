import React from "react";
import { useState } from "react";

/*
5. Calculadora Sencilla
Objetivo del ejercicio: Practicar la manipulación de formularios, eventos, y lógica básica de
JavaScript.
Ejercicio:
Crea una página con dos campos de entrada de números y cuatro botones: "Sumar", "Restar",
"Multiplicar", y "Dividir".
● Al hacer clic en cualquiera de los botones, debe mostrarse el resultado de la operación en un
área de texto o debajo de los botones.
● Asegúrate de validar la entrada para evitar errores (por ejemplo, división por cero).

*/
/* function ButtonPanel({ onButtonClick }) {
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div className="button-panel">
      {buttons.map((btn) => (
        <button key={btn} onClick={() => onButtonClick(btn)}>
          {btn}
        </button>
      ))}
    </div>
  );
} */
const Project05 = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  // ... (functions for handling number input, operations, etc.)
  function result() {}

  const [input, setInput] = useState("");
  const handleButtonClick = (value: string) => {
    if (value === "=") {
      // Evaluate the expression
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };
  return (
    <>
      <section className="projects">
        <div>
          <h1>Project 05</h1>
          <p>Calculator of 2 items.</p>
        </div>
      </section>
      <section className="projects-calc">
        <label
          className="livecalc-field"
          /* onChange={handleSearch} */
        >
          {displayValue}
        </label>
        <div className="divrow">
          <div className="divrsp">
            <button>7</button>
          </div>
          <div className="divrsp">
            <button>8</button>
          </div>
          <div className="divrsp">
            <button>9</button>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="divrow">
          <div className="divrsp">
            <button>4</button>
          </div>
          <div>
            <button>5</button>
          </div>
          <div>
            <button>6</button>
          </div>
          <div>
            <button>X</button>
          </div>
          <div>
            <button>/</button>
          </div>
        </div>
        <div className="divrow">
          <div>
            <button>1</button>
          </div>
          <div>
            <button>2</button>
          </div>
          <div>
            <button>3</button>
          </div>
          <div>
            <button>-</button>
          </div>
          <div></div>
        </div>
        <div className="divrow">
          <div>
            <button>c</button>
          </div>
          <div>
            <button>0</button>
          </div>
          <div>
            <button>.</button>
          </div>
          <div>
            <button>+</button>
          </div>
          <div>
            <button className="equal" onClick={result}>
              =
            </button>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default Project05;
