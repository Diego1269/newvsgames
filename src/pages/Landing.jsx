import React from "react";
import Videogames from "../components/Videogames";
import Features from "../components/Features";

const Landing = () => {
  return (
    <div className="bg-white dark:bg-bg">
      <Features />
      <Videogames titulo="Juegos recomendados para tí" bg="bg-wh dark:bg-bg"/>
      <Videogames titulo="Juegos en tendencia" bg="bg-dwh dark:bg-dbg"/>
      <Videogames titulo="Juegos nuevos" bg="bg-wh dark:bg-bg"/>
    </div>
  );
};

export default Landing;
