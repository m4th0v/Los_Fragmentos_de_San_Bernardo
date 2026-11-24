/* ==========================================================================
   LOS FRAGMENTOS PERDIDOS DE SAN BERNARDO — comportamiento
   Lee los datos de js/data.js y construye tarjetas, reservas, línea de tiempo,
   enlaces de contacto y a Almendra. Sin dependencias externas.
   ========================================================================== */
(function () {
  "use strict";

  var SITE = window.SITE || { contacto: {}, destinos: [], cantera: {} };
  var C = SITE.contacto || {};

  /* ---------- utilidades ---------- */
  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "class") n.className = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else if (attrs[k] !== null && attrs[k] !== undefined && attrs[k] !== false) n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  function has(v) { return typeof v === "string" && v.trim() !== ""; }
  function safeUrl(u) { return /^https?:\/\//i.test(u) || /^mailto:/i.test(u); }

  /* Botón que lleva a un enlace oficial, o queda desactivado si aún no existe */
  function linkButton(label, url, extraClass, pendingMsg) {
    if (has(url) && safeUrl(url)) {
      return el("a", { class: "btn " + (extraClass || ""), href: url, target: "_blank", rel: "noopener noreferrer", text: label });
    }
    var b = el("a", { class: "btn " + (extraClass || ""), href: "#contacto", "aria-disabled": "true", text: label, title: "Enlace oficial próximamente" });
    b.addEventListener("click", function (e) {
      e.preventDefault();
      say(pendingMsg || "El enlace oficial de este destino aún no está disponible. ¡Escríbenos y te ayudamos con tu reserva!", true);
    });
    return b;
  }

  /* ---------- Almendra ---------- */
  var bubble = document.getElementById("almendra-bubble");
  var bubbleText = document.getElementById("almendra-text");
  var almBtn = document.getElementById("almendra-btn");
  var dot = almBtn.querySelector(".dot");
  var pendingMsg = "";
  var userClosed = false;

  function openBubble() { bubble.hidden = false; almBtn.setAttribute("aria-expanded", "true"); dot.hidden = true; }
  function closeBubble() { bubble.hidden = true; almBtn.setAttribute("aria-expanded", "false"); }
  function say(msg, forceOpen) {
    pendingMsg = msg; bubbleText.textContent = msg;
    if (forceOpen || !bubble.hidden) { openBubble(); } else if (!userClosed) { dot.hidden = false; }
  }
  almBtn.addEventListener("click", function () {
    if (bubble.hidden) { openBubble(); } else { closeBubble(); userClosed = true; }
  });
  bubble.querySelector(".bubble-close").addEventListener("click", function () { closeBubble(); userClosed = true; });
  bubble.querySelectorAll(".bubble-actions a").forEach(function (a) {
    a.addEventListener("click", function () { if (window.innerWidth < 600) closeBubble(); });
  });

  // Mensaje de bienvenida (una vez por visita)
  var greeted = false;
  try { greeted = sessionStorage.getItem("almendra-saludo") === "1"; } catch (e) {}
  var firstMsg = document.querySelector("#inicio").getAttribute("data-almendra");
  bubbleText.textContent = firstMsg; pendingMsg = firstMsg;
  if (!greeted && window.innerWidth >= 700) {
    setTimeout(function () { if (!userClosed) openBubble(); }, 1200);
    try { sessionStorage.setItem("almendra-saludo", "1"); } catch (e) {}
  } else { dot.hidden = false; }
  if (!greeted) { try { sessionStorage.setItem("almendra-saludo", "1"); } catch (e) {} }

  /* ---------- Destinos ---------- */
  var cardsBox = document.getElementById("cards-destinos");
  var modal = document.getElementById("modal");
  var modalBody = document.getElementById("modal-body");

  function openModal(d) {
    modalBody.textContent = "";
    if (has(d.foto)) modalBody.appendChild(el("img", { src: d.foto, alt: d.fotoAlt || d.nombre }));
    modalBody.appendChild(el("h3", { text: d.nombre }));
    modalBody.appendChild(el("p", { text: d.descripcion || "" }));
    if (d.info && d.info.length) {
      var ul = el("ul", { class: "modal-info" });
      d.info.forEach(function (t) { ul.appendChild(el("li", { text: t })); });
      modalBody.appendChild(ul);
    }
    modalBody.appendChild(el("p", { text: "Recuerda que este lugar requiere reserva previa." }));
    var row = el("div", { class: "btn-row" });
    row.appendChild(linkButton("Reservar visita", d.reservaUrl, "btn-primary btn-sm"));
    modalBody.appendChild(row);
    if (typeof modal.showModal === "function") modal.showModal(); else modal.setAttribute("open", "");
  }

  (SITE.destinos || []).forEach(function (d) {
    var photo = has(d.foto)
      ? el("img", { src: d.foto, alt: d.fotoAlt || d.nombre, loading: "lazy" })
      : el("div", { class: "slot-photo", text: "Aquí irá una fotografía" });
    var tags = el("ul");
    (d.info || []).forEach(function (t) { tags.appendChild(el("li", { text: t })); });

    var more;
    if (has(d.seccionDetalle)) {
      more = el("a", { class: "btn btn-ghost btn-sm", href: "#" + d.seccionDetalle, text: "Conocer más" });
    } else {
      more = el("button", { class: "btn btn-ghost btn-sm", type: "button", text: "Conocer más" });
      more.addEventListener("click", function () { openModal(d); });
    }
    var actions = el("div", { class: "card-actions" }, [
      more,
      linkButton("Reservar visita", d.reservaUrl, "btn-primary btn-sm")
    ]);
    cardsBox.appendChild(el("article", { class: "card" }, [
      el("div", { class: "card-photo" }, [photo]),
      el("div", { class: "card-body" }, [
        has(d.etiqueta) ? el("p", { class: "card-tag", text: d.etiqueta }) : null,
        el("h3", { text: d.nombre }),
        el("p", { class: "card-desc", text: d.descripcion || "" }),
        tags,
        actions
      ])
    ]));
  });

  // Espacios preparados para futuros destinos
  for (var i = 0; i < (SITE.espaciosLibres || 0); i++) {
    var ico = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    ico.setAttribute("viewBox", "0 0 48 48"); ico.setAttribute("aria-hidden", "true");
    var use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttribute("href", "#ico-puzzle"); ico.appendChild(use);
    cardsBox.appendChild(el("article", { class: "card card--empty" }, [
      ico,
      el("h3", { text: "Próximo fragmento" }),
      el("p", { text: "Un nuevo destino de San Bernardo se sumará pronto al álbum." })
    ]));
  }

  /* ---------- Reservas ---------- */
  var rl = document.getElementById("reserve-list");
  (SITE.destinos || []).forEach(function (d) {
    var actions = el("div", { class: "reserve-actions" }, [
      linkButton("Reservar visita", d.reservaUrl, "btn-primary btn-sm"),
      linkButton("Conocer disponibilidad", d.disponibilidadUrl, "btn-ghost btn-sm"),
      linkButton("Más información", d.masInfoUrl, "btn-ghost btn-sm")
    ]);
    var anyLink = has(d.reservaUrl) || has(d.disponibilidadUrl) || has(d.masInfoUrl);
    rl.appendChild(el("div", { class: "reserve-row" }, [
      el("h3", { text: d.nombre }),
      actions,
      anyLink ? null : el("p", { class: "pending-note", text: "Los enlaces oficiales de este destino se agregarán pronto. Mientras tanto, contáctanos y te ayudamos con tu reserva." })
    ]));
  });

  /* ---------- Línea de tiempo, flora y fauna ---------- */
  var cant = SITE.cantera || {};
  var tl = document.getElementById("timeline");
  if ((cant.lineaDeTiempo || []).length) {
    cant.lineaDeTiempo.forEach(function (h) {
      tl.appendChild(el("div", { class: "tl-item" }, [
        has(h.anio) ? el("p", { class: "tl-year", text: h.anio }) : null,
        el("h4", { text: h.titulo || "" }),
        el("p", { text: h.texto || "" })
      ]));
    });
  } else {
    ["Su antigua utilización", "El proceso de recuperación", "La creación del Cerro Escuela"].forEach(function (t) {
      tl.appendChild(el("div", { class: "tl-item pending" }, [
        el("p", { class: "tl-year", text: "Fecha por confirmar" }),
        el("h4", { text: t }),
        el("p", { text: "Esta parte de la historia se completará con los antecedentes oficiales." })
      ]));
    });
  }

  function renderSpecimens(boxId, list, placeholderTitle) {
    var box = document.getElementById(boxId);
    if (list && list.length) {
      list.forEach(function (s) {
        box.appendChild(el("article", { class: "specimen" }, [
          has(s.foto) ? el("img", { src: s.foto, alt: s.nombre, loading: "lazy" }) : el("div", { class: "slot-photo", text: "Aquí irá una fotografía" }),
          el("h4", { text: s.nombre }),
          has(s.cientifico) ? el("p", { class: "sci", text: s.cientifico }) : null,
          el("p", { text: s.texto || "" })
        ]));
      });
    } else {
      for (var k = 0; k < 3; k++) {
        box.appendChild(el("article", { class: "specimen pending" }, [
          el("div", { class: "slot-photo", text: "Aquí irá una fotografía" }),
          el("h4", { text: placeholderTitle }),
          el("p", { text: "Nombre, descripción e importancia ecológica: información por incorporar." })
        ]));
      }
    }
  }
  renderSpecimens("grid-flora", cant.flora, "Especie de flora");
  renderSpecimens("grid-fauna", cant.fauna, "Especie de fauna");

  /* ---------- Contacto ---------- */
  function setupContact(kind, url, pendingText, label) {
    document.querySelectorAll('[data-link="' + kind + '"]').forEach(function (a) {
      if (url) {
        a.setAttribute("href", url);
        if (a.hasAttribute("hidden")) a.removeAttribute("hidden");
        a.classList.remove("is-pending");
      } else {
        a.classList.add("is-pending");
        a.setAttribute("aria-disabled", "true");
        a.removeAttribute("target");
        a.addEventListener("click", function (e) { e.preventDefault(); say(pendingText, true); });
        var lbl = a.querySelector("[data-label]");
        if (lbl && label) lbl.textContent = label;
      }
    });
  }
  var wa = "";
  if (has(C.whatsappNumero)) {
    var digits = C.whatsappNumero.replace(/\D/g, "");
    if (digits) wa = "https://wa.me/" + digits + "?text=" + encodeURIComponent(C.whatsappMensaje || "");
  }
  var ig = has(C.instagramUrl) && safeUrl(C.instagramUrl) ? C.instagramUrl : "";
  setupContact("whatsapp", wa, "El WhatsApp del proyecto se agregará muy pronto. ¡Mientras tanto, escríbenos por Instagram!", "Próximamente");
  setupContact("instagram", ig, "Nuestro Instagram se agregará muy pronto. ¡Gracias por tu paciencia!", "Próximamente");
  if (has(C.correo)) setupContact("correo", "mailto:" + C.correo, "", "");
  if (ig && has(C.instagramUsuario)) {
    var iu = document.querySelector("[data-insta-user]");
    if (iu) iu.textContent = C.instagramUsuario;
  }

  /* ---------- Menú móvil ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("menu");
  toggle.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú");
    });
  });

  /* ---------- Sección activa + mensajes contextuales de Almendra ---------- */
  var sections = document.querySelectorAll("main section[id]");
  var links = {};
  menu.querySelectorAll("a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
  if ("IntersectionObserver" in window) {
    var current = "inicio";
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = en.target.id;
        Object.keys(links).forEach(function (k) { links[k].classList.toggle("active", k === id); });
        if (id !== current) {
          current = id;
          var msg = en.target.getAttribute("data-almendra");
          if (msg) say(msg, false);
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { io.observe(s); });
  }
})();
