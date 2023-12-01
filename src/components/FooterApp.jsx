import React from "react";
import { Link } from "react-router-dom";

const FooterApp = () => {
  return (
    <>
      <footer className="bottom-0 left-0 w-full flex justify-between items-center bg-dbg px-20 py-10">
        <p className="m-0 text-sm text-wh">&copy; 2023 Juan Series X.</p>
        <div className="flex">
          <Link to="/About" className="mr-4 font-bold text-brand no-underline">
            Acerca de VSGames
          </Link>
          <Link to="/FAQ" className="mr-4 font-bold text-brand no-underline">
            Preguntas Frecuentes
          </Link>
          <Link to="/Terminos" className="font-bold text-brand no-underline">
            Terminos y Condiciones
          </Link>
        </div>
      </footer>
    </>
  );
};

export default FooterApp;
