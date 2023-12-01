import React, { useEffect} from "react";
import { useForm } from "react-hook-form";
import {
  createProd,
  deleteProd,
  getProd,
  updateProd,
} from "../../../api/producto.api";
import { useNavigate, useParams } from "react-router-dom";
import Alerta from "../../../components/cpanel/Alerta";
import ComboCategorias from "../../../components/cpanel/ComboCategorias";

const ProductsFormPage = () => {
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
      await updateProd(params.id, data);
    } else {
      await createProd(data);
    }
    navigate("/dashboard/productos");
  });

  useEffect(() => {
    async function loadProducto() {
      if (params.id) {
        const { data } = await getProd(params.id);
        setValue("image_url", data.image_url);
        setValue("nombre", data.nombre);
        setValue("descripcion", data.descripcion);
        setValue("categoria_id", data.categoria_id);
        setValue("precio", data.precio);
        setValue("region", data.region);
        setValue("cantidad_ventas", data.cantidad_ventas);
      }
    }
    loadProducto();
  });

  return (
    <div className="bg-bg text-wh xl:px-144 lg:px-80 md:px-32 sm:px-16 py-12">
      <form onSubmit={onSubmit}>
        <div>
          <label
            htmlFor="image_url"
            className="block text-sm font-medium leading-6 text-bg dark:text-wh"
          >
            URL de la imagen:
          </label>
          <input
            type="text"
            className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbrand sm:text-sm sm:leading-6 mb-3"
            placeholder="URL de la imagen"
            name="image_url"
            id="image_url"
            {...register("image_url", { required: true })}
          />
          {errors.image_url && <Alerta campo="Se requiere URL de imagen" />}
        </div>
        <div>
          <label
            htmlFor="nombre"
            className="block text-sm font-medium leading-6 text-bg dark:text-wh"
          >
            Nombre del producto:
          </label>
          <input
            type="text"
            className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbrand sm:text-sm sm:leading-6 mb-3"
            placeholder="Nombre del producto:"
            name="nombre"
            id="nombre"
            {...register("nombre", { required: true })}
          />
          {errors.nombre && (
            <Alerta campo="Se requiere el nombre del producto" />
          )}
        </div>
        <div>
          <label
            htmlFor="categoria_id"
            className="block text-sm font-medium leading-6 text-bg dark:text-wh"
          >
            Categoria del producto:
          </label>
          <ComboCategorias
            name="categoria_id"
            id="categoria_id"
            className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbrand sm:text-sm sm:leading-6 mb-3"
            register={register("categoria_id", {
              validate: (value, formValue) => value !== "0",
            })}
          />
          {errors.categoria_id && (
            <Alerta campo="Se requiere seleccionar una categoria valida" />
          )}
        </div>
        <div>
          <label
            htmlFor="descripcion"
            className="block text-sm font-medium leading-6 text-bg dark:text-wh"
          >
            Descripción del producto:
          </label>
          <textarea
            name="descripcion"
            id="descripcion"
            placeholder="Descripción del producto"
            cols="30"
            rows="5"
            className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbrand sm:text-sm sm:leading-6 mb-3"
            {...register("descripcion", { required: true })}
          ></textarea>
          {errors.descripcion && <Alerta campo="Se descripción del producto" />}
        </div>
        <div>
          <label
            htmlFor="precio"
            className="block text-sm font-medium leading-6 text-bg dark:text-wh"
          >
            Precio del producto:
          </label>
          <input
            type="text"
            className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbrand sm:text-sm sm:leading-6 mb-3"
            placeholder="Precio del producto"
            name="precio"
            id="precio"
            {...register("precio", { required: true })}
          />
          {errors.precio && (
            <Alerta campo="Se requiere el precio del producto" />
          )}
        </div>
        <div>
          <label
            htmlFor="region"
            className="block text-sm font-medium leading-6 text-bg dark:text-wh"
          >
            Región del producto:
          </label>
          <input
            type="text"
            className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbrand sm:text-sm sm:leading-6 mb-3"
            placeholder="Región del producto"
            name="region"
            id="region"
            {...register("region", { required: true })}
          />
          {errors.region && (
            <Alerta campo="Se requiere la región del producto" />
          )}
        </div>
        <div>
          <label
            htmlFor="cantidad"
            className="block text-sm font-medium leading-6 text-bg dark:text-wh"
          >
            Cantidad de ventas del producto:
          </label>
          <input
            type="text"
            className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dbrand sm:text-sm sm:leading-6 mb-3"
            placeholder="Cantidad de ventas del producto"
            name="cantidad"
            id="cantidad"
            disabled
            {...register("cantidad_ventas")}
          />
          {errors.cantidad && (
            <Alerta campo="Se requiere la cantidad de ventas del producto" />
          )}
        </div>
        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium leading-6 text-bg dark:text-wh"
          >
            Status del producto:
          </label>          
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
              await deleteProd(params.id);
              navigate("/dashboard/productos");
            }
          }}
        >
          Borrar producto
        </button>
      )}
    </div>
  );
};

export default ProductsFormPage;
