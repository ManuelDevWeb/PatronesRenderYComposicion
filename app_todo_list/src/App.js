import React,{Fragment} from "react";

// Importando custom hook useTodos
import { useTodos } from "./hooks/useTodos";

// Importando componentes
import { Header } from "./components/Header/Header";
import { Logo } from "./components/Logo/Logo";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { Modal } from "./components/Modal/Modal";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoItem } from "./components/TodoItem/TodoItem";
import {Error} from "./components/Error/Error";
import {Loading} from "./components/Loading/Loading";
import {Empty} from "./components/Empty/Empty";

function App() {
  const {
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    openModal,
    setOpenModal,
    loading,
    error,
    addTodo,
    arrayTodos,
    completeTodos,
    deleteTodos,
  } = useTodos();

  return (
    <Fragment>
      <Header>
        <Logo />
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </Header>

      <TodoList>
        {error && <Error />}
        {loading &&
          new Array(5).fill().map((index) => <Loading key={index} />)}
        {!loading && !arrayTodos.length && <Empty />}

        {
          // Mapeando el array de TODOS
          arrayTodos.map((item) => (
            <TodoItem
              key={item.text}
              text={item.text}
              completed={item.completed}
              completeTodos={() => completeTodos(item.text)}
              deleteTodos={() => deleteTodos(item.text)}
            />
          ))
        }
      </TodoList>

      {
        // Validando que open modal sea verdadero
        openModal ? (
          <Modal>
            <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
          </Modal>
        ) : null
      }

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
    </Fragment>
  );
}

export default App;
