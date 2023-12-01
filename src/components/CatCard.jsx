import React from "react";
import { useNavigate } from "react-router-dom";

const CatCard = ({ categoria }) => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-dbg hover:bg-dbrand hover:text-bg py-4 my-3 px-4 rounded-full cursor-pointer"
      onClick={() => {
        navigate(`/Categorias/${categoria.id}`);
      }}
    >
      <h1 className="text-xl font-semibold">{categoria.nombre}</h1>
    </div>
  );
};

export default CatCard;
