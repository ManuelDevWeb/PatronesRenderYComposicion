import React from "react";

// Importando componentes
import { TodoItem } from "../TodoItem/TodoItem";

// Importando estilos
import './TodoList.css';

const TodoList = ({ arrayTodos }) => {
  return (
    <section>
      <ul>
        {
          // Mapeando el array de TODOS
          arrayTodos.map((item) => (
            <TodoItem key={item.text} {...item} />
          ))
        }
      </ul>
    </section>
  );
};

export { TodoList };
