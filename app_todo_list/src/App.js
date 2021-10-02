import React, { Fragment, useState } from "react";

// Importando componentes
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { Logo } from "./components/Logo/Logo";

// Colección de TODOS
const defaultTodos = [
  { text: "Carne", completed: true },
  { text: "Licor", completed: false },
  { text: "Desechables", completed: true },
];

function App() {
  // Manejando estado del array de tareas
  const [todos, setTodos] = useState(defaultTodos);
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
    const todoIndex=todos.findIndex(todo=>todo.text===text);
    // Almacenamos todos los elementos del array todos y cambiamos el valor del atributo completed de la tarea seleccionada
    const newTodos=[...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  // Controlando las tareas a eliminar
  const deleteTodos=(text)=>{
    // Obteniendo la posicion de los text que concuerden
    const todoIndex=todos.findIndex(todo=>todo.text===text);
    // Almacenando todos los elementos del array y eliminando la tarea seleccionada
    const newTodos=[...todos];
    // Eliminando a partir de la posición encontrada, una tarea
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }

  return (
    <Fragment>
      <Logo />
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList arrayTodos={searchedTodos} completeTodos={completeTodos} deleteTodos={deleteTodos}/>
      <CreateTodoButton />
    </Fragment>
  );
}

export default App;
