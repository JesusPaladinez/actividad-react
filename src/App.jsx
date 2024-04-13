// Importación de hooks
import { useState, useEffect } from 'react';

// Importación de componentes
import Filtro from './components/Filtro';
import Tabla from './components/Tabla';
import productos from './components/Productos';
import Seleccionador from './components/Seleccionador';
import Total from './components/Total';
import Modal from './components/Modal'
import Agregar from './components/Agregar';

// Importación de estilos
import './styles/App.css';
import './styles/Tabla.css'
import './styles/Filtro.css'
import './styles/Seleccionador.css'
import './styles/Total.css'
import './styles/Modal.css'
import './styles/Agregar.css'

const App = () => {
  const [search, setSearch] = useState(''); // Contiene el valor del filtro
  const [tamañoTabla, setTamañoTabla] = useState(5); // Contiene el tamaño de la tabla
  const [totalElementos, setTotalElementos] = useState(0); // Contiene el total de elementos de la tabla
  const [inicioTabla, setInicioTabla] = useState(1); // Contiene el número en donde empieza la tabla
  // const [productoEditar, setProductoEditar] = useState(null);
  const [estadoModal, setEstadoModal] = useState(false);
  // const [contenidoModal, setContenidoModal] = useState('');
  const [listaProductos, setListaProductos] = useState(productos);
  const [productoActualizado, setProductoActualizado] = useState(null);

  useEffect(() => {
    setTotalElementos(productos.length);
  }, [productos.length]);

  function handleSearch(search) {
    setSearch(search);
  }

  const handleTamañoTabla = (valor) => {
    setTamañoTabla(valor);
    setInicioTabla(1);
  }

  // const handleAgregarProducto = () => {
  //   setEstadoModal(true);
  // }

  const agregarProducto = (productos) => {
    id: listaProductos.length + 1;
    setListaProductos([...listaProductos, productos]);
  };
  
  const actualizarProducto = (producto) => {};

  // const agregarProducto = () => {
  //   const nuevoProducto = {
  //     id: listaProductos.length + 1,
  //     nombre: '',
  //     descripcion: '',
  //   };
  //   setListaProductos([...listaProductos, nuevoProducto]);
  //   setEstadoModal(false);
  // };

  // const handleActualizarProducto = () => {
  //   setContenidoModal('Actualizar producto');
  // }

  // const actualizarProducto = (id) => {
  //   const producto = productos.find(fila => fila.id === id);
  //   setProductoEditar(producto);
  // }  

  const eliminarFila = (id) => {
    const index = productos.findIndex(fila => fila.id === id);
    if (index !== -1) {
      productos.splice(index, 1);
      setTotalElementos(productos.length)
    }
  }

  // Filtra los datos según la busqueda
  const filterData = productos.filter((atributo) =>
    atributo.nombre.toLowerCase().includes(search.toLowerCase()) ||
    atributo.descripcion.toLowerCase().includes(search.toLowerCase())
  ).slice((inicioTabla - 1) * tamañoTabla, inicioTabla * tamañoTabla);

  return (
    <>
      <Filtro onSearch={handleSearch} />
      <Seleccionador value={tamañoTabla} onChange={handleTamañoTabla} />
      <Tabla
        data={filterData}
        estadoModal={estadoModal}
        setEstadoModal={setEstadoModal}
        setProductoActualizado={setProductoActualizado}
        eliminacion={eliminarFila}
        // handleAgregarProducto={handleAgregarProducto}
        // estadoModal={estadoModal}
        // setEstadoModal={setEstadoModal}
        // productoTabla={productoEditar}
      />
      <Agregar
        estadoModal={estadoModal}
        setEstadoModal={setEstadoModal}       
      />
      <Modal
        estadoModal={estadoModal}
        setEstadoModal={setEstadoModal}
        agregarProducto={agregarProducto}
        actualizarProducto={actualizarProducto}
        productoActualizado={productoActualizado}
        setProductoActualizado={setProductoActualizado}
      />
      <Total
        registrosSeleccionados={tamañoTabla}
        totalRegistros={productos.length}
      />
    </>
  )
}

export default App;
