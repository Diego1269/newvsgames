import React from "react";
import ProductsList from "../../../components/cpanel/Producto/ProductsList";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <div className="bg-bg text-wh px-32 sm:px-6 py-4">
      <div className="flex justify-between items-center py-3">
        <h1 className="font-bold text-4xl">Listado de Productos</h1>
        <Link
          className="bg-brand text-bg hover:bg-dbrand py-2 px-3 rounded-full font-bold"
          to="/dashboard/crear-productos"
        >
          Añadir Producto
        </Link>
      </div>
      <p className="py-4 text-2xl">Click para editar</p>
      <ProductsList />
    </div>
  );
};

export default ProductsPage;
