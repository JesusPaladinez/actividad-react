import React, { useState } from 'react';

// Importación de componentes
import Icon from './Icon';

// Importación de librerías
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Tabla = ({ data, eliminacion }) => {

    return (
        <div className="container-tabla">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>DESCRIPCIÓN</th>
                        <th>ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Con el método map() se recorre cada atributo del objeto */}
                    {data.map((fila) => (
                        <tr key={fila.id}>
                            <td>{fila.id} </td>
                            <td>{fila.nombre} </td>
                            <td>{fila.descripcion} </td>
                            <td>
                                <button onClick={() => eliminacion(fila.id)} >
                                    <Icon faStyle='boton' icon={faTrash} >Eliminar</Icon>
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
