import React, { useState, useEffect } from "react";
import { getPrivs } from "../../api/privilegios.api";

const ComboPrivilegios = (props) => {
  const [privilegios, setPrivilegios] = useState([]);
  const [option, setOption] = useState();

  useEffect(() => {
    async function loadPrivilegios() {
      const res = await getPrivs();
      setPrivilegios(res.data);
    }
    loadPrivilegios();
  }, []);

  const onChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <select
      name={props.name}
      id={props.id}
      value={option}
      onChange={onChange}
      className={props.className}
      defaultValue="0"
      {...props.register}
    >
      <option value="0">Selecciona una opcion</option>
      {privilegios.map((privilegio) => (
        <option key={privilegio.id} value={privilegio.id}>
          {privilegio.nombre}
        </option>
      ))}
    </select>
  );
};

export default ComboPrivilegios;
