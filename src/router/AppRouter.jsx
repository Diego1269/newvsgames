import { Route, Routes } from "react-router-dom";
//Cliente
import Appbar from "../components/Appbar";
import Landing from "../pages/Landing";
import About from "../pages/About";
import FooterApp from "../components/FooterApp";
import Categorias from "../pages/Categorias";
import Faq from "../pages/Faq";
import NotFound from "../pages/NotFound";
import Terminos from "../pages/Terminos";
import DetalleJuego from "../pages/DetalleJuego";
import Catalogo from "../pages/Catalogo";
import ShoppingCart from "../pages/ShoppingCart";
//Administrador
import Header from "../components/cpanel/Header";
import FooterPanel from "../components/cpanel/FooterPanel";
import Panel from "../pages/cpanel/Panel";
import CategoriasPage from "../pages/cpanel/Categoria/CategoriasPage";
import CategoriasFormPage from "../pages/cpanel/Categoria/CategoriasFormPage";
import ProductsPage from "../pages/cpanel/Producto/ProductsPage";
import ProductsFormPage from "../pages/cpanel/Producto/ProductsFormPage";
import UsuariosPage from "../pages/cpanel/Usuario/UsuariosPage";
import UsuariosFormPage from "../pages/cpanel/Usuario/UsuariosFormPage";
import VentasPage from "../pages/cpanel/Venta/VentasPage";
import VentasFormPage from "../pages/cpanel/Venta/VentasFormPage";
import DetallesPage from "../pages/cpanel/DetalleVenta/DetallesPage";
import DetallesFormPage from "../pages/cpanel/DetalleVenta/DetallesFormPage";

import React from "react";
import PrivateRoute from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Appbar />
              <FooterApp />
            </>
          }
        >
          <Route index element={<Landing />}></Route>
          <Route path="/FAQ" element={<Faq />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Terminos" element={<Terminos />}></Route>
          <Route path="/Categorias" element={<Categorias />}></Route>
          <Route path="/Juego/:id" element={<DetalleJuego />}></Route>
          <Route path="/Catalogo" element={<Catalogo />}></Route>
          <Route
            path="/Carrito"
            element={
              <PrivateRoute>
                <ShoppingCart />
              </PrivateRoute>
            }
          ></Route>
        </Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Header />
              <FooterPanel />
            </PrivateRoute>
          }
        >
          <Route index element={<Panel />}></Route>
          <Route
            path="/dashboard/categorias"
            element={<CategoriasPage />}
          ></Route>
          <Route
            path="/dashboard/categorias/:id"
            element={<CategoriasFormPage />}
          ></Route>
          <Route
            path="/dashboard/crear-categorias"
            element={<CategoriasFormPage />}
          ></Route>
          <Route path="/dashboard/productos" element={<ProductsPage />}></Route>
          <Route
            path="/dashboard/productos/:id"
            element={<ProductsFormPage />}
          ></Route>
          <Route
            path="/dashboard/crear-productos"
            element={<ProductsFormPage />}
          ></Route>
          <Route path="/dashboard/usuarios" element={<UsuariosPage />}></Route>
          <Route
            path="/dashboard/usuarios/:id"
            element={<UsuariosFormPage />}
          ></Route>
          <Route
            path="/dashboard/crear-usuarios"
            element={<UsuariosFormPage />}
          ></Route>
          <Route path="/dashboard/ventas" element={<VentasPage />}></Route>
          <Route
            path="/dashboard/ventas/:id"
            element={<VentasFormPage />}
          ></Route>
          <Route path="/dashboard/detalles" element={<DetallesPage />}></Route>
          <Route
            path="/dashboard/detalles/:id"
            element={<DetallesFormPage />}
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};
