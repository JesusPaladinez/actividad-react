// Importación de dependecias
import { useState } from 'react';

// Importación de componentes
import Filtro from './components/Filtro';
import Tabla from './components/Tabla';
import personas from './components/Personas';

// Importación de estilos
import './styles/App.css';
import './styles/Tabla.css'
import './styles/Filtro.css'

const App = () => {
  const [search, setSearch] = useState('');
  const handleSearch = (search) => {
    setSearch(search);
  }
  const filterData = personas.filter((atributo) => atributo.nombre.toLowerCase().includes(search.toLowerCase()));
  return (
    <>
      <Filtro onSearch={handleSearch} />
      <Tabla data={filterData} />
    </>
  )
}

export default App
