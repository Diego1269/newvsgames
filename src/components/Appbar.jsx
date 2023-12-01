import { Fragment, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logoVision from "../assets/img/ojo-abierto.png";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserByEmail, createUser } from "../api/usuario.api";
import Loading from "./Loading";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const navigation = [
  { name: "Inicio", href: "/", current: false },
  { name: "Categorias", href: "/Categorias", current: false },
  { name: "Catalogo", href: "/Catalogo", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const { loginWithRedirect, isAuthenticated, isLoading, logout, user } =
    useAuth0();

  const [Cart, setCart] = useContext(CartContext);

  const quantity = Cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  useEffect(() => {
    if (isAuthenticated) {
      const buscarCorreo = async () => {
        try {
          const res = await getUserByEmail(user.email);

          if (res.data === 0) {
            await createUser({
              usuario: {
                name: user.name,
                email: user.email,
                picture: user.picture,
                privilegio_id: 2,
              },
            });
          }
        } catch (error) {
          console.error("Error during email search:", error);
        }
      };

      buscarCorreo();
    }
  });

  const navigate = useNavigate();

  if (isLoading) return <Loading />;

  return (
    <>
      <Disclosure as="nav" className="bg-wh dark:bg-bg">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-bg hover:bg-brand hover:text-white dark:text-wh focus:outline-none focus:ring-2 focus:ring-inset">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Abrir menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src={logoVision}
                      alt="VisionGames videojuegos"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-dwh text-dbrand dark:text-brand dark:bg-dbg "
                              : "text-bg dark:text-wh hover:bg-dwh dark:hover:bg-dbg hover:text-dbrand dark:hover:text-brand",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    onClick={() => navigate("/Carrito")}
                    className="relative rounded-full bg-wh dark:bg-bg p-1 text-bg dark:text-wh hover:text-dbrand dark:hover:text-brand focus:outline-none focus:ring-20"
                  >
                    <span className="absolute -inset-1.5 bg-brand rounded-full mx-3 my-3 text-xsm">
                      {quantity}
                    </span>
                    <span className="sr-only"></span>
                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-wh dark:bg-bg text-bg dark:text-wh text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        {isAuthenticated ? (
                          <img
                            className="h-10 w-10 rounded-full"
                            src={user.picture}
                            alt={user.name}
                          ></img>
                        ) : (
                          <UserIcon className="h-6 w-6" aria-hidden="true" />
                        )}
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-wh dark:bg-bg dark:text-wh py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {isAuthenticated ? (
                          <div>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  onClick={() => logout()}
                                  className={classNames(
                                    active ? "bg-dbrand" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Cerrar Sesión
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        ) : (
                          <div>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  onClick={() => loginWithRedirect()}
                                  className={classNames(
                                    active ? "bg-dbrand" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Ingresar
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  onClick={() => loginWithRedirect()}
                                  className={classNames(
                                    active ? "bg-dbrand" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Registrarse
                                </a>
                              )}
                            </Menu.Item>
                          </div>
                        )}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {isAuthenticated && (
        <div className="bg-brand text-white p-4 text-center flex justify-center">
          <h1 className="text-xl font-bold">Has iniciado sesion</h1>
          <button
            className="text-xl font-bold rounded-md bg-bg hover:bg-dbg mx-2 px-2"
            onClick={() => {
              navigate(`/dashboard`);
            }}
          >
            Ir a dashboard
          </button>
        </div>
      )}
      <Outlet />
    </>
  );
}
