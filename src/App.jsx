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
  const [search, setSearch] = useState(''); // Contiene el valor del filtro
  const [tamañoTabla, setTamañoTabla] = useState(5); // Contiene el tamaño de la tabla
  const [inicioTabla, setInicioTabla] = useState(1); // Contiene el número en donde empieza la tabla

  const handleSearch = (search) => {
    setSearch(search); // Actualiza el estado del filtro con los datos obtenidos en el input
  };

  const handleTamañoTabla = (e) => {
    setTamañoTabla(Number(e.target.value)); // Actualiza el estado del tamaño de la tabla con el valor seleccionado en el select
    setInicioTabla(1); // Cuando se cambia el tamaño de la página, vuelve a su estado inicial
  };

  const indiceInicial = (inicioTabla - 1) * tamañoTabla; // Calcula el índice inicial de la tabla
  const indiceFinal = Math.max(indiceInicial + tamañoTabla, personas.length); // Calcula el índice final de la tabla

  // Filtra los datos según la busqueda
  const filterData = personas.filter((atributo) =>
    atributo.nombre.includes(search.toLowerCase()) ||
    atributo.descripcion.includes(search.toLowerCase())
  ).slice(indiceInicial, indiceFinal);

  return (
    <>
      <Filtro onSearch={handleSearch} />
      <Seleccionador value={tamañoTabla} onChange={handleTamañoTabla} />
      <Tabla data={filterData} />
      <Total registrosSeleccionados={indiceInicial} totalRegistros={indiceFinal} />
    </>
  )
}

export default App;
