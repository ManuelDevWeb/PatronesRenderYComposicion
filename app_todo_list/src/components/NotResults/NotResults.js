import React from 'react';

// Importando estilos
import './NotResults.css';

const NotResults = ({searchText}) => {
    return ( 
        <p className="NotResultsMessage">No hay resultados para <span>{searchText}</span></p>
    );
}
 
export {NotResults};