import React from 'react';

const Tabla = ({data}) => {
    return (
        <div className="container-tabla">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>DESCRIPCIÓN</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Con el método map() se recorre cada atributo del objeto */}
                    {data.map((atributo) => (
                        <tr key={atributo.id}>
                            <td>{atributo.id} </td>
                            <td>{atributo.nombre} </td>
                            <td>{atributo.descripcion} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Tabla;
