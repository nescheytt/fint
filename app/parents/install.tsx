import Head from "next/head"
import Image from "next/image"
import Script from "next/script"
import HeadSection from "../../components/pages/parents/HeadSection"

export default function Install() {
  return (
    <>
      <HeadSection />
      <Head>
        <style>{`
          body {
            font-family: ui-sans-serif,system-ui,-apple-system,sans-serif;
            max-width: 800px !important;
            margin: 0 auto !important;
          }

          header {
            padding: 10px 20px;
            margin: 20px 0;
          }

          section {
            padding: 0 20px;
            margin: 30px 0;
            border-radius: 10px;
          }

          .intro-app {
            display: flex;
            gap: 10px;
          }

          .intro-app h1 {
            font-size: 18px;
          }

          .intro-app img {
            border-radius: 30px;
          }

          .carousel {
            padding: 0 15px;
            margin: 0 -20px;
            display: flex;
            gap: 10px;
            overflow-x: auto;
            overflow-y: hidden;
            list-style: none;
            overscroll-behavior-x: contain;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
          }

          .carousel img {
            border-radius: 10px;
            padding: 10px;
            background-color: #1a433b;
            max-width: none;
            box-sizing: content-box;
          }

          .install-btn {
            width: 100%;
            height: 55px;
            border: 1px solid #1a433b;
            background: #1a433b;
            color: #fff;
            border-radius: 20px;
            padding: 15px 30px;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 14px;
            margin-top: 20px;
            cursor: pointer;
          }

          .install-btn span {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 3px;
          }

          .modal {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0,0,0,.6);
          }

          .modal-content {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            border-radius: 25px 25px 0 0;
            height: 220px;
            background-color: white;
            padding: 20px 15px;
          }

          .modal-content:before {
            content: "";
            width: 80px;
            height: 7px;
            background-color: #e9e8ee;
            border-radius: 25px;
            display: flex;
            margin: 0 auto;
          }

          .modal ol {
            padding-left: 20px;
          }

          .modal li div {
            margin: 10px 0;
            display: inline-flex;
            align-items: center;
            flex-flow: wrap;
            gap: 5px;
          }

          .modal strong svg {
            vertical-align: middle;
          }
        `}</style>
      </Head>

      <header>
        <div className="intro-app">
          <Image
            width="140"
            height="140"
            src="/assets/apple-icon-180.png"
            alt="Logo"
          />
          <div>
            <h1>Fint Parents</h1>
            <a href="https://parents.fint.app">parents.fint.app</a>
          </div>
        </div>
        <button
          id="install-btn"
          className="header-btn install-btn"
          aria-label="Instalar"
        >
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#9AA495"
              aria-hidden="true"
            >
              <path d="M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-3h-2z"></path>
              <path d="m17 11.5-1.4-1.4-2.6 2.6V4h-2v8.7L8.4 10 7 11.5l5 5z"></path>
            </svg>
            Instalar
          </span>
        </button>
      </header>
      <main>
        <section id="description">
          <h3>Acerca de Fint Parents</h3>
          <p>
            Explora la amplia colección de títulos de videojuegos en el catálogo
            de juegos de Xbox en precios argentinos con impuentos incluídos.
          </p>
        </section>

        <section id="screenshots">
          <h3>Screenshots</h3>
          <ul className="carousel">
            <li>
              <Image
                width="240"
                height="520"
                src="/assets/screenshot-1.jpg"
                alt=""
              />
            </li>
            <li>
              <Image
                width="240"
                height="520"
                src="/assets/screenshot-2.jpg"
                alt=""
              />
            </li>
            <li>
              <Image
                width="240"
                height="520"
                src="/assets/screenshot-3.jpg"
                alt=""
              />
            </li>
            <li>
              <Image
                width="240"
                height="520"
                src="/assets/screenshot-4.jpg"
                alt=""
              />
            </li>
          </ul>
        </section>

        <section id="what-is-pwa">
          <h3>¿Qué es esta app?</h3>
          <p>
            Esta app es una PWA. Una PWA parece una app normal, excepto que
            permite un mejor desarrollo y es más segura. Se puede instalar en
            cualquier dispositivo y usa muy poco espacio de almacenamiento. Una
            PWA no puede acceder a los datos de tu dispositivo ni a tu
            información personal.
          </p>
        </section>

        <section id="availability">
          <h3>Disponibilidad</h3>
          <p>
            Fint Parents se puede instalar directamente en tu dispositivo. Esta
            app está disponible en Android (con Chrome o Samsung Internet), iOS
            (con Safari), macOS (con Chrome o Edge) y Windows. Simplemente tocá
            el botón «Instalar» en la parte superior de la página.
          </p>
        </section>
      </main>

      <div className="modal" hidden>
        <div className="modal-content">
          <h3>Instala la app</h3>
          <ol>
            <li>
              <div>
                Tocá
                <svg height="22" viewBox="0 0 24 24" width="22">
                  <path
                    fill="#007AFF"
                    d="M13 6v10h-2V6L9.5 7.5 8 6l4-4 4 4-1.5 1.5L13 6zM6 8h3v2H6v10h12V10h-3V8h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z"
                  />
                </svg>
                en la barra de pestañas.
              </div>
            </li>
            <li>
              <div>
                Desplazaté y seleccioná{" "}
                <strong>
                  Agregar a Inicio{" "}
                  <svg
                    fill="none"
                    height="22"
                    viewBox="0 0 24 24"
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 8h2v3h3v2h-3v3h-2v-3H8v-2h3V8Z"
                      fill="currentColor"
                    />
                    <path
                      clipRule="evenodd"
                      d="M4 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4Zm16 2H4v16h16V4Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </svg>
                </strong>
              </div>
            </li>
            <li>
              <div>
                Buscá el ícono{" "}
                <Image
                  width="32"
                  height="32"
                  src="/assets/apple-icon-180.png"
                  alt="logo"
                />{" "}
                en tu pantalla de inicio.
              </div>
            </li>
          </ol>
        </div>
      </div>

      <Script id="script-install-app">{`
        let deferredPrompt = null;

        window.addEventListener('appinstalled', () => {
          window.location = '/parents';
        });

        window.addEventListener('beforeinstallprompt', (eve) => {
          eve.preventDefault();
          deferredPrompt = eve;
        });

        const $installBtn = document.querySelector('#install-btn');

        if (navigator.userAgent.includes('iPhone;')) {
          $installBtn.addEventListener('click', () => {
            document.querySelector('.modal').toggleAttribute('hidden');
          });
          document.querySelector('.modal').addEventListener('click', function() {
            this.toggleAttribute('hidden');
          });

        } else {
          $installBtn.addEventListener('click', () => {
            if (deferredPrompt) {
              deferredPrompt.prompt();
            }
          });
        }
      `}</Script>
    </>
  )
}
