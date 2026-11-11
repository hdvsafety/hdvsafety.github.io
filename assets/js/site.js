/* HDVSafety — Safety21 #656
   Theme toggle, mobile nav, scroll reveal, scrollspy, progress bar, back-to-top. */
(function () {
  "use strict";

  var root = document.documentElement;

  // Tells the head failsafe this script is alive, so it leaves the .js class in
  // place and the scroll-reveal styling stays active.
  root.setAttribute("data-site-ready", "");

  var reduced = window.matchMedia
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- theme ---------- */
  var KEY = "hdvsafety-theme";
  function read()  { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function write(v){ try { localStorage.setItem(KEY, v); }    catch (e) { /* blocked storage */ } }

  var saved = read();
  if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved);

  function currentTheme() {
    var attr = root.getAttribute("data-theme");
    if (attr) return attr;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark" : "light";
  }

  var themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      write(next);
      themeBtn.title = next === "dark" ? "Switch to light theme" : "Switch to dark theme";
    });
  }

  /* ---------- optional logo ----------
     Any element with data-logo swaps its text for the image, but only once the
     image has actually loaded — so a missing file leaves the text fallback. */
  var logoHosts = [].slice.call(document.querySelectorAll("[data-logo]"));
  if (logoHosts.length) {
    var logoSrc = logoHosts[0].getAttribute("data-logo");
    var probe = new Image();
    probe.onload = function () {
      logoHosts.forEach(function (el) {
        var img = document.createElement("img");
        img.src = logoSrc;
        img.alt = "";
        el.textContent = "";
        el.appendChild(img);
        el.style.background = "none";
        el.style.border = "0";
      });
    };
    probe.src = logoSrc;   // a 404 here simply leaves the text fallback in place
  }

  /* ---------- mobile nav ---------- */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  function closeNav() {
    if (!nav || !nav.classList.contains("open")) return;
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
  }
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeNav();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
  }

  /* ---------- scroll reveal ---------- */
  var revealables = document.querySelectorAll(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    [].forEach.call(revealables, function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    [].forEach.call(revealables, function (el) { io.observe(el); });
  }

  /* ---------- scroll-driven chrome ---------- */
  var topbar  = document.getElementById("topbar");
  var bar     = document.getElementById("progress");
  var toTop   = document.getElementById("toTop");
  var links   = [].slice.call(document.querySelectorAll('.nav a[href^="#"]'));
  var targets = links
    .map(function (a) {
      var el = document.getElementById(a.getAttribute("href").slice(1));
      return el ? { link: a, el: el } : null;
    })
    .filter(Boolean);

  var ticking = false;
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;

    if (topbar) topbar.classList.toggle("stuck", y > 8);
    if (toTop)  toTop.classList.toggle("show", y > 700);

    if (bar) {
      var max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (max > 0 ? Math.min(100, (y / max) * 100) : 0) + "%";
    }

    // scrollspy: the last section whose top has passed the sticky header
    var active = null;
    for (var i = 0; i < targets.length; i++) {
      if (targets[i].el.getBoundingClientRect().top <= 140) active = targets[i];
    }
    for (var j = 0; j < targets.length; j++) {
      targets[j].link.classList.toggle("active", targets[j] === active);
    }

    ticking = false;
  }
  function requestTick() {
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
  }
  window.addEventListener("scroll", requestTick, { passive: true });
  window.addEventListener("resize", requestTick);
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    });
  }
})();
