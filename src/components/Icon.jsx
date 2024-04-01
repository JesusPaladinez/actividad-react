import React from 'react';

// Importación de librerías
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Importación de estilos
import '../styles/Icon.css'

const Icon = ({ faStyle, icon }) => {
    return (
        <FontAwesomeIcon className={faStyle} icon={icon} />
    );
}

export default Icon;
