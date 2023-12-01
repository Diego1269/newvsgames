import React, { useEffect, useState } from "react";
import { getAllDets } from "../../../api/detalleVenta.api";
import DetalleCard from "./DetalleCard";

const DetalleList = () => {
  const [detalles, setDetalles] = useState([]);

  useEffect(() => {
    async function loadDetalles() {
      const res = await getAllDets();
      setDetalles(res.data);
    }
    loadDetalles();
  }, []);

  return (
    <div>
      {detalles.map((detalle) => (
        <DetalleCard key={detalle.id} detalle={detalle} />
      ))}
    </div>
  );
};

export default DetalleList;
