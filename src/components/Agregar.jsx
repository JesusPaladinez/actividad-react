import React from 'react';

const Agregar = ({estadoModal, setEstadoModal}) => {
    return (
        <div className='agregar'>
            <input className='input-agregar' type="submit" value='Agregar' onClick={() => setEstadoModal(!estadoModal)}/>
        </div>
    );
}

export default Agregar;
