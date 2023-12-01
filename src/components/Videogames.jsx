import React, { useState, useEffect  } from "react";
import GameCard from "./GameCard";
import { getAllProds } from "../api/producto.api";

const Videogames = (props) => {
  const [juegos, setJuegos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  useEffect(() => {
    async function loadProductos() {
      const res = await getAllProds();
      setJuegos(res.data);
    }
    loadProductos();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = juegos.slice(firstPostIndex, lastPostIndex);

  return (
    <div className={props.bg}>
      <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-bg dark:text-wh">
          {props.titulo}
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {juegos.map((juego) => (
            <GameCard key={juego.id} juego={juego} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videogames;
