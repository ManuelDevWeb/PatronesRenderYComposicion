import React, { useState } from "react";

// Importando componentes
import { AppUI } from "./AppUI";

// Colección de TODOS
// const defaultTodos = [
//   { text: "Carne", completed: true },
//   { text: "Licor", completed: false },
//   { text: "Desechables", completed: true },
// ];

function App() {
  // Implementando localstorage
  const localStorageTodos=localStorage.getItem('TODOS_V1');
  let todosStorage;

  // Validando si el localstorage es vacio o no
  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    todosStorage=[];
  }else{
    todosStorage=JSON.parse(localStorageTodos);
  }

  // Manejando estado del array de tareas
  const [todos, setTodos] = useState(todosStorage);
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

  // Función para guardar la información en el localStorage
  const saveTodosLocalStorage=(newTodos)=>{
    const stringifiedTodos=JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  }

  // Controlando las tareas completadas
  const completeTodos = (text) => {
    // Obteniendo la posicion de los text que concuerden
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    // Almacenamos todos los elementos del array todos y cambiamos el valor del atributo completed de la tarea seleccionada
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
