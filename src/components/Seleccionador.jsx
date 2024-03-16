import React, { useState } from 'react';

const Seleccionador = ({ onChange }) => {
    const handleOnChange = (e) => {
        onChange(parseInt(e.target.value)); // Actualiza el estado del tamaño de la tabla con el valor seleccionado en el select
    };

    return (
        <div className='container-seleccionador'>
            <select className='seleccionador' onChange={handleOnChange} >
                <option value={5} >5</option>
                <option value={10} >10</option>
                <option value={15} >15</option>
                <option value={20} >20</option>
            </select>
        </div>
    );
}

export default Seleccionador;
