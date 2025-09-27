import React, { useState, useEffect, useRef } from "react";

const project06 = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      if (intervalIdRef.current !== null) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    console.log(startTimeRef.current);
  }
  function stop() {
    setIsRunning(false);
  }
  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }
  function formatTime() {
    let hoursnum = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutesnum = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let secondsnum = Math.floor((elapsedTime / 1000) % 60);
    let millisecondsnum = Math.floor((elapsedTime % 1000) / 10);

    const hours = String(hoursnum).padStart(2, "0");
    const minutes = String(minutesnum).padStart(2, "0");
    const seconds = String(secondsnum).padStart(2, "0");
    const milliseconds = String(millisecondsnum).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <>
      <section className="projects">
        <div>
          <h1>Project 06</h1>
          <p>Learn more about us here.</p>
        </div>
      </section>
      <div className="stopwatch-wrapper">
        <div className="stopwatch">
          <div className="display">{formatTime()}</div>
          <div>
            <button onClick={start} className="start-button">
              Start
            </button>
            <button onClick={stop} className="stop-button">
              Stop
            </button>
            <button onClick={reset} className="reset-button">
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
    /*
    6. Temporizador con Inicio, Pausa y Reinicio
Objetivo del ejercicio: Practicar manejo de eventos, funciones de temporización y manipulación del
DOM.
Ejercicio:
Crea una página con un temporizador que comience en 00:00:00. Incluye tres botones: “Iniciar”, “Pausar”
y “Reiniciar”.
• Al hacer clic en “ “Iniciar”, el temporizador debe comenzar a contar los segundos, minutos y horas.
• “Pausar” detiene el conteo pero mantiene el tiempo actual.
• “Reiniciar” pone el temporizador en 00:00:00.
    */
  );
};

export default project06;
