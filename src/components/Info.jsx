import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import logoVision from "../assets/img/ojo-abierto.png";

export default function Info() {
  return (
    <div className="relative isolate overflow-hidden bg-wh dark:bg-dbg px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-brand">
                Acerca de:
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-bg dark:text-wh sm:text-4xl">
                VisionGames
              </h1>
              <p className="mt-6 text-xl leading-8 text-bg dark:text-wh">
                Bienvenido a VisionGames, tu destino definitivo para disfrutar
                de la experiencia de juego en Xbox como nunca antes. En
                VisionGames, nos apasiona brindarte acceso fácil y conveniente a
                una amplia variedad de emocionantes videojuegos digitales para
                Xbox.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-transparent shadow-xl sm:w-[57rem]"
            src={logoVision}
            alt="vision logo de visiongames"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-bg dark:text-wh lg:max-w-lg">
              <p>
                En VisionGames, nos esforzamos por ser tu socio de confianza en
                el mundo de los videojuegos digitales. Nuestra misión es
                proporcionar una plataforma donde los jugadores puedan explorar,
                descubrir y adquirir los títulos más emocionantes para Xbox,
                todo ello respaldado por un servicio excepcional.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-brand">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    className="mt-1 h-5 w-5 flex-none text-brand"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-bg dark:text-wh">
                      Compromiso con los jugadores
                    </strong>{" "}
                    Nos enorgullece nuestro compromiso con la comunidad de
                    jugadores. Estamos aquí para escucharte, responder a tus
                    preguntas y asegurarnos de que tu experiencia con
                    VisionGames sea excepcional. Tu satisfacción es nuestra
                    prioridad número uno.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    className="mt-1 h-5 w-5 flex-none text-brand"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-bg dark:text-wh">
                      Facilidad y seguridad
                    </strong>{" "}
                    Entendemos la importancia de la comodidad y la seguridad al
                    comprar videojuegos digitales. Por eso, en VisionGames,
                    hemos diseñado un proceso de compra fácil y seguro. Puedes
                    explorar nuestro catálogo, realizar compras con confianza y
                    disfrutar de tus juegos favoritos de inmediato.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-brand"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-bg dark:text-wh">
                      Nuestras redes de contacto
                    </strong>{" "}
                    Encuentranos cómo @visiongames__ en instagram.
                  </span>
                </li>
              </ul>
              <p className="mt-8 text-bg dark:text-wh">
                Gracias por elegir VisionGames como tu destino para los mejores
                videojuegos digitales en Xbox. Estamos emocionados de ser parte
                de tu viaje de juego.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-brand">
                Únete a la Comunidad VisionGames:
              </h2>
              <p className="mt-6 text-bg dark:text-wh">
                Explora, descubre y únete a la comunidad VisionGames. Síguenos
                en redes sociales para mantenerte actualizado sobre las últimas
                novedades, ofertas exclusivas y eventos especiales. Estamos
                construyendo una comunidad apasionada de jugadores, ¡y nos
                encantaría que formaras parte de ella!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
