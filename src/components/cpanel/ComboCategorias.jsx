import React, { useState, useEffect } from "react";
import { getAllCats } from "../../api/categoria.api";

const ComboCategorias = (props) => {
  const [categoiras, setCategorias] = useState([]);
  const [option, setOption] = useState();

  useEffect(() => {
    async function loadCategorias() {
      const res = await getAllCats();
      setCategorias(res.data);
    }
    loadCategorias();
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
      {categoiras.map((categoria) => (
        <option key={categoria.id} value={categoria.id}>
          {categoria.nombre}
        </option>
      ))}
    </select>
  );
};

export default ComboCategorias;
