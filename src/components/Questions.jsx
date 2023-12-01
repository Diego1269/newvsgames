import React from "react";
import logoVision from "../assets/img/ojo-abierto.png";

const Questions = () => {
  return (
    <section className="flex flex-wrap justify-center items-center py-20 px-40 mx-20 text-bg dark:text-wh">
      <div className="flex-basis-1/2 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-bg dark:text-wh sm:text-6xl">
          Preguntas Frecuentes
        </h1>
        <img src={logoVision} alt="logo de visiongames" className="w-30 m-20" />
      </div>
      <div className="flex-basis-1/2 text-left">
        <div className="p-4">
          <h3 className="font-bold text-lg">
            ¿Cómo funciona el proceso de compra de videojuegos en VisionGames?
          </h3>
          <p className="text-base mb-4">
            En VisionGames, el proceso de compra es simple y conveniente.
            Explora nuestro catálogo, selecciona los videojuegos que desees y
            agrégales al carrito de compras. Luego, sigue las instrucciones para
            realizar el pago de manera segura. Una vez completada la
            transacción, recibirás instrucciones para descargar o acceder a tus
            videojuegos digitales de Xbox.
          </p>
          <h3 className="font-bold text-lg">
            ¿Cómo puedo asegurarme de que mi información personal esté protegida
            al comprar en VisionGames?
          </h3>
          <p className="text-base mb-4">
            En VisionGames, tomamos la privacidad y seguridad de tus datos muy
            en serio. Utilizamos medidas de seguridad avanzadas para proteger tu
            información personal y financiera. Además, nunca compartimos tus
            datos con terceros sin tu consentimiento. Te invitamos a revisar
            nuestra Política de Privacidad para obtener más detalles sobre cómo
            manejamos y protegemos tu información.
          </p>
          <h3 className="font-bold text-lg">
            ¿Qué diferencia a VisionGames de otras plataformas de venta de
            videojuegos digitales para Xbox?
          </h3>
          <p className="text-base mb-4">
            En VisionGames, nos destacamos por ofrecer una selección exclusiva
            de videojuegos digitales, colaborando directamente con
            desarrolladores líderes y editoriales reconocidas. Nuestra
            plataforma se centra en proporcionar una experiencia de compra fácil
            y segura, respaldada por un compromiso inquebrantable con la
            satisfacción del cliente. Además, nos esforzamos por construir una
            comunidad apasionada de jugadores. ¡Descubre la diferencia
            VisionGames y únete a una experiencia de juego única!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Questions;
