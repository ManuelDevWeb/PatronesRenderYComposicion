import React, { Fragment } from "react";

// Importando componentes
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { Logo } from "./components/Logo/Logo";

const AppUI = () => {
  return (
    <Fragment>
      <Logo />
      <TodoCounter />
      <TodoSearch />
      <TodoList />
      <CreateTodoButton />
    </Fragment>
  );
};

export { AppUI };
