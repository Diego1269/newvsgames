import React from "react";
import visionLogo from "../../assets/img/ojo-abierto.png";
import { Outlet, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-bg py-1">
        <div className="header bg-dbg text-wh p-4 sm:p-2 rounded-full flex justify-center items-center mx-10 my-4 shadow-brand shadow-sm">
          <div
            className="logo flex items-center cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <img className="w-12 h-12 ml-5 mr-2" src={visionLogo} alt="Logo" />
            <h1 className="font-bold text-xl sm:text-sm">VISIONGAMES</h1>
          </div>
        </div>
        <div className="header bg-brand text-wh p-4 sm:p-2 rounded-full flex justify-center items-center mx-10 my-4 shadow-brand shadow-sm">
          <button
            className="text-m font-bold rounded-md hover:bg-dbrand mx-2 px-2"
            onClick={() => {
              navigate(`/dashboard/productos`);
            }}
          >
            Juegos
          </button>
          <button
            className="text-m font-bold rounded-md hover:bg-dbrand mx-2 px-2"
            onClick={() => {
              navigate(`/dashboard/usuarios`);
            }}
          >
            Usuarios
          </button>
          <button
            className="text-m font-bold rounded-md hover:bg-dbrand mx-2 px-2"
            onClick={() => {
              navigate(`/dashboard/categorias`);
            }}
          >
            Categorias de juegos
          </button>
          <button
            className="text-m font-bold rounded-md hover:bg-dbrand mx-2 px-2"
            onClick={() => {
              navigate(`/dashboard/ventas`);
            }}
          >
            Ventas
          </button>
          <button
            className="text-m font-bold rounded-md hover:bg-dbrand mx-2 px-2"
            onClick={() => {
              navigate(`/dashboard/detalles`);
            }}
          >
            Detalle de ventas
          </button>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Header;
