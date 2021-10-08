import React from "react";

// Importando estilos
import "./TodoList.css";

const TodoList = ({
  error,
  loading,
  arrayTodos,
  totalTodos,
  searchText,
  onError,
  onLoading,
  onEmptyTodos,
  onEmptySearchResults,
  render,
  children,
}) => {
  // Para trabajar con renderProps o renderFunctions
  const renderPF=children || render;

  return (
    <section className="TodoList-container">
      {error && onError()}

      {loading && new Array(5).fill().map((index) => onLoading(index))}

      {(!loading && !totalTodos) && onEmptyTodos()}

      {(totalTodos && !arrayTodos.length) && onEmptySearchResults(searchText)}

      {/* {arrayTodos.map((item) => render(item))} */}
      {(!loading && !error) && arrayTodos.map((item) => renderPF(item))}
    </section>
  );
};

export { TodoList };
