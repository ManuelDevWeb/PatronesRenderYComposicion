import React, { useState } from "react";

// Importando componentes
import { AppUI } from "./AppUI";

// Importando custom hooks
import {useLocalStorage} from "./hooks/useLocalStorage";

// Colección de TODOS
// const defaultTodos = [
//   { text: "Carne", completed: true },
//   { text: "Licor", completed: false },
//   { text: "Desechables", completed: true },
// ];

function App() {
  // Llamando el customHook
  const {
    items:todos, 
    saveItemsLocalStorage:saveTodosLocalStorage, 
    loading,
    error
  }=useLocalStorage('TODOS_V1', []);

  // Manejando estado del searchValue
  const [searchValue, setSearchValue] = useState("");

  // Filtrando el array de tareas para filtrar las tareas completadas
  const completedTodos = todos.filter((todo) => todo.completed === true).length;
  // Total de tareas
  const totalTodos = todos.length;

  let searchedTodos = [];

  // Validando que tareas mostrar
  if (!searchValue.length >= 1) {
    // Si el usuario no escribe nada en el input de busqueda mostramos todas las tareas
    searchedTodos = todos;
  } else {
    // Si el usuario escribe algo, filtramos y almacenamos en la nueva variable las tareas encontradas
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  // Controlando las tareas completadas
  const completeTodos = (text) => {
    // Obteniendo la posicion de los text que concuerden
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    // Almacenamos todos los elementos del array toDos y cambiamos el valor del atributo completed de la tarea seleccionada
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodosLocalStorage(newTodos);
  };

  // Controlando las tareas a eliminar
  const deleteTodos = (text) => {
    // Obteniendo la posicion de los text que concuerden
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    // Almacenando todos los elementos del array y eliminando la tarea seleccionada
    const newTodos = [...todos];
    // Eliminando a partir de la posición encontrada, una tarea
    newTodos.splice(todoIndex, 1);
    saveTodosLocalStorage(newTodos);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      arrayTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
    />
  );
}

export default App;
