import React from "react";

// Importando estilos
import "./TodoItem.css";

const TodoItem = ({ text, completed, completeTodos, deleteTodos }) => {
  return (
    <li className="TodoItem">
      {/* Si completo es true, agregamos la clase de css */}
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={completeTodos}
      >
        ✔
      </span>
      {/* Si completo es true, agregamos la clase de css */}
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={deleteTodos}>
        X
      </span>
    </li>
  );
};

export { TodoItem };
