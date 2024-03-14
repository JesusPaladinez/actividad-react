// Importación de hooks
import { useState } from 'react';

// Importación de componentes
import Filtro from './components/Filtro';
import Tabla from './components/Tabla';
import personas from './components/Personas';
import Seleccionador from './components/Seleccionador';
import Total from './components/Total';

// Importación de estilos
import './styles/App.css';
import './styles/Tabla.css'
import './styles/Filtro.css'
import './styles/Seleccionador.css'
import './styles/Total.css'

const App = () => {
  // Funciones del seleccionador
  const [cantidadPersonas, setCantidadPersonas] = useState(5);
  const handleSeleccionador = (e) => {
    setCantidadPersonas(Number(e.target.value));
  };

  // Funciones del filtro
  const [search, setSearch] = useState('');
  const handleSearch = (search) => {
    setSearch(search);
  };

  const filterData = personas.filter((atributo) => atributo.nombre.toLowerCase().includes(search.toLowerCase())).slice(0, cantidadPersonas);

  return (
    <>
      <Filtro onSearch={handleSearch} />
      <Seleccionador value={cantidadPersonas} onChange={handleSeleccionador} />
      <Tabla data={filterData} />
      <Total numRegistros={filterData.length} totalPersonas={personas.length} />
    </>
  )
}

export default App;
