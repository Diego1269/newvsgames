import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import {
  createCat,
  deleteCat,
  getCats,
  updateCat,
} from "../../../api/categoria.api";
import { useNavigate, useParams } from "react-router-dom";
import Alerta from "../../../components/cpanel/Alerta";

const CategoriasFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateCat(params.id, data);
    } else {
      await createCat(data);
    }
    navigate("/dashboard/categorias");
  });

  useEffect(() => {
    async function loadCategoria() {
      if (params.id) {
        const { data } = await getCats(params.id);
        setValue("nombre", data.nombre);
      }
    }
    loadCategoria();
  });
  
  return (
    <div className="bg-bg text-wh xl:px-144 lg:px-80 md:px-32 sm:px-16 py-12">
      <form onSubmit={onSubmit}>
        <div>
          <label
            htmlFor="nombre"
            className="block text-sm font-medium leading-6 text-bg dark:text-wh"
          >
            Nombre de la categoría:
          </label>
          <input
            type="text"
            className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbrand sm:text-sm sm:leading-6 mb-3"
            placeholder="Nombre"
            name="nombre"
            id="nombre"
            {...register("nombre", { required: true })}
          />
          {errors.nombre && (
            <Alerta campo="El nombre de la categoría es requerido" />
          )}
        </div>
        <button className="mt-3 flex w-full justify-center rounded-md bg-brand px-3 py-1.5 text-sm font-semibold leading-6 text-bg shadow-sm hover:bg-dbrand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Guardar
        </button>
      </form>

      {params.id && (
        <button
          className="mt-3 flex w-full justify-center rounded-md bg-dbg px-3 py-1.5 text-sm font-semibold leading-6 text-brand shadow-sm hover:bg-brand hover:text-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={async () => {
            const accepted = window.confirm(
              "¿Estás seguro de borrar la categoría?"
            );
            if (accepted) {
              await deleteCat(params.id);
              navigate("/categorias");
            }
          }}
        >
          Borrar categoría
        </button>
      )}
    </div>
  );
}

export default CategoriasFormPage;
