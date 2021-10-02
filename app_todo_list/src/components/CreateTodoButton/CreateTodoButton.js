import React from 'react';

// Importando estilos
import './CreateTodoButton.css';

const CreateTodoButton = () => {
    // Función que se ejecuta al dar click en el button
    const onClickButton=()=>{
        alert('Felicidades se ejecuto la función')
    }


    return (  
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
        >
        +</button>
    );
}
 
export {CreateTodoButton};