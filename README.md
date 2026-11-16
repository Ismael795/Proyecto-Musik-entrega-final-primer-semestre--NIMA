MUSIK — Revista Digital de Música

MUSIK es una revista digital hecha como proyecto de la escuela. Habla de dos géneros musicales: el tango y la salsa. Cada género tiene su propio artículo con introducción, historia, un artista importante, conclusión y bibliografía.

El proyecto tiene dos partes:

front: la página web que ve el usuario (HTML, CSS, Bootstrap y un poquito de JavaScript).
back: una API hecha con Node.js y Express que devuelve los artículos en formato JSON.
Integrantes
Ismael Viera Casas
mateo eula
Estructura del proyecto
proyecto/
├── front/
│ ├── index.html <- página de inicio
│ ├── tango.html <- artículo de tango
│ ├── salsa.html <- artículo de salsa
│ ├── css/
│ │ └── styles.css <- estilos
│ └── js/
│ └── app.js
└── back/
├── index.js <- servidor Express
├── package.json
├── .env <- variables de entorno (NO se sube a GitHub)
├── .env.example <- plantilla de las variables
└── .gitignore
Cómo correr el proyecto paso a paso

1. Clonar el repositorio
   git clone <link-del-repositorio>
2. Correr el front

El front no necesita instalar nada. Hay dos formas de verlo:

Abrir la carpeta front/ en VS Code, hacer clic derecho en index.html y elegir Open with Live Server (queda en http://localhost:5500).
O simplemente abrir el archivo index.html con el navegador.

Se necesita internet porque Bootstrap, la tipografía Montserrat y las imágenes se cargan desde links externos.

3. Correr el back
   Entrar a la carpeta del back:
   cd back
   Instalar las dependencias:
   npm install
   Crear el archivo .env copiando la plantilla:
   cp .env.example .env
   Abrir el .env y completar los valores:
   PORT=3000
   CORS_ORIGIN=http://localhost:5500,http://127.0.0.1:5500
   Iniciar el servidor en modo desarrollo:
   npm run dev
   Si todo salió bien, en la consola aparece:
   Servidor corriendo en http://localhost:3000
   Rutas de la API
   Método Ruta Descripción
   GET /articulos Devuelve todos los artículos
   GET /articulos/:id Devuelve un artículo por su id
   POST /articulos Crea un artículo nuevo

Ejemplo para probar el POST (con Thunder Client, en Body → JSON):

json
{
"titulo": "Artículo de prueba",
"autor": "Tu nombre",
"categoria": "Prueba",
"descripcion": "Descripción del artículo de prueba."
}

Respuestas posibles:

201: el artículo se creó bien.
400: faltan campos obligatorios (título, autor o descripción).
404: el artículo o la ruta no existen.
Tecnologías usadas
HTML5
CSS3
Bootstrap 5
JavaScript
Node.js
Express
dotenv
CORS
nodemon
Páginas del sitio
Inicio: presentación de la revista y tarjetas para elegir el género.
Tango: historia del tango rioplatense, Carlos Gardel, Astor Piazzolla y el reconocimiento de la UNESCO en 2009.
Salsa: cómo nació la salsa de la migración, Fania Records y Héctor Lavoe.
Cosas importantes
El archivo .env no se sube a GitHub, solo el .env.example.
La carpeta node_modules/ tampoco se sube (está en el .gitignore).
Las fuentes de cada artículo están en la bibliografía al final de cada página.
