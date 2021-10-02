import React from 'react';

// Importando estilos
import './TodoSearch.css';

const TodoSearch = ({searchValue, setSearchValue}) => {
    // Función que se ejecuta al escribir algo en el input
    const onSearchValueChange=(event)=>{
        // console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <input 
            className="TodoSearch" 
            placeholder="Busca una tarea"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };