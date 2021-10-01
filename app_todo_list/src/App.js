import React, { Fragment } from "react";

// Importando componentes
import {TodoCounter} from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { Logo } from "./components/Logo/Logo";

// Colección de TODOS
const arrayTodos = [
  { text: "Carne", completed: false },
  { text: "Licor", completed: false },
  { text: "Desechables", completed: false },
];

function App() {
  return (
    <Fragment>
      <Logo />
      <TodoCounter />
      <TodoSearch />
      <TodoList 
        arrayTodos={arrayTodos} 
      />
      <CreateTodoButton />
    </Fragment>
  );
}

export default App;
