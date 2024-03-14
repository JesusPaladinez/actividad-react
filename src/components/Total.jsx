import React from 'react';

const Total = ({numRegistros, totalPersonas}) => {
    return (
        <div className='container-total'>
            <h2>Seleccionó {numRegistros} de {totalPersonas} registros</h2>
        </div>
    );
}

export default Total;
