import React from 'react';

// Importando estilos
import './TodoCounter.css';

const TodoCounter = ({completedTodos,totalTodos, loading}) => {
    return (  
        <h2 className={`TodoCounter ${loading && 'TodoCounter--loading '}`}>Has completado {completedTodos} de {totalTodos} tareas</h2>
    );
}
 
export {TodoCounter};