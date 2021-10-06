import React, { useContext } from "react";

// Importando contexto
import { TodoContext } from "../../TodoContext";

// Importando componentes
import { TodoItem } from "../TodoItem/TodoItem";
import {Error} from "../Error/Error";
import {Loading} from "../Loading/Loading";
import {Empty} from "../Empty/Empty";

// Importando estilos
import "./TodoList.css";

const TodoList = () => {
  const {arrayTodos, completeTodos, deleteTodos, error, loading}=useContext(TodoContext);
  return (
    <section>
      <ul>
        {error && <Error />}
        {loading &&
          new Array(5).fill().map((index) => <Loading key={index} />)}
        {!loading && !arrayTodos.length && <Empty />}
        {
          // Mapeando el array de TODOS
          arrayTodos.map((item) => (
            <TodoItem
              key={item.text}
              {...item}
              completeTodos={() => completeTodos(item.text)}
              deleteTodos={() => deleteTodos(item.text)}
            />
          ))
        }
      </ul>
    </section>
  );
};

export { TodoList };
