import React from 'react'
import DetalleList from '../../../components/cpanel/Detalle/DetalleList';

const DetallesPage = () => {
  return (
    <div className="bg-bg text-wh px-32 sm:px-6 py-4">
      <div className="flex justify-between items-center py-3">
        <h1 className="font-bold text-4xl">Listado de detalles de venta</h1>
      </div>
      <p className="py-4 text-2xl">Click para editar</p>
      <DetalleList />
    </div>
  )
}

export default DetallesPage