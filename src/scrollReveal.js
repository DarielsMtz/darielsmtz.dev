// src/scrollReveal.js

import ScrollReveal from "scrollreveal";

export const initScrollReveal = () => {
  ScrollReveal().reveal(".elemento-revelar", {
    duration: 1500,
    origin: "bottom",
    distance: "100px",
    opacity: 0,
    scale: 0.85,
    easing: "cubic-bezier(0.45, 0.58, 0, 1)",
    interval: 140,
    reset: true,
  });
};
