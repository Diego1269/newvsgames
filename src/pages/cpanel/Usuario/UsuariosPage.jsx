import React from 'react';
import UsuarioList from "../../../components/cpanel/Usuario/UsuarioList";

const UsuariosPage = () => {
    return (
        <div className="bg-bg text-wh px-32 py-4">
          <div className="flex justify-between items-center py-3">
            <h1 className="font-bold text-4xl">Listado de Usuarios</h1>
          </div>
          <p className="py-4 text-2xl">Click para editar</p>
          <UsuarioList />
        </div>
      );
}

export default UsuariosPage;