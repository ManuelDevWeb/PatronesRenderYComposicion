import React from "react";

// Importando estilos
import "./TodoList.css";

const TodoList = ({children}) => {
  return (
    <section>
      <ul>
        {children}
      </ul>
    </section>
  );
};

export { TodoList };
