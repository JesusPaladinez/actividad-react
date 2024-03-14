import React from 'react';

const Total = ({registrosSeleccionados, totalRegistros}) => {
    return (
        <div className='container-total'>
            <h2>Seleccionó {registrosSeleccionados} de {totalRegistros} registros</h2>
        </div>
    );
}

export default Total;
