import React, { useContext } from "react";

// Importando contexto
import { TodoContext } from "../../TodoContext";

// Importando componentes
import { TodoItem } from "../TodoItem/TodoItem";

// Importando estilos
import "./TodoList.css";

const TodoList = () => {
  const {arrayTodos, completeTodos, deleteTodos, error, loading}=useContext(TodoContext);
  return (
    <section>
      <ul>
        {error && <p>Hubo un error 😔</p>}
        {loading && <p>Cargando, no desesperes!</p>}
        {(!loading && !arrayTodos.length) && <p>Crea tu primer TODO</p>}
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
