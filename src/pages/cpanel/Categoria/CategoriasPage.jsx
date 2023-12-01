import React from "react";
import CategoriasList from "../../../components/cpanel/Categoria/CategoriasList";
import { Link } from "react-router-dom";

const CategoriasPage = () => {
  return (
    <div className="bg-bg text-wh px-32 py-4">
      <div className="flex justify-between items-center py-3">
        <h1 className="font-bold text-4xl">Listado de Categorías</h1>
        <Link
          className="bg-brand text-bg hover:bg-dbrand py-2 px-3 rounded-full font-bold"
          to="/dashboard/crear-categorias"
        >
          Añadir Categoría
        </Link>
      </div>
      <p className="py-4 text-2xl">Click para editar</p>
      <CategoriasList />
    </div>
  );
};

export default CategoriasPage;
