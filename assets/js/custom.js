"use strict";

/* =========================
   HEADER BACKGROUND ON SCROLL
========================= */
window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  const headerText = document.querySelector(".header-text");
  const header = document.querySelector("header");

  if (!header || !headerText) return;

  const triggerPoint = headerText.offsetHeight - header.offsetHeight;

  header.classList.toggle("background-header", scroll >= triggerPoint);
});


/* =========================
   ISOTOPE FILTER (still library-based)
========================= */
window.addEventListener("load", () => {
  const grid = document.querySelector(".grid");

  if (grid && window.Isotope) {
    const iso = new Isotope(grid, {
      itemSelector: ".all",
      percentPosition: true,
      masonry: {
        columnWidth: ".all"
      }
    });

    document.querySelectorAll(".filters ul li").forEach((item) => {
      item.addEventListener("click", () => {
        document
          .querySelectorAll(".filters ul li")
          .forEach((el) => el.classList.remove("active"));

        item.classList.add("active");

        const filterValue = item.getAttribute("data-filter");
        iso.arrange({ filter: filterValue });
      });
    });
  }
});


/* =========================
   ACCORDION
========================= */
document.querySelectorAll(".accordions").forEach((accordion) => {
  const heads = accordion.querySelectorAll(".accordion-head");
  const bodies = accordion.querySelectorAll(".accordion-body");
  const isToggle = accordion.classList.contains("is-toggle");

  heads.forEach((head, i) => {
    head.addEventListener("click", () => {
      const body = bodies[i];
      const isOpen = head.classList.contains("is-open");

      if (!isToggle) {
        heads.forEach((h, j) => {
          h.classList.remove("is-open");
          bodies[j].style.height = 0;
        });
      }

      if (isOpen) {
        head.classList.remove("is-open");
        body.style.height = 0;
      } else {
        head.classList.add("is-open");
        body.style.height = body.scrollHeight + "px";
      }
    });
  });
});


/* =========================
   OWL CAROUSEL (still jQuery plugin internally)
========================= */
window.addEventListener("load", () => {
  if (window.$ && $(".owl-service-item").owlCarousel) {
    $(".owl-service-item").owlCarousel({
      items: 3,
      loop: true,
      dots: true,
      nav: true,
      autoplay: true,
      margin: 30,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
      }
    });
  }

  if (window.$ && $(".owl-courses-item").owlCarousel) {
    $(".owl-courses-item").owlCarousel({
      items: 4,
      loop: true,
      dots: true,
      nav: true,
      autoplay: true,
      margin: 30,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 4 }
      }
    });
  }
});


/* =========================
   MOBILE MENU TOGGLE
========================= */
const menuTrigger = document.querySelector(".menu-trigger");
const navMenu = document.querySelector(".header-area .nav");

if (menuTrigger && navMenu) {
  menuTrigger.addEventListener("click", () => {
    menuTrigger.classList.toggle("active");

    if (navMenu.style.display === "block") {
      navMenu.style.display = "none";
    } else {
      navMenu.style.display = "block";
    }
  });
}


/* =========================
   SMOOTH SCROLL
========================= */
document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    const target = document.querySelector(targetId);

    if (!target) return;

    e.preventDefault();

    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: "smooth"
    });
  });
});


/* =========================
   ACTIVE MENU ON SCROLL
========================= */
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;

  document.querySelectorAll(".nav a").forEach((link) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) return;

    const top = target.offsetTop - 100;
    const bottom = top + target.offsetHeight;

    if (scrollPos >= top && scrollPos < bottom) {
      document
        .querySelectorAll(".nav a")
        .forEach((a) => a.classList.remove("active"));

      link.classList.add("active");
    }
  });
});


/* =========================
   COUNT ANIMATION
========================= */
function animateCounter(el) {
  const end = parseInt(el.innerText);
  let start = 0;
  const duration = 3000;
  const step = 10;
  const increment = end / (duration / step);

  const timer = setInterval(() => {
    start += increment;

    if (start >= end) {
      el.innerText = end;
      clearInterval(timer);
    } else {
      el.innerText = Math.ceil(start);
    }
  }, step);
}

window.addEventListener("scroll", () => {
  document.querySelectorAll(".count-digit").forEach((el) => {
    const rect = el.getBoundingClientRect();

    if (
      rect.top < window.innerHeight &&
      !el.classList.contains("done")
    ) {
      el.classList.add("done");
      animateCounter(el);
    }
  });
});


/* =========================
   PRELOADER
========================= */
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  if (preloader) {
    preloader.style.opacity = "0";

    setTimeout(() => {
      preloader.style.display = "none";
    }, 600);
  }
});