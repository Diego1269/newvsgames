import React from "react";
import { useNavigate } from "react-router-dom";

const GameCard = ({ juego }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/Juego/${juego.id}`);
      }}
      className="group relative"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-brand lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={juego.image_url}
          alt={juego.nombre}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-bg dark:text-wh mr-4">
            <a href={juego.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {juego.nombre}
            </a>
          </h3>
          <p className="mt-1 text-sm text-bg dark:text-wh">Región: {juego.region}</p>
        </div>
        <p className="text-sm font-bold text-dbrand dark:text-brand">
          ${juego.precio}
        </p>
      </div>
    </div>
  );
};

export default GameCard;
