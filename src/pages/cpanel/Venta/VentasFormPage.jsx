import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  createVenta,
  deleteVenta,
  getVenta,
  updateVenta,
} from "../../../api/venta.api";
import { useNavigate, useParams } from "react-router-dom";
import Alerta from "../../../components/cpanel/Alerta";

const VentasFormPage = () => {
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
      await updateVenta(params.id, data);
    } else {
      await createVenta(data);
    }
    navigate("/dashboard/ventas");
  });

  useEffect(() => {
    async function loadVentas() {
      if (params.id) {
        const { data } = await getVenta(params.id);
        setValue("numero_transaccion", data.numero_transaccion);
        setValue("usuario_id", data.usuario_id);
        setValue("total_venta", data.total_venta);
        setValue("created_at", data.created_at);
      }
    }
    loadVentas();
  });
  return (
    <div className="bg-bg text-wh xl:px-144 lg:px-80 md:px-32 sm:px-16 py-12">
      <form onSubmit={onSubmit}>
        <div>
          <label
            htmlFor="numero_transaccion"
            className="block text-sm font-medium leading-6 text-bg dark:text-wh"
          >
            Numero de transacción:
          </label>
          <input
            type="text"
            className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbrand sm:text-sm sm:leading-6 mb-3"
            placeholder="Numero de transacción"
            name="numero_transaccion"
            id="numero_transaccion"
            disabled
            {...register("numero_transaccion", { required: true })}
          />
          {errors.numero_transaccion && (
            <Alerta campo="Se requiere Numero de transacción" />
          )}
        </div>

        <div>
          <label
            htmlFor="usuario_id"
            className="block text-sm font-medium leading-6 text-bg dark:text-wh"
          >
            ID de usuario:
          </label>
          <input
            type="text"
            className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbrand sm:text-sm sm:leading-6 mb-3"
            placeholder="ID de usuario"
            name="usuario_id"
            id="usuario_id"
            disabled
            {...register("usuario_id", { required: true })}
          />
          {errors.usuario_id && <Alerta campo="Se requiere ID de usuario" />}
        </div>

        <div>
          <label
            htmlFor="total_venta"
            className="block text-sm font-medium leading-6 text-bg dark:text-wh"
          >
            Total de la venta:
          </label>
          <input
            type="text"
            className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbrand sm:text-sm sm:leading-6 mb-3"
            placeholder="Total de la venta"
            name="total_venta"
            id="total_venta"
            disabled
            {...register("total_venta", { required: true })}
          />
          {errors.total_venta && (
            <Alerta campo="Se requiere Total de la venta" />
          )}
        </div>

        <div>
          <label
            htmlFor="created_at"
            className="block text-sm font-medium leading-6 text-bg dark:text-wh"
          >
            Creado el día:
          </label>
          <input
            type="text"
            className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbrand sm:text-sm sm:leading-6 mb-3"
            placeholder="Creado el día"
            name="created_at"
            id="created_at"
            disabled
            {...register("created_at", { required: true })}
          />
          {errors.created_at && <Alerta campo="Se requiere Creado el día" />}
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
              "¿Estás seguro de borrar la venta?"
            );
            if (accepted) {
              await deleteVenta(params.id);
              navigate("/dashboard/ventas");
            }
          }}
        >
          Borrar producto
        </button>
      )}
    </div>
  );
};

export default VentasFormPage;
