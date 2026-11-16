const params = new URLSearchParams(window.location.search);
const genero = params.get("genero");
const categoryLabel = document.getElementById("article-category");

if (genero && categoryLabel) {
  const nombres = {
    tango: "TANGO / ARTÍCULO",
    salsa: "SALSA / ARTÍCULO",
  };
  categoryLabel.textContent =
    nombres[genero.toLowerCase()] || "ARTÍCULO / MUSIK";
}
