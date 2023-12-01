import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  createDetalle,
  deleteDetalle,
  getDetalle,
  updateDetalle,
} from "../../../api/detalleVenta.api";
import { useNavigate, useParams } from "react-router-dom";
import Alerta from "../../../components/cpanel/Alerta";

const DetallesFormPage = () => {
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
      await updateDetalle(params.id, data);
    } else {
      await createDetalle(data);
    }
    navigate("/dashboard/detalles");
  });

  useEffect(() => {
    async function loadDetalle() {
      if (params.id) {
        const { data } = await getDetalle(params.id);
        setValue("venta_id", data.venta_id);
        setValue("producto_id", data.producto_id);
        setValue("cantidad", data.cantidad);
        setValue("precio", data.precio);
        setValue("total_venta", data.total_venta);
        setValue("created_at", data.created_at);
      }
    }
    loadDetalle();
  });
  return (
    <div className="bg-bg text-wh xl:px-144 lg:px-80 md:px-32 sm:px-16 py-12">
      <form onSubmit={onSubmit}>
        <div>
          <label
            htmlFor="venta_id"
            className="block text-sm font-medium leading-6 text-bg dark:text-wh"
          >
            ID de venta:
          </label>
          <input
            type="text"
            className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbrand sm:text-sm sm:leading-6 mb-3"
            placeholder="ID de venta"
            name="venta_id"
            id="venta_id"
            disabled
            {...register("venta_id", { required: true })}
          />
          {errors.venta_id && <Alerta campo="Se requiere ID de venta" />}
        </div>

        <div>
          <label
            htmlFor="producto_id"
            className="block text-sm font-medium leading-6 text-bg dark:text-wh"
          >
            ID de producto:
          </label>
          <input
            type="text"
            className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbrand sm:text-sm sm:leading-6 mb-3"
            placeholder="ID de producto"
            name="producto_id"
            id="producto_id"
            disabled
            {...register("producto_id", { required: true })}
          />
          {errors.producto_id && <Alerta campo="Se requiere ID de producto" />}
        </div>

        <div>
          <label
            htmlFor="cantidad"
            className="block text-sm font-medium leading-6 text-bg dark:text-wh"
          >
            Cantidad:
          </label>
          <input
            type="text"
            className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbrand sm:text-sm sm:leading-6 mb-3"
            placeholder="Cantidad"
            name="cantidad"
            id="cantidad"
            disabled
            {...register("cantidad", { required: true })}
          />
          {errors.cantidad && <Alerta campo="Se requiere cantidad de productos" />}
        </div>

        <div>
          <label
            htmlFor="precio"
            className="block text-sm font-medium leading-6 text-bg dark:text-wh"
          >
            Precio:
          </label>
          <input
            type="text"
            className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbrand sm:text-sm sm:leading-6 mb-3"
            placeholder="Precio"
            name="precio"
            id="precio"
            disabled
            {...register("precio", { required: true })}
          />
          {errors.precio && <Alerta campo="Se requiere precio unitario del producto" />}
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
          {errors.total_venta && <Alerta campo="Se requiere total de la venta" />}
        </div>

        <div>
          <label
            htmlFor="created_at"
            className="block text-sm font-medium leading-6 text-bg dark:text-wh"
          >
            Venta hecha el:
          </label>
          <input
            type="text"
            className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbrand sm:text-sm sm:leading-6 mb-3"
            placeholder="Venta hecha el"
            name="created_at"
            id="created_at"
            disabled
            {...register("created_at", { required: true })}
          />
          {errors.created_at && <Alerta campo="Se requiere URL de imagen" />}
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
              "¿Estás seguro de borrar el producto?"
            );
            if (accepted) {
              await deleteDetalle(params.id);
              navigate("/dashboard/detalles");
            }
          }}
        >
          Borrar detalle de venta
        </button>
      )}
    </div>
  );
};

export default DetallesFormPage;
