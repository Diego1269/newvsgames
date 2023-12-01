import React, { useEffect, useState } from "react";
import { getProd } from "../api/producto.api";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

export default function DetalleJuego() {
  const [product, setProduct] = useState([]);
  const [Cart, setCart] = useContext(CartContext);
  const params = useParams();
  const id = params.id;
  let precio = product.precio;
  let nombre = product.nombre;
  let imagen = product.image_url;

  useEffect(() => {
    async function loadProducto() {
      const res = await getProd(params.id);
      setProduct(res.data);
    }
    loadProducto();
  });

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === params.id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === params.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, precio, nombre, imagen }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === params.id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === params.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return Cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return (
    <div className="bg-wh dark:bg-bg">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.image_url}
              alt={product.nombre}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-bg dark:text-wh sm:text-3xl">
              {product.nombre}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Información del videojuego</h2>
            <p className="text-3xl tracking-tight text-bg dark:text-wh">
              ${product.precio}
            </p>
            {quantityPerItem === 0 ? (
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-brand px-8 py-3 text-base font-medium text-white hover:bg-dbrand focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => addToCart()}
              >
                Añadir al carrito
              </button>
            ) : (
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-bg px-8 py-3 text-base font-medium text-white hover:bg-dbrand focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => removeItem()}
              >
                Quitar del carrito
              </button>
            )}
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Descripción</h3>

              <div className="space-y-6">
                <p className="text-base text-bg dark:text-wh">
                  {product.descripcion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
