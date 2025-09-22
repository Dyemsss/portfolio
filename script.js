'use strict';

/* NAVBAR TOGGLE */
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll("[data-nav-link]");

navToggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
          navbar.classList.remove("active");
              navToggleBtn.classList.remove("active");
                });
                });

                /* HEADER STICKY */
                const header = document.querySelector("[data-header]");
                window.addEventListener("scroll", () => {
                  window.scrollY > 50
                      ? header.classList.add("active")
                          : header.classList.remove("active");
                          });

                          /* BACK TO TOP */
                          const backToTop = document.querySelector("[data-back-to-top]");
                          window.addEventListener("scroll", () => {
                            window.scrollY > 200
                                ? backToTop.classList.add("active")
                                    : backToTop.classList.remove("active");
                                    });