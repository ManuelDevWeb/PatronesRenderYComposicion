import React, { createContext, useState } from "react";

// Importando custom hooks
import {useLocalStorage} from "./hooks/useLocalStorage";

// Creando el contexto de la aplicación
const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  // Llamando el customHook
  const {
    items: todos,
    saveItemsLocalStorage: saveTodosLocalStorage,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  // Manejando estado del modal
  const [openModal, setOpenModal]=useState(false);

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

  // Guardando tareas en el array
  const addTodo=(text)=>{
    const newTodos=[...todos];
    // Insertando la nueva tarea en el array
    newTodos.push({
      text,
      completed:false
    });
    saveTodosLocalStorage(newTodos);
  }

  return (
    // Envolviendo nuestra aplicación para que puedar utilizar el Context
    <TodoContext.Provider value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        addTodo,
        arrayTodos: searchedTodos,
        completeTodos,
        deleteTodos,
        openModal, 
        setOpenModal,
    }}>
        {children}
    </TodoContext.Provider>
  );
};

export {TodoContext, TodoProvider};
