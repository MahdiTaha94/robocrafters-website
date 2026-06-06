"use strict";

/* =========================
   HEADER BACKGROUND ON SCROLL
========================= */
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const caption = document.querySelector(".caption");

    if (!header || !caption) return;

    const triggerPoint = caption.offsetTop;

    if (window.scrollY > triggerPoint) {
        header.classList.add("background-header");
    } else {
        header.classList.remove("background-header");
    }
});

/* =========================
   ISOTOPE FILTER (still library-based)
========================= 
window.addEventListener("load", () => {

  const grid = document.querySelector(".section.our-facts");

  if (!grid || !window.Isotope) return;

  const iso = new Isotope(grid, {
    itemSelector: ".all",
    percentPosition: true,
    masonry: {
      columnWidth: ".right-contents"
    }
  });

  const filters = document.querySelectorAll(".filters ul li");

  filters.forEach((item) => {
    item.addEventListener("click", () => {

      // remove active class from all buttons
      filters.forEach((el) => el.classList.remove("active"));

      // add active to clicked button
      item.classList.add("active");

      // get filter value
      const filterValue = item.getAttribute("data-filter");

      // apply filter in Isotope
      iso.arrange({ filter: filterValue });
    });
  });

}); */


/* =========================
   ACCORDION
========================= */
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
   OWL CAROUSEL (still jQuery plugin)
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
   MOBILE MENU
========================= */
const menuTrigger = document.querySelector(".menu-trigger");
const navMenu = document.querySelector(".header-area .nav");

if (menuTrigger && navMenu) {
  menuTrigger.addEventListener("click", () => {
    menuTrigger.classList.toggle("active");

    navMenu.style.display =
      navMenu.style.display === "block" ? "none" : "block";
  });
}


/* =========================
   SMOOTH SCROLL
========================= */
document.querySelectorAll("a[href^='#']").forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));

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

    link.classList.toggle(
      "active",
      scrollPos >= top && scrollPos < bottom
    );
  });
});


/* =========================
   COUNTER ANIMATION
========================= */
function animateCounter(el) {
  const end = parseInt(el.textContent);
  let start = 0;

  const duration = 3000;
  const step = 10;
  const increment = end / (duration / step);

  const timer = setInterval(() => {
    start += increment;

    if (start >= end) {
      el.textContent = end;
      clearInterval(timer);
    } else {
      el.textContent = Math.ceil(start);
    }
  }, step);
}

window.addEventListener("scroll", () => {
  document.querySelectorAll(".count-digit").forEach((el) => {
    const rect = el.getBoundingClientRect();

    if (rect.top < window.innerHeight && !el.classList.contains("done")) {
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

  if (!preloader) return;

  preloader.style.opacity = "0";

  setTimeout(() => {
    preloader.style.display = "none";
  }, 600);
});