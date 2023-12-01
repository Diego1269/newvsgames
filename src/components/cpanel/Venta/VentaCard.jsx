import React from "react";
import { useNavigate } from "react-router-dom";

const VentaCard = ({ venta }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-dbg hover:bg-dbrand hover:text-bg py-4 my-3 px-4 rounded-full cursor-pointer"
      onClick={() => {
        navigate(`/dashboard/ventas/${venta.id}`);
      }}
    >
      <h1 className="text-xl font-semibold my-2">{venta.numero_transaccion}</h1>
      <p className="text-l my-1">{venta.total_venta}</p>
      <p className="text-m my-1">{venta.created_at}</p>
    </div>
  );
};

export default VentaCard;
