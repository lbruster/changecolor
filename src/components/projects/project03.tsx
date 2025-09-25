import React, { useState } from "react";

/*
3. Lista Dinámica
    Objetivo del ejercicio: Trabajar con la creación, eliminación y manipulación de elementos del DOM.
    Ejercicio:
    Crea una página con un campo de texto, un botón que diga "Agregar", y una lista vacía debajo.
    ● Cuando el usuario escriba un texto y haga clic en "Agregar", el texto debe añadirse como un
    nuevo elemento de la lista.
    ● Añade un botón al lado de cada elemento para eliminarlo de la lista.    
*/
const Project03 = () => {
  // State to hold our list of todos
  const [todos, setTodos] = useState(["eat", "sleep", "code"]);
  const [newTodo, setNewTodo] = useState("");

  function handleInputChange(event) {
    setNewTodo(event.target.value);
  }
  function addTodo() {
    if (newTodo.trim() !== "") {
      setTodos((t) => [...t, newTodo]);
      setNewTodo("");
    }
  }
  function deleteTodo(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  }
  function moveTodoUp(index) {
    if (index > 0) {
      const updatedTodos = [...todos];
      [updatedTodos[index], updatedTodos[index - 1]] = [
        updatedTodos[index - 1],
        updatedTodos[index],
      ];
      setTodos(updatedTodos);
    }
  }
  function moveTodoDown(index) {
    if (index < todos.length - 1) {
      const updatedTodos = [...todos];
      [updatedTodos[index], updatedTodos[index + 1]] = [
        updatedTodos[index + 1],
        updatedTodos[index],
      ];
      setTodos(updatedTodos);
    }
  }

  // Function to toggle the completion status of a todo
  /* const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }; */

  return (
    <>
      <section className="projects">
        <div>
          <h1>Project 03</h1>
          <p>Learn more about us here.</p>
        </div>
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            placeholder="Add a new task..."
          />
          <button className="add-button" onClick={addTodo}>
            Agregar
          </button>
        </div>
        {/* List of todos */}
        <ul>
          <li>Lista</li>
          {todos.map((task, index) => (
            <li
              key={index}
              /* style={{
            textDecoration: todo.isCompleted ? "line-through" : "none",
            }} */
            >
              <span
                className="text"
                //onClick={() => handleToggleComplete(todo.id)}
              >
                {task}
              </span>
              <button
                className="delete-button"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
              <button
                className="moveup-button"
                onClick={() => moveTodoUp(index)}
              >
                UP
              </button>
              <button
                className="movedown-button"
                onClick={() => moveTodoDown(index)}
              >
                Down
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Project03;
