import React from "react";

// Importando componentes
import { TodoItem } from "../TodoItem/TodoItem";

// Importando estilos
import "./TodoList.css";

const TodoList = ({ arrayTodos, completeTodos, deleteTodos, error, loading }) => {
  return (
    <section>
      <ul>
        {error ? <p>Hubo un error 😔</p> : null}
        {loading ? <p>Cargando, no desesperes!</p> : null}
        {(!loading && !arrayTodos.length) ? <p>Crea tu primer TODO</p> : null}
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
