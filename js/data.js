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
      seccionDetalle: "cantera",
      etiquetaReserva: "Reservar visita",
      contactoUrl: ""
    },

    /* ---------- NUEVO: Casa de la Cultura ---------- */
    {
      id: "casa-de-la-cultura",
      nombre: "Casa de la Cultura Manuel Magallanes Moure",
      etiqueta: "Arte · Cultura · Patrimonio",
      foto: null,                // ← pon aquí la ruta de una foto, ej. "assets/img/casa-cultura.jpg"
      fotoAlt: "Casa de la Cultura Manuel Magallanes Moure",
      icono: "ico-culture",
      descripcionCorta:
        "Ubicada en el Parque García de la Huerta, es un espacio dedicado a la promoción del arte, la cultura y el patrimonio de San Bernardo.",
      descripcion:
        "Ubicada en el Parque García de la Huerta, la Casa de la Cultura Manuel Magallanes Moure es un espacio dedicado a la promoción del arte, la cultura y el patrimonio de San Bernardo. Su entorno combina arquitectura histórica, áreas verdes y espacios destinados al encuentro de la comunidad.",
      info: [
        "Parque García de la Huerta",
        "Exposiciones y talleres",
        "Algunas actividades con inscripción"
      ],
      queHacerTitulo: "¿Qué puedes hacer?",
      queHacer: [
        "Visitar exposiciones artísticas y culturales.",
        "Participar en talleres de arte, música y otras disciplinas.",
        "Disfrutar de presentaciones teatrales y musicales.",
        "Participar en actividades patrimoniales y encuentros culturales.",
        "Recorrer los jardines del Parque García de la Huerta."
      ],
      fichaExtra: [
        {
          titulo: "Actividades con inscripción o entrada anticipada",
          texto: "Dependiendo de la programación cultural, algunas actividades pueden requerir inscripción previa o retiro anticipado de entradas debido a sus cupos limitados, especialmente los talleres, las obras de teatro, los conciertos y las actividades especiales."
        },
        {
          titulo: "Condiciones de acceso",
          texto: "Las condiciones de acceso, inscripciones y entradas dependen de la programación vigente. Consulta la información actualizada antes de tu visita."
        }
      ],
      sabiasQue: "",
      destacado: "",
      horarios: "",              // ← horarios confirmados (texto), o ""
      condiciones: "",           // ← condiciones de visita confirmadas, o ""
      etiquetaReserva: "Consultar actividades",
      reservaUrl: "",            // ← enlace oficial de actividades / inscripción
      disponibilidadUrl: "",
      masInfoUrl: "",
      contactoUrl: "",           // ← contacto directo (web, correo, WhatsApp) de la institución
      seccionDetalle: null
    },

    /* ---------- NUEVO: Cervecería Cerros de Chena ---------- */
    {
      id: "cerros-de-chena",
      nombre: "Cervecería Cerros de Chena",
      etiqueta: "Gastronomía · Emprendimiento local",
      foto: null,                // ← pon aquí la ruta de una foto, ej. "assets/img/cerros-de-chena.jpg"
      fotoAlt: "Cervecería Cerros de Chena",
      icono: "ico-beer",
      descripcionCorta:
        "Una propuesta cervecera local vinculada a la identidad de San Bernardo, para acercarse al mundo de la cerveza artesanal.",
      descripcion:
        "Cerros de Chena es una propuesta cervecera local vinculada a la identidad de San Bernardo, que permite acercarse al mundo de la cerveza artesanal y reconocer el valor de los emprendimientos gastronómicos de la comuna. Representa una alternativa para quienes buscan descubrir productos locales y disfrutar de experiencias diferentes dentro de San Bernardo.",
      info: [
        "Cerveza artesanal",
        "Producto local",
        "Experiencias con reserva previa"
      ],
      queHacerTitulo: "¿Qué puedes descubrir?",
      queHacer: [
        "Variedades de cerveza artesanal.",
        "Características, aromas y sabores de sus productos.",
        "La producción cervecera local.",
        "El valor de los emprendimientos y la identidad territorial."
      ],
      fichaExtra: [
        {
          titulo: "Experiencias con reserva previa",
          texto: "Las visitas a las instalaciones, degustaciones guiadas y posibles experiencias cerveceras deben consultarse directamente con el emprendimiento para conocer su disponibilidad, condiciones, valores y modalidad de reserva."
        }
      ],
      sabiasQue: "El turismo cervecero forma parte del turismo gastronómico y permite conocer la identidad de un destino a través de sus productos, procesos de elaboración y productores locales.",
      destacado: "Experiencia gastronómica local",
      horarios: "",
      condiciones: "",
      etiquetaReserva: "Consultar disponibilidad",
      reservaUrl: "",
      disponibilidadUrl: "",
      masInfoUrl: "",
      contactoUrl: "",           // ← contacto directo del emprendimiento
      seccionDetalle: null
    }
  ],

  /* ---------- NÚMERO DE "ESPACIOS PARA NUEVOS DESTINOS" EN LA GRILLA ---------- */
  espaciosLibres: 1,

  /* ---------- CERRO ESCUELA LA CANTERA: CONTENIDO POR COMPLETAR ---------- */
  cantera: {
    // Línea de tiempo. Agrega solo fechas y hechos confirmados oficialmente.
    // Ejemplo: { anio: "AAAA", titulo: "Título del hito", texto: "Descripción confirmada." }
    lineaDeTiempo: [],

    // Flora. Campos: nombre, cientifico, foto (ruta o ""), icono (respaldo ilustrado),
    // texto, etiquetas (opcional).
    flora: [
      {
        nombre: "Pimiento o Molle",
        cientifico: "Schinus molle / Schinus latifolius",
        foto: "",
        icono: "ico-tree",
        etiquetas: ["Sombra", "Alimento para aves"],
        texto: "Árbol resistente de bajo requerimiento hídrico que ayuda a crear sombra, alimento para aves y barreras vegetales en el cerro."
      },
      {
        nombre: "Boldo",
        cientifico: "Peumus boldus",
        foto: "",
        icono: "ico-leaf",
        etiquetas: ["Árbol nativo", "Siempreverde"],
        texto: "Árbol nativo de follaje siempreverde y hojas muy aromáticas, incorporado en los nodos de vegetación nativa para reemplazar a los eucaliptos."
      },
      {
        nombre: "Quillay",
        cientifico: "Quillaja saponaria",
        foto: "",
        icono: "ico-tree",
        etiquetas: ["Endémico de Chile central", "Polinizadores"],
        texto: "Árbol endémico de la zona central de Chile, clave en la rehabilitación del bosque esclerófilo del cerro por su resistencia a la sequía y su aporte a los polinizadores."
      }
    ],

    // Fauna. Mismo formato que la flora.
    fauna: [
      {
        nombre: "Abejas nativas mineras y joya",
        cientifico: "ej. género Corynura (familia Halictidae)",
        foto: "",
        icono: "ico-bee",
        etiquetas: ["33 especies registradas", "Polinización"],
        texto: "En el cerro se han registrado 33 especies de abejas nativas, como las abejas mineras y de tonos metálicos de la familia Halictidae, favorecidas por las \"Comarcas\" de nidificación instaladas en el lugar."
      },
      {
        nombre: "Picaflor chico",
        cientifico: "Sephanoides sephaniodes",
        foto: "",
        icono: "ico-bird",
        etiquetas: ["Ave nativa", "Polinización"],
        texto: "Ave nativa que visita las flores del bosque y matorral esclerófilo para alimentarse de néctar y cumple un rol esencial en la polinización."
      },
      {
        nombre: "Lagartija esbelta",
        cientifico: "Liolaemus tenuis",
        foto: "",
        icono: "ico-lizard",
        etiquetas: ["Reptil nativo"],
        texto: "Reptil nativo habitual del matorral y bosque esclerófilo de la zona central, que utiliza los troncos reutilizados y rocas de las laderas para asolearse y refugiarse."
      }
    ]
  }
};
