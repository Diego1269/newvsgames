import React from "react";
import { useNavigate } from "react-router-dom";

const UsuarioCard = ({ usuario }) => {
  const navigate = useNavigate();

  const tipoUsuario = () => {
    let tipo_usuario;
    if (usuario.privilegio_id === 1) {
      tipo_usuario = "Administrador";
    } else {
      tipo_usuario = "Usuario";
    }
    return tipo_usuario;
  };

  return (
    <div
      className="bg-dbg hover:bg-dbrand hover:text-bg py-4 my-3 px-4 rounded-full cursor-pointer"
      onClick={() => {
        navigate(`/dashboard/usuarios/${usuario.id}`);
      }}
    >
      <div className="flex">
        <h1 className="text-xl font-semibold px-2 flex">{usuario.name} - </h1>
        <h1 className="text-brand bg-dbg rounded-full px-2">
          {tipoUsuario()}{" "}
        </h1>
      </div>
    </div>
  );
};

export default UsuarioCard;
