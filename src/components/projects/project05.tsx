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

const Project05 = () => {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] =
    useState<boolean>(false);

  const inputDigit = (digit: string) => {
    if (waitingForSecondOperand) {
      setDisplayValue(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue((prev) => (prev === "0" ? digit : prev + digit));
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplayValue("0.");
      setWaitingForSecondOperand(false);
      return;
    }
    if (!displayValue.includes(".")) {
      setDisplayValue((prev) => prev + ".");
    }
  };

  const performCalculation = (op: string, a: number, b: number) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b === 0 ? NaN : a / b;
      case "%":
        return b === 0 ? NaN : a % b;
      default:
        return b;
    }
  };

  const handleOperator = (nextOperator: string) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation(operator, firstOperand, inputValue);
      setDisplayValue(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const handleEquals = () => {
    if (operator && firstOperand !== null) {
      const result = performCalculation(
        operator,
        firstOperand,
        parseFloat(displayValue)
      );
      setDisplayValue(String(result));
      setFirstOperand(null);
      setOperator(null);
      setWaitingForSecondOperand(false);
    }
  };

  const clearAll = () => {
    setDisplayValue("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handleButtonClick = (value: string) => {
    if (/^[0-9]$/.test(value)) {
      inputDigit(value);
      return;
    }
    if (value === ".") {
      inputDecimal();
      return;
    }
    if (value === "=") {
      handleEquals();
      return;
    }
    if (value === "C") {
      clearAll();
      return;
    }
    if (value === "%") {
      clearAll();
      return;
    }
    // operator
    handleOperator(value);
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
        <input type="text" value={displayValue} readOnly />

        <div className="divrow">
          <div className="divrsp">
            {["7", "8", "9", "/"].map((btn) => (
              <button key={btn} onClick={() => handleButtonClick(btn)}>
                {btn}
              </button>
            ))}
          </div>
          <div className="divrsp">
            {["4", "5", "6", "*"].map((btn) => (
              <button key={btn} onClick={() => handleButtonClick(btn)}>
                {btn}
              </button>
            ))}
          </div>
          <div className="divrsp">
            {["1", "2", "3", "-"].map((btn) => (
              <button key={btn} onClick={() => handleButtonClick(btn)}>
                {btn}
              </button>
            ))}
          </div>
          <div className="divrsp">
            {["0", ".", "=", "+"].map((btn) => (
              <button key={btn} onClick={() => handleButtonClick(btn)}>
                {btn}
              </button>
            ))}
          </div>
          <div className="divrsp calc2btns">
            {["C", "%"].map((btn) => (
              <button key={btn} onClick={() => handleButtonClick(btn)}>
                {btn}
              </button>
            ))}
            {/* <button onClick={() => handleButtonClick("C")}>C</button>
            <button onClick={() => handleButtonClick("%")}>%</button> */}
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default Project05;
