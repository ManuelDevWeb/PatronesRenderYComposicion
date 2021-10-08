import React from "react";

// Importando estilos
import "./TodoItem.css";

const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  return (
    <li className="TodoItem">
      {/* Si completo es true, agregamos la clase de css */}
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        ✔
      </span>
      {/* Si completo es true, agregamos la clase de css */}
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span>
    </li>
  );
};

export { TodoItem };
