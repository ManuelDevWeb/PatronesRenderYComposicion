import React from 'react';

// Importando estilos
import './TodoCounter.css';

const TodoCounter = ({completedTodos, totalTodos}) => {
    return (  
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} tareas</h2>
    );
}
 
export {TodoCounter};