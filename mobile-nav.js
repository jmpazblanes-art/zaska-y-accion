/* ============================================================
   Zaska y Acción — Menú móvil (hamburguesa)
   Inyecta el botón .nav-toggle en el header y gestiona la
   apertura/cierre del panel .nav en pantallas pequeñas.
   Añadido 2026-07-07. Compartido por todas las páginas.
   ============================================================ */
(function () {
  function init() {
    var header = document.querySelector('.site-header .header-row');
    var nav = document.querySelector('.site-header .nav');
    if (!header || !nav) return;
    if (header.querySelector('.nav-toggle')) return; // ya inyectado

    // Botón hamburguesa
    var btn = document.createElement('button');
    btn.className = 'nav-toggle';
    btn.setAttribute('aria-label', 'Abrir menú');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
      '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';

    // Insertar al final del header-row (a la derecha de todo)
    var right = header.querySelector('.header-right');
    if (right) header.appendChild(btn);
    else header.appendChild(btn);

    function open() {
      document.body.classList.add('nav-open');
      btn.setAttribute('aria-expanded', 'true');
      btn.setAttribute('aria-label', 'Cerrar menú');
    }
    function close() {
      document.body.classList.remove('nav-open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Abrir menú');
    }
    function toggle() {
      if (document.body.classList.contains('nav-open')) close();
      else open();
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      toggle();
    });

    // Cerrar al pulsar un enlace del menú
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', close);
    });

    // Cerrar al tocar fuera del panel (backdrop)
    document.addEventListener('click', function (e) {
      if (!document.body.classList.contains('nav-open')) return;
      if (nav.contains(e.target) || btn.contains(e.target)) return;
      close();
    });

    // Cerrar con Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });

    // Si se agranda la ventana a escritorio, resetear estado
    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
