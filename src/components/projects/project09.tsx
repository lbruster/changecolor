import React, { useState, useEffect } from "react";
/*
9. Lista de Tareas con LocalStorage
Objetivo del ejercicio: Practicar persistencia de datos con localStorage.
Ejercicio:
Crea una aplicación de lista de tareas.
• Cada tarea debe incluir un texto y un checkbox para marcarla como completada.
• Las tareas se deben guardar en localStorage para que persistan incluso si la página se recarga.
• Debe incluir un botón para limpiar todas las tareas completadas y actualizar el localStorag
*/

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const project09 = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  // Load tasks from localStorage on mount
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to localStorage when they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = () => {
    if (!newTask.trim()) return;
    const task: Task = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  // Toggle task completion
  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Clear completed tasks
  const clearCompleted = () => {
    const activeTasks = tasks.filter((task) => !task.completed);
    setTasks(activeTasks);
    localStorage.setItem("tasks", JSON.stringify(activeTasks));
  };

  return (
    <>
      <section className="projects">
        <div>
          <h1>Project 09</h1>
          <h3>📝 Lista de Tareas con LocalStorage algun dia</h3>
        </div>
      </section>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
        <div className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md">
          <div className="flex mb-4">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-l-xl p-2 focus:outline-none"
              placeholder="Add a new task..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
            />
            <button
              onClick={addTask}
              className="bg-blue-500 text-white px-4 rounded-r-xl hover:bg-blue-600"
            >
              Add
            </button>
          </div>

          <ul className="divide-y divide-gray-200">
            {tasks.length === 0 ? (
              <p className="text-center text-gray-500">No tasks yet</p>
            ) : (
              tasks.map((task) => (
                <li
                  key={task.id}
                  className="flex items-center justify-between py-2"
                >
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                    />
                    <span
                      className={`${
                        task.completed ? "line-through text-gray-400" : ""
                      }`}
                    >
                      {task.text}
                    </span>
                  </label>
                </li>
              ))
            )}
          </ul>

          {tasks.some((task) => task.completed) && (
            <button
              onClick={clearCompleted}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600"
            >
              Clear Completed Tasks
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default project09;
