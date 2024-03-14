import React from 'react';

const Seleccionador = () => {
    const opcionesSeleccionador = [5, 10, 15, 20];

    return (
        <div className='container-seleccionador'>
            <select className='seleccionador'>
                {opcionesSeleccionador.map((opcion) => (
                    <option key={opcion} value={opcion} >{opcion} </option>                    
                ))}
                
            </select>
        </div>
    );
}

export default Seleccionador;
