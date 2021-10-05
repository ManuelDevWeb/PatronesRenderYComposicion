import React, { Fragment } from "react";

// Importando componentes
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { Logo } from "./components/Logo/Logo";

const AppUI = ({completedTodos, totalTodos, searchValue, arrayTodos, setSearchValue, completeTodos, deleteTodos, error, loading}) => {
  return (
    <Fragment>
      <Logo />
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList
        arrayTodos={arrayTodos}
        completeTodos={completeTodos}
        deleteTodos={deleteTodos}
        error={error}
        loading={loading}
      />
      <CreateTodoButton />
    </Fragment>
  );
};

export { AppUI };
