import React from 'react';

const Total = ({numRegistros}) => {
    return (
        <div className='container-total'>
            <h2>Seleccionó {numRegistros} de 20 registros</h2>
        </div>
    );
}

export default Total;
