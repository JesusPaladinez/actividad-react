import React, { useState } from 'react';

const formularioInicial = {
    id: null,
    nombre: '',
    caracteristicas: ''
}

const Modal = ({ estadoModal, setEstadoModal, agregarProducto, actualizarProducto, productoActualizado, setProductoActualizado }) => {
    const [formulario, setFormulario] = useState(formularioInicial);

    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formulario.nombre || !formulario.caracteristicas) {
            alert('Completa todos los campos.');
        }

        if (formulario.id === null) {
            agregarProducto(formulario)
        } else {
            actualizarProducto(formulario)
        }

        handleReset();
    }

    const handleReset = (e) => {
        setFormulario(formularioInicial)
        setProductoActualizado(null)
    }

    return (
        <>
            {estadoModal &&
                <div className='modal'>
                    <div className="container">
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder='Nombre' name='nombre' onChange={handleChange} value={formulario.nombre} />
                            <input type="text" placeholder='Caracteristicas' name='caracteristicas' onChange={handleChange} value={formulario.caracteristicas} />
                            <div className="botones">
                                <input type="submit" value='Aceptar' />
                                {/* <input type="submit" value='Cancelar' /> */}
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    );
}

export default Modal;
