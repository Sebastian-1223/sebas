import React from "react";

function Registro() {
  return (
    <form class="form-signin">
      <img
        class="mb-4"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUhlvP///8Aj/IAkPIXlPMVk/PT6Pzr9v4AjfK31vrh7/3b7P1nsfbR5PzC3vtXqvX0+f5erfXG4PsmmPOgzPmu0/p7ufdwtPbp9P6SxfiEvvcAifI7n/RPp/XJ4vuv1PqYyPgznfSBvPdIwEgiAAAGLklEQVR4nO2d2XbiMAxAvbZhmRBIINAmtPT/P3IIkEJZs0iW4uP7wiv3eFcsWciacZYXqfCBtMiz8a+XOP3GpbLGUP83IIzRqoz/GCal8sWuxqhZcjacGEv9hxCwYlwbTrxrwBN6fDR8t54K7kkOhqWPXfSInVeGsaL+H4hE271h4W8f3c+opRQTn5tQCDUWmb+jsEIvxdTnTrqfa1Zi57ehKYUfm+3H+O4XCAQCgUAgEAgE/MNYq2v8+YJwwlitbJlvlqN4sd1u41E2TZU/4RNjlci/zh+DTmxzTxyNSjdv13ZH1nMP4nxWzeL7egdGQ/9iYqLp5Ilf9Vl20N9MjJrdDL5bRT1cRSue9c9f/g11LBqVN/Hbs4kG2YpGN2rAA9l8vwOg/sNtsbt1Y8GKONfDGo963sqvIvlKB+SoVq0FK5ZCU//zhuifToJ7NsOYV3W3FjwwSQcw5dj2Y/CSOfueana9BKVcMe+pxr73NJQfvBWj5gv9Q3LOHdU23ao9peS7MBqRQBgyvoamAPpoxYjrUDQzGEEpZ0wbUb040DdnzLMR7RRKUMoflnubCKwJpVxzbES4UVgxZdiILU71DWAYvjEGUlDKlN10aj9gDT/YdVP1IHTflTdu3dSI13+6HdwMIRfDI3NmA1EvoQ2/mQ1EuB1bzYLZMTGCFuS2rekdnrmDYDUQDfhEI2VBLfUH6PW+gtdkar/hDXntavQXvCGv5UKP4A0zVssFhuGX94Yj7w3jYOgUDMOt94a8QjXBMBgGQ3p8NzRKLOANJymb+7W63ML7VbwxuSatMhy/ihGHy24KoYOeYRD61ogtWEH+Td8UuIL04RqFNMmcIS6+YlJsQeoviRhx0mtWpBEpu8E3pI1IYcRJr6GN12DEuq+hbUPYKyb3oR2HwoLcRnwK8Tco+G+/1yyINzX4CyJ5PTnbI/mgCRv6mKJCXRKX1BvvCjXFm22Y5CZYkfXOQbhHsmSTQmN0tJtO54CTTjnPp7uIwwH/F7NHw7WktSyrLmiweAbTe96AB40l/RJxF1NCGbItyBlBLRtcptAboDapvL7+XgLVTTle1D+hXpeJaEDCdCatgDnyf7PtpHs0hCG/RIQLIJZErovhCYCdG8ft2gX9D8QMjrzP6ZvBNuYuKMSunyHjNOea7mUxKlivFDV98p053b94QvfskjXfPPU/GNFxyUhYr/WXmF23Y1TBd8d9jS26KA7qwRubtu6oyYBasMLYf+0EJ8w3a7cY1erzcMbmDlsLohaZwetP6n/bhTa5z+/DWOmvCIbBkD/BMBjyJxgGQ/4Ew2DIn2A4dEOjP9sYfg6saLnVajpqFalJ4lwNRtJonXe6OxSv7BBi+lYVy86XTpJlwf1pFqvynl/XJivOjlat2r0YcJc1W0ejcgC/ivcfjo6N3lxpDMNnhHQKWtxTym3Kal41CiE76JtRM9oUuPDlkcmOSzN2fLGjAT8smtEohDpfNeR5zpWgAK8JeclYUK8b3b72tiAh/jJswa52P2ZGOd90ePaoA1M6RTeChI/PWAcpsidFmrGIUZX1ESRplgCP5jQnoUgGVi2vk/SDoIoLZt2de2SuFd3NMjUzx7ONxs/DvyJxe2lKIVQve4XTXbiLYhG3uHxBKAIMyTTHYWYpdpWBR7irAQKY0twKZ0ltVE3o7hmoCCjw2561m0OGcXRmuoebFGj8Em2P2boYiS4PTbe4yMhwUcDsMRsHcw38izJtcFBjkLaTuuimLiq0PQP/XQ/YJ/Lag19vwf3B8C/oOzfqYYj/hBDdnrQmRx6I+DX2XoFdkEATbtmOYD97ocjOFTXYJ31LLSglbhvST6XY1T7hil11B3e5cFH7+RW4Jczpl0PsiBsHQ9y9t+1V1gMG3EMwB0PcVwNtTu2HHshoW0gAHvTSBNS3d62D0gSGFHS9QCAQCAQCgQAJKfUfQCYV5M+44GIKkXtumAvaF7HQ0UvB9SkJINRY0L+nhIkppZCxz42oFnvDYZUNbUd1335vmAykeG8XkoOhnAyxsmYTdHVZWxxDkD52VCsOt9EPhjIpvWtGo2bHmz/iFEmOS8XyDalOGKNVWd/dEudoeZYXfmzD0yLPzukS/wHbDGC4FMli9AAAAABJRU5ErkJggg=="
        alt=""
        width="72"
        height="72"
      />
      <h1 class="h3 mb-3 font-weight-normal">Crear Cuenta</h1>
      <label for="inputNombre" class="sr-only">
        Nombre{" "}
      </label>
      <input
        type="Nombre"
        id="inputNombre"
        class="form-control"
        placeholder="Nombre "
        required=""
        autofocus=""
      />
      <label for="inputApellido" class="sr-only">
        Apellido{" "}
      </label>
      <input
        type="Apellido"
        id="inputApellido"
        class="form-control"
        placeholder="Apellido "
        required=""
        autofocus=""
      />
      <label for="inputCelular" class="sr-only">
        Numero de celular
      </label>
      <input
        type="Celular"
        id="inputCelular"
        class="form-control"
        placeholder="Celular"
        required=""
        autofocus=""
      />
      <label for="inputEmail" class="sr-only">
        Email{" "}
      </label>
      <input
        type="Email"
        id="inputEmail"
        class="form-control"
        placeholder="Email adress "
        required=""
        autofocus=""
      />
      <label for="inputApodo" class="sr-only">
        Apodo{" "}
      </label>
      <input
        type="Apodo"
        id="inputApodo"
        class="form-control"
        placeholder="Apodo "
        required=""
        autofocus=""
      />
      <label for="inputPassword" class="sr-only">
        Password
      </label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required=""
      />
      <label></label>
      <button
        class="Boton"
        class="btn btn-lg btn-primary btn-block"
        type="submit"
      >
        iniciar sesion
      </button>
    </form>
  );
}

export default Registro;
