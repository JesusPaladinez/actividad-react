// Importación de hooks
import { useState, useEffect } from 'react';

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
  const [totalElementos, setTotalElementos] = useState(0); // Contiene el total de elementos de la tabla
  const [inicioTabla, setInicioTabla] = useState(1); // Contiene el número en donde empieza la tabla

  useEffect(() => {
    setTotalElementos(personas.length);
  }, [personas.length]);

  function handleSearch(search) {
    setSearch(search); // Actualiza el estado del filtro con los datos obtenidos en el input
  }

  const handleTamañoTabla = (valor) => {
    setTamañoTabla(valor);
    setInicioTabla(1); // Reinicia la página actual cuando cambia el número de filas
  }

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
      <Tabla
        data={search ? filterData.slice((inicioTabla - 1) * tamañoTabla, inicioTabla * tamañoTabla) : personas.slice((inicioTabla - 1) * tamañoTabla, inicioTabla * tamañoTabla)}
        inicioTabla={inicioTabla}
        totalElementos={totalElementos}
        tamañoTabla={tamañoTabla}
      />
      <Total
        registrosSeleccionados={tamañoTabla}
        totalRegistros={personas.length}
      />
    </>
  )
}

export default App;
