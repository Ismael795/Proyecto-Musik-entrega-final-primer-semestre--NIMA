const form = document.querySelector("#form-contacto");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.querySelector("#nombre").value.trim();
  const email = document.querySelector("#email").value.trim();
  const asunto = document.querySelector("#asunto").value.trim();
  const mensaje = document.querySelector("#mensaje").value.trim();

  if (!nombre || !email || !mensaje) {
    mostrarError("Nombre, email y mensaje son obligatorios.");
    return;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValido) {
    mostrarError("Ingresá un email válido, por ejemplo tu@email.com.");
    return;
  }

  console.log({ nombre, email, asunto, mensaje });
  mostrarExito("¡Gracias " + nombre + "! Tu mensaje fue enviado.");
  form.reset();
});

function mostrarError(texto) {
  const alerta = document.querySelector("#alerta");
  alerta.textContent = texto;
  alerta.className = "alert alert-danger";
}

function mostrarExito(texto) {
  const alerta = document.querySelector("#alerta");
  alerta.textContent = texto;
  alerta.className = "alert alert-success";
}
