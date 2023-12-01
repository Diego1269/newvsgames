import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  createUser,
  deleteUser,
  getUser,
  updateUser,
} from "../../../api/usuario.api";
import { useNavigate, useParams } from "react-router-dom";
import Alerta from "../../../components/cpanel/Alerta";
import ComboPrivilegios from "../../../components/cpanel/ComboPrivilegios";

const UsuariosFormPage = () => {
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
      await updateUser(params.id, data);
    } else {
      console.log(data)
      await createUser(data);
    }
    navigate("/dashboard/usuarios");
  });

  useEffect(() => {
    async function loadUsuarios() {
      if (params.id) {
        const { data } = await getUser(params.id);
        setValue("name", data.name);
        setValue("picture", data.picture);
        setValue("email", data.email);
        setValue("privilegio_id", data.privilegio_id);
      }
    }
    loadUsuarios();
  });

  return (
    <div className="bg-bg text-wh xl:px-144 lg:px-80 md:px-32 sm:px-16 py-12">
      <form onSubmit={onSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-bg dark:text-wh"
          >
            Nombre:
          </label>
          <input
            type="text"
            className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbrand sm:text-sm sm:leading-6 mb-3"
            placeholder="Nombre"
            name="name"
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <Alerta campo="El nombre es requerido" />
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-bg dark:text-wh"
          >
            Correo electrónico:
          </label>
          <input
            type="text"
            className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbrand sm:text-sm sm:leading-6 mb-3"
            placeholder="Correo"
            name="email"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <Alerta campo="El correo es requerido" />
          )}
        </div>

        <div>
          <label
            htmlFor="picture"
            className="block text-sm font-medium leading-6 text-bg dark:text-wh"
          >
            URL de la imagen:
          </label>
          <input
            type="text"
            className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbrand sm:text-sm sm:leading-6 mb-3"
            placeholder="URL de la imagen"
            name="picture"
            id="picture"
            {...register("picture", { required: true })}
          />
          {errors.picture && (
            <Alerta campo="El URL de la imagen es requerido" />
          )}
        </div>
        
        <div>
          <label
            htmlFor="privilegio_id"
            className="block text-sm font-medium leading-6 text-bg dark:text-wh"
          >
            Privilegio del usuario:
          </label>
          <ComboPrivilegios
            name="privilegio_id"
            id="privilegio_id"
            className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbrand sm:text-sm sm:leading-6 mb-3"
            register={register("privilegio_id", {
              validate: (value, formValue) => value !== "0",
            })}
          />
          {errors.privilegio_id && (
            <Alerta campo="Se requiere seleccionar una privilegio valida" />
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
              "¿Estás seguro de borrar el usuario?"
            );
            if (accepted) {
              await deleteUser(params.id);
              navigate("/usuarios");
            }
          }}
        >
          Borrar usuario
        </button>
      )}
    </div>
  );
};

export default UsuariosFormPage;
