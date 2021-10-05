import React, {useContext} from 'react';

// Importando contexto
import { TodoContext } from "../../TodoContext";

// Importando estilos
import './TodoCounter.css';

const TodoCounter = () => {
    const {completedTodos,totalTodos}=useContext(TodoContext);
    return (  
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} tareas</h2>
    );
}
 
export {TodoCounter};