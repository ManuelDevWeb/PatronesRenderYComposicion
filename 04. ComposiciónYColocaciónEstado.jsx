import React, { Fragment, useState } from "react";

// De esta manera evitamos que pasar estados entre muchos componentes (abuelo-nieto) etc..
function App() {
  const [state, setState] = useState("Estado compartido");

  return (
    <Fragment>
      <TodoHeader>
          <TodoCounter />
          <TodoSearch />
      </TodoHeader>
      <TodoList>
          <TodoItem state={state}/>
      </TodoList>
    </Fragment>
  );
}

function TodoHeader({children}) {
  return (
    <header>
      {children}
    </header>
  );
}

function TodoList({children}) {
  return (
    <section className="TodoList-container">
      {children}
    </section>
  );
}

function TodoCounter() {
  return <p>TodoCounter</p>;
}

function TodoSearch() {
  return <p>TodoSearch</p>;
}

function TodoItem({state}) {
  return <p>TodoItem: {state}</p>;
}

export default App;
