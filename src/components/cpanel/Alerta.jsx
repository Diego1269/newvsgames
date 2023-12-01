import React from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline"

const Alerta = ({ campo }) => {
  return (
    <span className="w-full justify-center rounded-md bg-dbg text-md font-semibold leading-6 text-brand py-1 px-3 flex">
      <InformationCircleIcon className="h-6 w-6 mx-2" aria-hidden="true" />{campo}
    </span>
  );
};

export default Alerta;
