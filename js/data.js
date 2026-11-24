/* ==========================================================================
   DATOS EDITABLES DEL SITIO
   Todo lo que cambia con frecuencia está aquí: contacto, destinos y fichas.
   No necesitas tocar el HTML para agregar destinos ni reemplazar enlaces.
   - Un valor vacío ("") o null significa "aún no disponible": el botón se
     muestra desactivado y Almendra avisa que el enlace llegará pronto.
   ========================================================================== */

window.SITE = {

  /* ---------- CONTACTO ---------- */
  contacto: {
    // Perfil completo, ej.: "https://www.instagram.com/tu_usuario/"
    instagramUrl: "",
    // Solo el nombre para mostrar, ej.: "@tu_usuario"
    instagramUsuario: "",
    // Número con código de país y sin signos ni espacios, ej.: "569XXXXXXXX"
    whatsappNumero: "",
    whatsappMensaje: "¡Hola! Me gustaría recibir ayuda para reservar una visita.",
    // Opcional. Si lo dejas vacío, no se muestra.
    correo: ""
  },

  /* ---------- DESTINOS ----------
     Para agregar un destino nuevo, copia uno de los bloques y complétalo.
     - foto: ruta de la imagen (ej. "assets/img/mi-lugar.jpg") o null
     - reservaUrl / disponibilidadUrl / masInfoUrl: enlaces OFICIALES o ""
     - seccionDetalle: id de una sección propia en la página (ej. "cantera") o null.
       Si es null, "Conocer más" abre una ventana con la ficha del lugar.
  */
  destinos: [
    {
      id: "cerro-escuela-la-cantera",
      nombre: "Cerro Escuela La Cantera",
      etiqueta: "Educación ambiental · Patrimonio natural",
      foto: "assets/img/ref-cerro.jpg",
      fotoAlt: "Vista del cerro con vegetación, tomada de la imagen de referencia del proyecto",
      descripcion:
        "Un espacio que promueve la educación ambiental, el reconocimiento de la biodiversidad local y la conexión de la comunidad con su patrimonio natural.",
      info: [
        "Senderos y espacios educativos",
        "Biodiversidad y conservación",
        "Requiere reserva previa"
      ],
      reservaUrl: "",
      disponibilidadUrl: "",
      masInfoUrl: "",
      seccionDetalle: "cantera"
    }
  ],

  /* ---------- NÚMERO DE "ESPACIOS PARA NUEVOS DESTINOS" EN LA GRILLA ---------- */
  espaciosLibres: 2,

  /* ---------- CERRO ESCUELA LA CANTERA: CONTENIDO POR COMPLETAR ---------- */
  cantera: {
    // Línea de tiempo. Agrega solo fechas y hechos confirmados oficialmente.
    // Ejemplo: { anio: "AAAA", titulo: "Título del hito", texto: "Descripción confirmada." }
    lineaDeTiempo: [],

    // Flora. Ejemplo: { nombre: "Nombre común", cientifico: "Nombre científico",
    //                   foto: "assets/img/flora-1.jpg", texto: "Por qué es importante." }
    flora: [],

    // Fauna. Mismo formato que la flora.
    fauna: []
  }
};
