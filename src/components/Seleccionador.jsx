import React, { useState } from 'react';
import personas from './Personas';

const Seleccionador = () => {
    return (
        <div className='container-seleccionador'>
            <select className='seleccionador' name="seleccionador">
                <option value="0">Selecciona el número de registros</option>
                {[...Array(personas.lenght).keys()].map((index) => (
                    <option key={index + 1} value={index + 1}>{index + 5} </option>
                ))}
                {[...Array(personas.lenght).keys()].map((index) => (
                    <option key={index + 1} value={index + 1}>{index + 10} </option>
                ))}
                {[...Array(personas.lenght).keys()].map((index) => (
                    <option key={index + 1} value={index + 1}>{index + 15} </option>
                ))}
                {[...Array(personas.lenght).keys()].map((index) => (
                    <option key={index + 1} value={index + 1}>{index + 20} </option>
                ))}
            </select>
        </div>
    );
}

export default Seleccionador;
