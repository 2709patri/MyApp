// App.js
import React, { useState } from 'react';

const productosData = [
  {
    sku: '001',
    nombre: 'Champú Revitalizante',
    descripcion: 'Un champú que revitaliza y fortalece el cabello.',
    precio: 1200,
    cantidad: 30,
  },
  {
    sku: '002',
    nombre: 'Acondicionador Revitalizante',
    descripcion: 'Un acondicionador que revitaliza y fortalece el cabello.',
    precio: 1800,
    cantidad: 30,
  },
  {
    sku: '003',
    nombre: 'Mascarilla Hot Oil',
    descripcion: 'Una mascarilla capilar monodosis que revitaliza y fortalece el cabello.',
    precio: 1200,
    cantidad: 18,
  },
  // puedo seguir agregando productos
];

function App() {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const handleSelectProducto = (sku) => {
    const producto = productosData.find((p) => p.sku === sku);
    setProductoSeleccionado(producto);
  };

  return (
    <div className="App">
      <div>
        <h1>COSMETICA NATURAL CAPILAR</h1>
        <h2>Lista de Productos</h2>
        <select onChange={(e) => handleSelectProducto(e.target.value)}>
          <option value="">Selecciona un producto</option>
          {productosData.map((producto) => (
            <option key={producto.sku} value={producto.sku}>
              {producto.nombre}
            </option>
          ))}
        </select>
      </div>
      <div>

        {productoSeleccionado ? (
          <div className='producto'>
            <p>{productoSeleccionado.nombre}</p>
            <p>{productoSeleccionado.descripcion}</p>
            <p>${productoSeleccionado.precio}</p>
            <p>SKU: {productoSeleccionado.sku}</p>
            <p>Cantidad Disponible: {productoSeleccionado.cantidad}</p>
          </div>
        ) : (
          <p>Selecciona un producto para ver los detalles.</p>
        )}
      </div>
    </div>
  );
}

export default App;
