import React, { Fragment, useContext } from "react";

// Importando context
import { TodoContext } from "./TodoContext";

// Importando componentes
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";
import { Logo } from "./components/Logo/Logo";
import { Modal } from "./components/Modal/Modal";

const AppUI = () => {
  const {openModal, setOpenModal}=useContext(TodoContext);

  return (
    <Fragment>
      <Logo />
      <TodoCounter />
      <TodoSearch />
      <TodoList />
      {
        // Validando que open modal sea verdadero
        openModal ? (
          <Modal>
            <p>Teletransportación!</p>
          </Modal>
        )
        :
        null
      }
      
      <CreateTodoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </Fragment>
  );
};

export { AppUI };
