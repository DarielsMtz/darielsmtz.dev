// src/scrollReveal.js

import ScrollReveal from "scrollreveal";

// Configuración de ScrollReveal
export const initScrollReveal = () => {
  ScrollReveal().reveal(".elemento-revelar", {
    duration: 1500, // Duración más corta para un efecto más dinámico
    origin: "bottom", // Posición inicial de la animación
    distance: "100px", // Mayor distancia para que sea más visible la subida
    opacity: 0, // Inicia desde opacidad cero para un efecto de fade-in
    scale: 0.85, // Efecto de "zoom-in" al aparecer
    easing: "cubic-bezier(0.45, 0.58, 0, 1)", // Efecto de aceleración suave
    interval: 140, // Intervalo de tiempo entre cada animación (en milisegundos)
    reset: true, // Evita la animación al volver a hacer scroll
  });
};
