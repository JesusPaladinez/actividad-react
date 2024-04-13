import React from 'react';

// Importación de componentes
import Icon from './Icon';
import Modal from './Modal';

// Importación de librerías
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';

const Tabla = ({ data, estadoModal, setEstadoModal, setProductoActualizado, eliminacion }) => {

    return (
        <div className="container-tabla">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>CARACTERISTICAS</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Con el método map() se recorre cada atributo del objeto */}
                    {data.map((fila) => (
                        <tr key={fila.id}>
                            <td>{fila.id} </td>
                            <td>{fila.nombre} </td>
                            <td>{fila.caracteristicas} </td>
                            <td className='acciones'>
                                <button onClick={() => setEstadoModal(!estadoModal)} >
                                    <Icon faStyle='boton' icon={faPen} />
                                </button>
                                <button onClick={() => eliminacion(fila.id)} >
                                    <Icon faStyle='boton' icon={faTrash} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Tabla;
