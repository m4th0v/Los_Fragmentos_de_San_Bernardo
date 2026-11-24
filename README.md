# Los Fragmentos Perdidos de San Bernardo

Sitio estático (HTML + CSS + JavaScript puros). No necesita instalación ni servidor.

## Archivos
- `index.html` — estructura y textos de todas las secciones.
- `css/styles.css` — colores, tipografías y diseño (variables en `:root`).
- `js/data.js` — **el archivo que más vas a editar**: contacto, destinos, enlaces de reserva, línea de tiempo, flora y fauna.
- `js/main.js` — lógica: tarjetas, reservas, menú, Almendra.
- `assets/img/` — imágenes (Almendra y fotos de la imagen de referencia).
- `.nojekyll` — evita que GitHub Pages procese el sitio con Jekyll.

## Verlo en tu computador
Abre `index.html` con doble clic. (Opcional: `python -m http.server` en la carpeta y visita http://localhost:8000.)

## Subirlo a GitHub y publicarlo
1. Crea un repositorio en github.com y sube **todo el contenido de esta carpeta** (con `index.html` en la raíz).
2. En el repositorio: Settings → Pages → *Build and deployment* → Source: **Deploy from a branch** → Branch: `main` / carpeta `/ (root)` → Save.
3. En 1–2 minutos estará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.

## Qué editar
- **Contacto**: `js/data.js` → `contacto` (Instagram, WhatsApp con código de país, correo). Vacío = botón "Próximamente".
- **Enlaces de reserva**: `js/data.js` → en cada destino, `reservaUrl`, `disponibilidadUrl`, `masInfoUrl`.
- **Nuevo destino**: copia un bloque dentro de `destinos` y cambia sus datos; la tarjeta y la sección de reservas aparecen solas. Sube su foto a `assets/img/` y pon la ruta en `foto`.
- **Historia, flora y fauna**: completa `lineaDeTiempo`, `flora` y `fauna` en `cantera`.
- **Fotos de iniciativas**: reemplaza los recuadros `photo-slot` en `index.html` por `<img>`.

## Ampliación (v2)
- Nuevos destinos: Casa de la Cultura Manuel Magallanes Moure y Cervecería Cerros de Chena (en `js/data.js`).
- Cerro La Cantera: tarjetas de flora y fauna, y la sección "Todo está conectado".
- Cada destino admite `foto`, `horarios`, `condiciones`, `reservaUrl`, `disponibilidadUrl`, `masInfoUrl` y `contactoUrl`.
