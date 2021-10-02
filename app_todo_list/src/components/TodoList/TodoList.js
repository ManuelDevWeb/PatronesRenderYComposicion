import React from "react";

// Importando componentes
import { TodoItem } from "../TodoItem/TodoItem";

// Importando estilos
import "./TodoList.css";

const TodoList = ({ arrayTodos, completeTodos, deleteTodos }) => {
  return (
    <section>
      <ul>
        {
          // Mapeando el array de TODOS
          arrayTodos.map((item) => (
            <TodoItem 
              key={item.text} 
              {...item} 
              completeTodos={()=>completeTodos(item.text)}
              deleteTodos={()=>deleteTodos(item.text)}
            />
          ))
        }
      </ul>
    </section>
  );
};

export { TodoList };
