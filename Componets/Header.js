import React from "react";

function Header() {
  return (
    <div className="Color" id="color">
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom shadow-sm">
        <h5 class="my-0 mr-md-auto font-weight-normal p-2 text-white">
          Medio de Transporte Vehicular(MTV)
          <a class="p-2 text-white" href="/">
            Ayuda
          </a>
          <a class="p-2 text-white" href="/">
            Seguridad
          </a>
        </h5>

        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-person-fill"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
          />
        </svg>

        <nav class="my-2 my-md-0 mr-md-3">
          <a class="p-2 text-white " href="https://www.facebook.com/">
            Facebook
          </a>
          <a class="p-2 text-white" href="https://twitter.com/home">
            Twiter
          </a>
          <a class="p-2 text-white" href="/">
            Inicia sesión
          </a>
        </nav>
        <a class="btn btn-outline-light" href="#">
          Sign up
        </a>
      </div>
      <div class="dropdown"></div>
    </div>
  );
}

export default Header;
