import React from 'react';

// Importando estilos
import './CreateTodoButton.css';

const CreateTodoButton = ({setOpenModal,openModal}) => {
    // Función que se ejecuta al dar click en el button
    const onClickButton=()=>{
        setOpenModal(!openModal);
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