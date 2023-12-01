import React from "react";
import CatList from '../components/CatList';

const Categorias = () => {
  return (
    <div className="bg-bg text-wh px-32 py-4">
      <div className="flex justify-between items-center py-3">
        <h1 className="font-bold text-4xl">Videojuegos por categoría</h1>
      </div>
      <CatList />
    </div>
  );
};

export default Categorias;
