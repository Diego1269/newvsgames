import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const FooterPanel = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <div className="flex justify-between bottom-0 left-0 w-full bg-dbg text-brand p-4">
      <p>&copy; 2023 Juan Series X</p>
      <div className="flex">
        <p className="mr-2">Iniciaste sesión cómo: </p>
        <p>{ isAuthenticated? user.name : "desconocido" }</p>
      </div>
    </div>
  );
};

export default FooterPanel;
