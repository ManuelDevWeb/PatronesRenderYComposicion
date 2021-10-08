import React, { Fragment } from "react";

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
import { Error } from "./components/Error/Error";
import { Loading } from "./components/Loading/Loading";
import { Empty } from "./components/Empty/Empty";
import { NotResults } from "./components/NotResults/NotResults";
import { ChangeAlertWithStorageListener } from "./components/ChangeAlert/ChangeAlert";

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
    sincronizeTodos
  } = useTodos();

  return (
    <Fragment>
      <Logo />
      <Header
        // Pasamos propiedad loading a todos los children del header
        loading={loading}
      >
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          //loading={loading}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          //loading={loading}
        />
      </Header>

      <TodoList
        error={error}
        loading={loading}
        arrayTodos={arrayTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        // Render props
        /* 
          Cada que se cumpla una condición que ejecuta la función en el TodoList, este nos devuelve la información
          del componente mediante la misma función.
         */
        onError={() => <Error />}
        onLoading={(index) => <Loading key={index} />}
        onEmptyTodos={() => <Empty />}
        onEmptySearchResults={(searchText) => (
          <NotResults searchText={searchText} />
        )}
        // render={(item) => (
        //   <TodoItem
        //     key={item.text}
        //     text={item.text}
        //     completed={item.completed}
        //     completeTodos={() => completeTodos(item.text)}
        //     deleteTodos={() => deleteTodos(item.text)}
        //   />
        // )}
      >
        {
          // Render function, equivalente al render enviado al TodoList. Llamamos a children en vez de a render
          (item) => (
            <TodoItem
              key={item.text}
              text={item.text}
              completed={item.completed}
              onComplete={() => completeTodos(item.text)}
              onDelete={() => deleteTodos(item.text)}
            />
          )
        }
      </TodoList>

      {/* <TodoList>
        { && <Error />}
        {loading &&
          new Array(5).fill().map((index) => <Loading key={index} />)}
        {!loading && !arrayTodos.length && <Empty />}

        {
          // Mapeando el array de TODOS
          arrayTodos.map((item) => (
            
          ))
        }
      </TodoList> */}

      {
        // Validando que open modal sea verdadero
        openModal ? (
          <Modal>
            <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
          </Modal>
        ) : null
      }

      <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />

      <ChangeAlertWithStorageListener sincronize={sincronizeTodos}/>
    </Fragment>
  );
}

export default App;
