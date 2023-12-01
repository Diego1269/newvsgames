import React from "react";
import logoVision from "../assets/img/ojo-abierto.png";
import { useForm } from "../hook/useForm";
import { Link, useNavigate } from "react-router-dom";
import { registration } from "../api/registration.api";

const SignUp = () => {
  const {
    nombre_completo,
    correo,
    password,
    password_confirmation,
    telefono,
    onInputChange,
    onResetForm,
  } = useForm({
    nombre_completo: "",
    correo: "",
    password: "",
    password_confirmation: "",
    telefono: "",
  });

  const navigate = useNavigate();

  const onRegister = (e) => {
    e.preventDefault();
    registration({
      user: {
        nombre_completo: nombre_completo,
        correo: correo,
        telefono: telefono,
        password: password,
        password_confirmation: password_confirmation,
        privilegio_id: 2,
      },
    });

    navigate('/');
    
    onResetForm();
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-wh dark:bg-bg">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src={logoVision}
          alt="VISIONGAMES"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-bg dark:text-wh">
          Crea tu cuenta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={onRegister}>
          <div>
            <label
              htmlFor="nombre_completo"
              className="block text-sm font-medium leading-6 text-bg dark:text-wh"
            >
              Nombre Completo
            </label>
            <div className="mt-2">
              <input
                id="nombre_completo"
                name="nombre_completo"
                type="text"
                value={nombre_completo}
                onChange={onInputChange}
                autoComplete="off"
                required
                className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="correo"
              className="block text-sm font-medium leading-6 text-bg dark:text-wh"
            >
              Correo electrónico
            </label>
            <div className="mt-2">
              <input
                id="correo"
                name="correo"
                type="email"
                value={correo}
                onChange={onInputChange}
                autoComplete="off"
                required
                className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5 text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6  text-bg dark:text-wh"
            >
              Contraseña
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={onInputChange}
                autoComplete="off"
                required
                className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5  text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password_confirmation"
              className="block text-sm font-medium leading-6  text-bg dark:text-wh"
            >
              Confirma tu contraseña
            </label>
            <div className="mt-2">
              <input
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                value={password_confirmation}
                onChange={onInputChange}
                autoComplete="off"
                required
                className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5  text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="telefono"
              className="block text-sm font-medium leading-6  text-bg dark:text-wh"
            >
              Telefono
            </label>
            <div className="mt-2">
              <input
                id="telefono"
                name="telefono"
                type="tel"
                value={telefono}
                onChange={onInputChange}
                autoComplete="off"
                required
                className="block w-full bg-wh dark:bg-bg rounded-md border-0 py-1.5  text-bg dark:text-wh shadow-sm ring-1 ring-inset ring-brand placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button className="flex w-full justify-center rounded-md bg-brand px-3 py-1.5 text-sm font-semibold leading-6 text-bg shadow-sm hover:bg-dbrand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Registrarse
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-bg dark:text-wh">
          ¿Ya tienes una cuenta?{" "}
          <Link
            to="/Login"
            className="font-semibold leading-6 text-brand hover:text-dbrand"
          >
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
