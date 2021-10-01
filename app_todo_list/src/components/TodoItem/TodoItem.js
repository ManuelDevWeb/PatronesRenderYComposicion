import React from "react";

// Importando estilos
import "./TodoItem.css";

const TodoItem = ({ text, completed }) => {
  return (
    <li className="TodoItem">
      {/* Si completo es true, agregamos la clase de css */}
      <span className={`Icon Icon-check ${completed && "Icon-check--active"}`}>
        ✔
      </span>
      {/* Si completo es true, agregamos la clase de css */}
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete">X</span>
    </li>
  );
};

export { TodoItem };
