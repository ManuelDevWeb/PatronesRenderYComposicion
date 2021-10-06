import React, { useContext, useState } from "react";

// Importando contexto
import { TodoContext } from "../../TodoContext";

// Importando estilos
import "./TodoForm.css";

const TodoForm = () => {
  // Manejando estado del valor ingresado en el area
  const [newTodoValue, setNewTodoValue] = useState("");

  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onChangeArea = (e) => {
    setNewTodoValue(e.target.value);
  };

  // Método para el boton de cancelar
  const onCancel = () => {
    setOpenModal(false);
  };

  // Método para cuando hagamos submit al formulario
  const onAdd = (e) => {
    e.preventDefault();
    // Validando que no este vacio
    if(newTodoValue.length <= 0){
        return;
    } 
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onAdd}>
      <label>Ingresa una nueva tarea 😀</label>
      <textarea
        value={newTodoValue}
        onChange={onChangeArea}
        placeholder="Comprar cervezas"
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button-add">
          Agregar
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
