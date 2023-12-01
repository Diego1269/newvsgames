import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { getIdByEmail } from "../api/usuario.api";
import { createVenta } from "../api/venta.api";
import { createDetalle } from "../api/detalleVenta.api";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const [Cart, setCart] = useContext(CartContext);
  const resend = new Resend("re_JnJ1QmUR_EkRUyeSQfNGWCNpeb5v2hLDv");
  const navigate = useNavigate();

  const quantity = Cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = Cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.precio,
    0
  );

  const { isAuthenticated, user } = useAuth0();

  const idUsuario = () => {
    const res = getIdByEmail(user.email);
    return res;
  }

  useEffect(() => {
    if(isAuthenticated){
      idUsuario();
    }
  });

  async function EnviarCorreo() {
    try {
      const data = await resend.emails.send({
        from: "Diego <diegohzg12@gmail.com>",
        to: user.email,
        subject: "Compra realizada",
        html: `<strong>Felicidades compraste:</strong> <br> ${Cart}`,
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row justify-between items-start p-20 bg-wh dark:bg-bg text-bg dark:text-wh">
      <div className="flex-1">
        {/* Productos */}
        <h2 className="font-bold text-3xl">Carrito de Compras</h2>
        <ul className="list-none p-0">
          {Cart.map((car) => (
            <li className="mb-10 my-3 bg-dwh dark:bg-dbg py-3 px-2 rounded-md" key={car.id}>
              <div className="flex items-center">
                <img
                  src={car.imagen}
                  alt={car.nombre}
                  className="w-24 h-32 mr-10 ml-5"
                />
                <div>
                  <h4>{car.nombre}</h4>
                  <p>Precio: ${car.precio}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 ml-20 bg-dwh dark:bg-dbg rounded-md px-3 py-3">
        {/* Subtotal y Botón de Comprar */}
        <h2 className="font-bold text-3xl">Subtotal</h2>
        <p className="text-5xl my-3">${totalPrice}</p>
        <PayPalButtons
          style={{
            color: "gold",
            layout: "horizontal",
            label: "pay",
          }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: "Juegos",
                  amount: {
                    value: (totalPrice / 100),
                  }
                }
              ]
            })
          }}
          onApprove={async(data, actions) => {
            const order = await actions.order?.capture();
            createVenta({
              venta: {
                numero_transaccion: order.id,
                usuario_id: 1,
                total_venta: totalPrice,
              }
            });
            Cart.forEach(function(idi) {
              createDetalle({
                detalle_venta: {
                  numero_transaccion: order.id,
                  producto_id: idi.id,
                  cantidad: idi.quantity,
                  precio: idi.precio,
                  total_venta: totalPrice,
                }
              })
            })
            navigate("/");
          }}
          onCancel={(data) => {
            console.log("Orden cancelada: ", data);
          }}
        />
      </div>
    </div>
  );
};

export default ShoppingCart;
