import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="relative overflow-hidden bg-wh dark:bg-dbg">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-wh sm:text-6xl">
              Los nuevos juegos para Xbox están aquí
            </h1>
            <p className="mt-4 text-xl text-gray-500 dark:text-wh">
              Encuentra los mejores juegos para Xbox en este sitio, a los
              mejores precios que se pueden ofrecer actualmente.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://imgs.search.brave.com/2eVK4pOiuZzTr5yIXiYeunOWva0dubiHy2M3CQqBMq8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxS0o4UmdGM0dM/LmpwZw"
                          alt="1"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://imgs.search.brave.com/fssMj5IqfqjkpVRpsEqVb7ONDTRp7RZGGWcwzrfWDwE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxTGRtZy1ZNFFM/LmpwZw"
                          alt="2"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://imgs.search.brave.com/azn7AobLiZ8SOlQfbywc8IGGDeCwg4qY7QuSc_wazM0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxamtnSEhNQmxM/LmpwZw"
                          alt="3"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://imgs.search.brave.com/LNNh_9mulGObqUCQJY-HzuMP5jCLLOlDvOsUtjg-1k4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFvQXczcnRtSkwu/X0FDLl9TUjE4MCwy/MzAuanBn"
                          alt="4"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://imgs.search.brave.com/SrqeIUu4lVxTVUvROCEJOjq1EljloaBAH--KTP_nfXk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxMFNnNC1wRmNM/LmpwZw"
                          alt="5"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://imgs.search.brave.com/sTfU03AcYfP1_OSUbrJTf0nakNTqnFqW6nXB8BIc2T4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFVS2d3eDY3Tkwu/X0FDLl9TUjE4MCwy/MzAuanBn"
                          alt="6"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://imgs.search.brave.com/bfqU29LE9DNpRX6KBqdQNxj9y3lUoGcL9Bo17zE97mA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDExOXAtWVdjNkwu/anBn"
                          alt="7"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/Catalogo"
                className="inline-block rounded-md border border-transparent bg-brand px-8 py-3 text-center font-medium text-bg hover:bg-dbrand"
              >
                Catalogo de juegos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
