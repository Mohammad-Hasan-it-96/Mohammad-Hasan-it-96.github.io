/* Portfolio runtime — renders the whole page from CONTENT + PROJECTS in data.js.
   Rendering (rather than translating in place) guarantees the Arabic and English
   versions can never drift apart. */

(function () {
  "use strict";

  var LANGS = ["en", "ar"];
  var lang = (function () {
    // ?lang=ar wins, so an Arabic link can be shared directly
    var q = (location.search.match(/[?&]lang=(\w+)/) || [])[1];
    if (LANGS.indexOf(q) > -1) return q;
    try { var s = localStorage.getItem("mh-lang"); if (LANGS.indexOf(s) > -1) return s; } catch (e) {}
    return (navigator.language || "").slice(0, 2) === "ar" ? "ar" : "en";
  })();

  var filter = "all";

  /* --------------------------------------------------------------- icons */

  var ICONS = {
    mail:   '<path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z"/><path d="m3.5 7 8.5 6 8.5-6"/>',
    phone:  '<path d="M6.5 3h3l2 5-2.5 1.5a12 12 0 0 0 5.5 5.5L16 12.5l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 3 6.2 2 2 0 0 1 5 4z"/>',
    pin:    '<path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11"/><circle cx="12" cy="10" r="2.6"/>',
    github: '<path d="M9 19c-4.3 1.4-4.3-2.2-6-2.6m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 3.2 5.4 3.5 5.4 3.5a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.9c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
    whatsapp: '<path d="M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.6-4.4A8.4 8.4 0 1 1 20.5 11.6z"/><path d="M9 9.2c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.7 1.7c.1.3 0 .5-.1.6l-.4.5c-.1.2-.2.3 0 .6a7 7 0 0 0 2.9 2.4c.3.1.5.1.6 0l.5-.6c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.4.5a1.9 1.9 0 0 1-1.3 1.6c-.6.2-1.5.2-3.5-.7a9.7 9.7 0 0 1-4-4c-.5-1-.7-1.9-.6-2.5A2 2 0 0 1 9 9.2z"/>',
    file:   '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/>',
    down:   '<path d="M12 3v13"/><path d="m7.5 11.5 4.5 4.5 4.5-4.5"/><path d="M4.5 20.5h15"/>',
    arrow:  '<path d="M5 12h13"/><path d="m12.5 5.5 6.5 6.5-6.5 6.5"/>',
    close:  '<path d="m6 6 12 12M18 6 6 18"/>',
    menu:   '<path d="M4 7h16M4 12h16M4 17h16"/>',
    globe:  '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18"/>',
    phoneIc:'<rect x="7" y="2.5" width="10" height="19" rx="2.4"/><path d="M11 18.5h2"/>',
    server: '<rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/>',
    code:   '<path d="m8.5 8-4.5 4 4.5 4"/><path d="m15.5 8 4.5 4-4.5 4"/><path d="m13.5 5-3 14"/>',
    db:     '<ellipse cx="12" cy="6" rx="8" ry="3.2"/><path d="M4 6v12c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2V6"/><path d="M4 12c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2"/>',
    plug:   '<path d="M9 3v6M15 3v6"/><path d="M6 9h12v3a6 6 0 0 1-12 0z"/><path d="M12 18v3"/>',
    chip:   '<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>',
    tool:   '<path d="M15.5 3.5a5.5 5.5 0 0 0-7 7L3 16v5h5l5.5-5.5a5.5 5.5 0 0 0 7-7L17 12l-3-3z"/>'
  };

  function svg(name, size) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" ' +
           'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"' +
           (size ? ' width="' + size + '" height="' + size + '"' : '') + '>' +
           (ICONS[name] || '') + '</svg>';
  }

  /* --------------------------------------------------------------- utils */

  var esc = function (s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  };

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  /* An <img> laid over a placeholder: if no screenshot has been dropped into
     images/projects/ yet, the img removes itself and the placeholder shows. */
  function media(id, initial, cls, collapse) {
    // `collapse` drops the whole band rather than leaving an empty placeholder —
    // right for the modal, wrong for the cards (they need an even grid).
    var give = collapse ? "this.parentNode.remove()" : "this.remove()";
    return '<div class="' + cls + '">' +
             '<div class="ph">' + esc(initial) + '</div>' +
             '<img alt="" loading="lazy" src="images/projects/' + id + '.jpg" ' +
                  'data-fallback="images/projects/' + id + '.png" ' +
                  // the .ph letter is positioned, so it sits over the screenshot — drop it once one loads
                  'onload="var p=this.parentNode.querySelector(\'.ph\'); if(p) p.remove();" ' +
                  'onerror="if(this.dataset.fallback){this.src=this.dataset.fallback;this.dataset.fallback=\'\';}else{' + give + ';}">' +
           '</div>';
  }

  /* --------------------------------------------------------------- render */

  function render() {
    var t = CONTENT[lang];
    var other = lang === "en" ? "ar" : "en";

    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
    document.title = PROFILE.name[lang] + " — " + PROFILE.role[lang];

    renderHeader(t, other);
    renderHero(t);
    renderAbout(t);
    renderWork(t);
    renderSkills(t);
    renderExperience(t);
    renderContact(t);

    wire();
    observeReveal();
  }

  function renderHeader(t, other) {
    $("#hdr").innerHTML =
      '<div class="wrap hdr-in">' +
        '<a class="brand" href="#top"><span class="brand-mark">MH</span><span>' + esc(PROFILE.name[lang]) + '</span></a>' +
        '<nav class="nav" id="nav">' +
          '<a href="#work">' + esc(t.nav.work) + '</a>' +
          '<a href="#about">' + esc(t.nav.about) + '</a>' +
          '<a href="#skills">' + esc(t.nav.skills) + '</a>' +
          '<a href="#experience">' + esc(t.nav.experience) + '</a>' +
          '<a href="#contact">' + esc(t.nav.contact) + '</a>' +
        '</nav>' +
        '<div class="hdr-actions">' +
          '<button class="btn btn-sm btn-ghost lang-btn" id="langBtn" data-next="' + other + '" ' +
                  'aria-label="Switch language">' + svg("globe") + '<span class="txt">' + esc(t.langBtn) + '</span></button>' +
          '<a class="btn btn-sm btn-primary" href="assets/files/Mohamad-Hasan-CV-' + lang.toUpperCase() + '.pdf" download>' +
            svg("down") + '<span class="txt">' + esc(t.hero.ctaCv) + '</span></a>' +
          '<button class="menu-btn" id="menuBtn" aria-label="Menu" aria-expanded="false">' + svg("menu") + '</button>' +
        '</div>' +
      '</div>';
  }

  function renderHero(t) {
    var h = t.hero;
    var stats = h.stats.map(function (s) {
      return '<div class="stat"><div class="n">' + esc(s.n) + '</div><div class="l">' + esc(s.l) + '</div></div>';
    }).join("");

    $("#hero").innerHTML =
      '<div class="wrap hero-grid">' +
        '<div>' +
          '<span class="eyebrow"><span class="dot"></span>' + esc(h.eyebrow) + '</span>' +
          '<h1>' + esc(PROFILE.name[lang]) + '</h1>' +
          '<div class="hero-role">' + esc(PROFILE.role[lang]) + '</div>' +
          '<p class="hero-tagline">' + esc(h.tagline) + '</p>' +
          '<p class="hero-intro">' + esc(h.intro) + '</p>' +
          '<div class="hero-cta">' +
            '<a class="btn btn-primary" href="#work">' + esc(h.ctaWork) + svg("arrow") + '</a>' +
            '<a class="btn" href="assets/files/Mohamad-Hasan-CV-' + lang.toUpperCase() + '.pdf" download>' + svg("down") + esc(h.ctaCv) + '</a>' +
            '<a class="btn" href="assets/files/Mohamad-Hasan-Portfolio.pdf" target="_blank" rel="noopener">' + svg("file") + esc(h.ctaPdf) + '</a>' +
          '</div>' +
          '<div class="stats">' + stats + '</div>' +
        '</div>' +
        '<aside class="hero-side">' +
          '<div class="photo-frame">' +
            '<div class="photo-fallback"><div><div class="initials">MH</div></div></div>' +
            '<img alt="' + esc(t.photoAlt) + '" src="images/profile.jpg" ' +
                 'data-fallback="images/profile.png" ' +
                 // the MH placeholder is positioned, so it paints over the photo — drop it once one loads
                 'onload="var f=this.parentNode.querySelector(\'.photo-fallback\'); if(f) f.remove();" ' +
                 'onerror="if(this.dataset.fallback){this.src=this.dataset.fallback;this.dataset.fallback=\'\';}else{this.remove();}">' +
          '</div>' +
          '<div class="hero-meta">' +
            '<a href="mailto:' + PROFILE.email + '">' + svg("mail") + '<span class="val">' + PROFILE.email + '</span></a>' +
            '<a href="tel:+' + PROFILE.phoneRaw + '" dir="ltr">' + svg("phone") + '<span class="val">' + PROFILE.phone + '</span></a>' +
            '<a href="' + PROFILE.github + '" target="_blank" rel="noopener">' + svg("github") + '<span class="val">GitHub</span></a>' +
            '<span style="display:flex;align-items:center;gap:10px">' + svg("pin") + '<span class="val">' + esc(PROFILE.location[lang]) + '</span></span>' +
          '</div>' +
        '</aside>' +
      '</div>';
  }

  function renderAbout(t) {
    var a = t.about, e = t.education;
    var body = a.body.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join("");
    var langs = e.langs.map(function (l) {
      return '<div class="lang-row"><span class="k">' + esc(l.n) + '</span><span class="v">' + esc(l.v) + '</span></div>';
    }).join("");

    $("#about").innerHTML =
      '<div class="wrap">' +
        '<div class="sec-head reveal"><h2>' + esc(a.title) + '</h2><p class="kicker">' + esc(a.kicker) + '</p></div>' +
        '<div class="about-grid">' +
          '<div class="about-body reveal">' + body + '</div>' +
          '<div class="reveal">' +
            '<div class="about-card">' +
              '<h3>' + esc(e.title) + '</h3>' +
              '<div class="edu-item">' +
                '<div class="d">' + esc(e.degree) + '</div>' +
                '<div class="s">' + esc(e.school) + '</div>' +
                '<div class="m">' + esc(e.date) + '</div>' +
                '<div class="note">' + esc(e.note) + '</div>' +
              '</div>' +
              '<div class="edu-item"><h3 style="margin-bottom:8px">' + esc(e.langTitle) + '</h3>' + langs + '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function renderWork(t) {
    var w = t.work, f = t.filters;
    var order = ["all", "flutter", "laravel", "embedded"];
    var filters = order.map(function (k) {
      return '<button class="filter' + (k === filter ? " on" : "") + '" data-filter="' + k + '">' + esc(f[k]) + '</button>';
    }).join("");

    var cards = PROJECTS.map(function (p) {
      var d = p[lang];
      var shown = p.tech.slice(0, 4).map(function (x) { return '<span class="chip">' + esc(x) + '</span>'; }).join("");
      var rest = p.tech.length - 4;
      if (rest > 0) shown += '<span class="chip more">+' + rest + '</span>';

      return '<button class="card' + (filter !== "all" && filter !== p.cat ? " hide" : "") + '" ' +
                     'data-cat="' + p.cat + '" data-id="' + p.id + '">' +
               media(p.id, d.title.charAt(0), "card-media") +
               '<div class="card-badges">' +
                 '<span class="pill ' + p.cat + '">' + esc(p.badge) + '</span>' +
                 (p.flagship ? '<span class="pill star">★</span>' : '') +
               '</div>' +
               '<span class="card-num">' + esc(p.num) + '</span>' +
               '<div class="card-body">' +
                 '<div class="card-kicker">' + esc(d.kicker) + '</div>' +
                 '<div class="card-title">' + esc(d.title) + '</div>' +
                 (d.native ? '<div class="card-native">' + esc(d.native) + '</div>' : '') +
                 '<p class="card-tagline">' + esc(d.tagline) + '</p>' +
                 '<div class="chips">' + shown + '</div>' +
                 '<span class="card-open">' + esc(w.open) + svg("arrow") + '</span>' +
               '</div>' +
             '</button>';
    }).join("");

    $("#work").innerHTML =
      '<div class="wrap">' +
        '<div class="sec-head reveal"><h2>' + esc(w.title) + '</h2><p class="kicker">' + esc(w.kicker) + '</p></div>' +
        '<div class="filters reveal">' + filters + '</div>' +
        '<div class="cards" id="cards">' + cards + '</div>' +
      '</div>';
  }

  function renderSkills(t) {
    var s = t.skills;
    var cards = s.groups.map(function (g) {
      var chips = g.v.map(function (x) { return '<span class="chip">' + esc(x) + '</span>'; }).join("");
      return '<div class="skill-card reveal">' +
               '<div class="skill-head"><span class="ic">' + svg(g.i === "phone" ? "phoneIc" : g.i) + '</span><h3>' + esc(g.n) + '</h3></div>' +
               '<div class="chips" style="margin:0">' + chips + '</div>' +
             '</div>';
    }).join("");

    $("#skills").innerHTML =
      '<div class="wrap">' +
        '<div class="sec-head reveal"><h2>' + esc(s.title) + '</h2><p class="kicker">' + esc(s.kicker) + '</p></div>' +
        '<div class="skill-grid">' + cards + '</div>' +
      '</div>';
  }

  function renderExperience(t) {
    var x = t.experience;
    var items = x.items.map(function (it) {
      var pts = it.p.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join("");
      return '<div class="tl-item reveal">' +
               '<div class="tl-top"><span class="tl-role">' + esc(it.r) + '</span>' +
                 '<span class="tl-date">' + esc(it.d) + '</span></div>' +
               '<div class="tl-co">' + esc(it.c) + '<span class="sep">·</span>' + esc(it.l) + '</div>' +
               '<ul class="feat-list">' + pts + '</ul>' +
             '</div>';
    }).join("");

    $("#experience").innerHTML =
      '<div class="wrap">' +
        '<div class="sec-head reveal"><h2>' + esc(x.title) + '</h2><p class="kicker">' + esc(x.kicker) + '</p></div>' +
        '<div class="tl">' + items + '</div>' +
      '</div>';
  }

  function renderContact(t) {
    var c = t.contact;
    $("#contact").innerHTML =
      '<div class="wrap">' +
        '<div class="contact-box reveal">' +
          '<h2>' + esc(c.title) + '</h2>' +
          '<p class="kicker">' + esc(c.kicker) + '</p>' +
          '<div class="contact-actions">' +
            '<a class="btn btn-primary" href="mailto:' + PROFILE.email + '">' + svg("mail") + esc(c.email) + '</a>' +
            '<a class="btn" href="https://wa.me/' + PROFILE.phoneRaw + '" target="_blank" rel="noopener">' + svg("whatsapp") + esc(c.whatsapp) + '</a>' +
            '<a class="btn" href="' + PROFILE.github + '" target="_blank" rel="noopener">' + svg("github") + esc(c.github) + '</a>' +
            '<a class="btn" href="assets/files/Mohamad-Hasan-Portfolio.pdf" target="_blank" rel="noopener">' + svg("file") + esc(c.pdf) + '</a>' +
          '</div>' +
        '</div>' +
      '</div>';

    $("#ftr").innerHTML =
      '<div class="wrap ftr-in">' +
        '<span>© ' + new Date().getFullYear() + ' ' + esc(PROFILE.full[lang]) + '</span>' +
        '<span>' + esc(t.footer.built) + '</span>' +
      '</div>';
  }

  /* ---------------------------------------------------------------- modal */

  function openModal(id) {
    var p = null, i;
    for (i = 0; i < PROJECTS.length; i++) if (PROJECTS[i].id === id) p = PROJECTS[i];
    if (!p) return;

    var d = p[lang], w = CONTENT[lang].work;
    var meta = d.meta.map(function (m) {
      return '<div class="meta-cell"><div class="k">' + esc(m[0]) + '</div><div class="v">' + esc(m[1]) + '</div></div>';
    }).join("");
    var feats = d.features.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join("");
    var chips = p.tech.map(function (x) { return '<span class="chip">' + esc(x) + '</span>'; }).join("");

    $("#modalBox").innerHTML =
      '<button class="modal-close" id="modalClose" aria-label="' + esc(w.close) + '">' + svg("close") + '</button>' +
      media(p.id, d.title.charAt(0), "modal-hero", true) +
      '<div class="modal-content">' +
        '<div class="modal-kicker">' + esc(d.kicker) + '</div>' +
        '<h3>' + esc(d.title) + '</h3>' +
        (d.native ? '<div class="modal-native">' + esc(d.native) + '</div>' : '') +
        '<p class="modal-tagline">' + esc(d.tagline) + '</p>' +
        '<p class="modal-blurb">' + esc(d.blurb) + '</p>' +
        '<div class="meta-grid">' + meta + '</div>' +
        '<div class="modal-sec"><h4>' + esc(w.features) + '</h4><ul class="feat-list">' + feats + '</ul></div>' +
        '<div class="modal-sec"><h4>' + esc(w.stack) + '</h4><div class="chips" style="margin:0">' + chips + '</div></div>' +
        '<div class="modal-sec"><h4>' + esc(w.highlights) + '</h4><p>' + esc(d.highlights) + '</p></div>' +
      '</div>';

    var m = $("#modal");
    m.classList.add("open");
    m.setAttribute("aria-hidden", "false");
    if (location.hash !== "#p/" + id) history.replaceState(null, "", "#p/" + id);
    document.body.style.overflow = "hidden";
    $("#modalBox").scrollTop = 0;
    $("#modalClose").focus();
    $("#modalClose").addEventListener("click", closeModal);
  }

  function closeModal() {
    var m = $("#modal");
    if (!m.classList.contains("open")) return;
    m.classList.remove("open");
    m.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (location.hash.indexOf("#p/") === 0) history.replaceState(null, "", location.pathname + location.search);
  }

  /* ----------------------------------------------------------------- wire */

  function wire() {
    $("#langBtn").addEventListener("click", function () {
      lang = this.getAttribute("data-next");
      try { localStorage.setItem("mh-lang", lang); } catch (e) {}
      render();
      window.scrollTo({ top: window.scrollY, behavior: "auto" });
    });

    var menuBtn = $("#menuBtn"), nav = $("#nav");
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    $$("#nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });

    $$(".filter").forEach(function (b) {
      b.addEventListener("click", function () {
        filter = this.getAttribute("data-filter");
        $$(".filter").forEach(function (x) { x.classList.remove("on"); });
        this.classList.add("on");
        $$("#cards .card").forEach(function (c) {
          var show = filter === "all" || c.getAttribute("data-cat") === filter;
          c.classList.toggle("hide", !show);
        });
      });
    });

    $$("#cards .card").forEach(function (c) {
      c.addEventListener("click", function () { openModal(this.getAttribute("data-id")); });
    });
  }

  /* --------------------------------------------------------------- reveal */

  var io = null;
  function observeReveal() {
    if (!("IntersectionObserver" in window)) {
      $$(".reveal").forEach(function (el) { el.classList.add("in"); });
      return;
    }
    if (io) io.disconnect();
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    $$(".reveal").forEach(function (el) { io.observe(el); });
  }

  /* ----------------------------------------------------------- page chrome */

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });
  $("#modal").addEventListener("click", function (e) {
    if (e.target === this) closeModal();
  });

  var hdr = $("#hdr");
  var onScroll = function () {
    hdr.classList.toggle("stuck", window.scrollY > 8);
    var y = window.scrollY + 120, current = "";
    $$("section[id]").forEach(function (s) {
      if (s.offsetTop <= y) current = s.id;
    });
    $$("#nav a").forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });

  render();
  onScroll();

  // deep link: /#p/fawateer opens that project straight away
  if (location.hash.indexOf("#p/") === 0) openModal(location.hash.slice(3));
})();
