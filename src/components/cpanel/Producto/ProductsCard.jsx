import React from "react";
import { useNavigate } from "react-router-dom";

const ProductsCard = ({ producto }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-dbg hover:bg-dbrand hover:text-bg py-4 my-3 px-4 rounded-md cursor-pointer w-25"
      onClick={() => {
        navigate(`/dashboard/productos/${producto.id}`);
      }}
    >
      <img src={producto.image_url} alt={producto.nombre} className="h-52 w-52 object-cover object-center lg:h-52 lg:w-full"/>
      <h1 className="text-xl font-semibold mt-3">{producto.nombre}</h1>
      <p>Precio: ${producto.precio}</p>
      <p>Cantidad de ventas: {producto.cantidad_ventas}</p>
    </div>
  );
};

export default ProductsCard;
