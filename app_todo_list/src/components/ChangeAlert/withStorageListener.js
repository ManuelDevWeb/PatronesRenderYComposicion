import React, { useState } from "react";

function withStorageListener(WrappedComponent) {
  // Devolviendo un componente de React
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener('storage', (change)=>{
        // Validando que hubo cambios en el item TODOS_V1
        if(change.key === 'TODOS_V1'){
            console.log('Hubo cambios en TODOS_V1');
            setStorageChange(true);
        }
    });

    // Función que permite recargar información
    const toggleShow=()=>{
        props.sincronize();
        setStorageChange(false);
    }

    return (
      <WrappedComponent show={storageChange} toggleShow={toggleShow} />
    );
  };
};

export { withStorageListener };
