import React, { useEffect, useState } from "react";
import { getAllVentas } from "../../../api/venta.api";
import VentaCard from "./VentaCard";

const VentaList = () => {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    async function loadVentas() {
      const res = await getAllVentas();
      setVentas(res.data);
    }
    loadVentas();
  }, []);

  return (
    <div>
      {ventas.map((venta) => (
        <VentaCard key={venta.id} venta={venta} />
      ))}
    </div>
  );
};

export default VentaList;
