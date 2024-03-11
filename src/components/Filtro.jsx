import React, { useState } from 'react';

const Filtro = ({ onSearch }) => {
    const [search, setSearch] = useState('');
    const handleChange = (e) => {
        setSearch(e.target.value);
        onSearch(e.target.value);
    }
    return (
        <div className='container-filtro'>
            <input className='filtro' type="text" placeholder='Buscar...' value={search} onChange={handleChange} />
        </div>
    );
}

export default Filtro;
