import React from 'react';
import VentaList from '../../../components/cpanel/Venta/VentaList';
const VentasPage = () => {
  return (
    <div className="bg-bg text-wh px-32 sm:px-6 py-4">
      <div className="flex justify-between items-center py-3">
        <h1 className="font-bold text-4xl">Listado de Ventas</h1>
      </div>
      <p className="py-4 text-2xl">Click para ver</p>
      <VentaList />
    </div>
  )
}

export default VentasPage;