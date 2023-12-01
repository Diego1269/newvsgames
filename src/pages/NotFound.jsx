import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
          <main className="grid min-h-full place-items-center bg-wh dark:bg-bg px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
              <p className="text-base font-semibold text-dbrand dark:text-brand">404</p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-bg dark:text-wh sm:text-5xl">Page not found</h1>
              <p className="mt-6 text-base leading-7 text-bg dark:text-wh">Entraste a un lugar que todavia no esta listo</p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/"
                  className="rounded-md bg-brand px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-dbrand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  Ir a inicio
                </Link>
                <Link to="/About" className="text-sm font-semibold text-bg dark:text-wh">
                  Contactanos <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </main>
        </>
      )
}

export default NotFound