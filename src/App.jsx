// Importación de dependecias
import { useState } from 'react';

// Importación de componentes
import Filtro from './components/Filtro';
import Tabla from './components/Tabla';
import personas from './components/Personas';
import Seleccionador from './components/Seleccionador';

// Importación de estilos
import './styles/App.css';
import './styles/Tabla.css'
import './styles/Filtro.css'
import './styles/Seleccionador.css'

const App = () => {
  // Funciones del filtro
  const [search, setSearch] = useState('');
  const handleSearch = (search) => {
    setSearch(search);
  };
  const filterData = personas.filter((atributo) => atributo.nombre.toLowerCase().includes(search.toLowerCase()));
  
  // Funciones del seleccionador
  const [cantidadPersonas, setCantidadPersonas] = useState(0);
  const handleSeleccionador = (e) => {
    setCantidadPersonas(Number(e.target.value));
  };
  const mostrarRegistros = cantidadPersonas > 0 ? personas.slice(0, cantidadPersonas) : [];

  return (
    <>
      <Filtro onSearch={handleSearch} />
      <Seleccionador onChange={handleSeleccionador} />
      <Tabla data={filterData} registros={mostrarRegistros} />
    </>
  )
}

export default App
