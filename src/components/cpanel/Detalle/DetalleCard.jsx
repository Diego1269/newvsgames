import React from 'react';
import { useNavigate } from 'react-router-dom';

const DetalleCard = ({ detalle }) => {
    const navigate = useNavigate();
  return (
    <div
      className="bg-dbg hover:bg-dbrand hover:text-bg py-4 my-3 px-4 rounded-full cursor-pointer"
      onClick={() => {
        navigate(`/dashboard/detalles/${detalle.id}`);
      }}
    >
      <h1 className="text-xl font-semibold my-2">Id de venta: {detalle.venta_id}</h1>
      <p className="text-l my-1">Id de producto: {detalle.producto_id}</p>
      <p className="text-m my-1">{detalle.total_venta}</p>
    </div>
  )
}

export default DetalleCard