import React from 'react';

const Seleccionador = () => {

    return (
        <div className='container-seleccionador'>
            <select className='seleccionador'>
                <option value={5} >5</option>
                <option value={10} >10</option>
                <option value={15} >15</option>
                <option value={20} >20</option>
            </select>
        </div>
    );
}

export default Seleccionador;
