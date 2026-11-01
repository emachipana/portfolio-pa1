console.log("JS Conectado");

document.addEventListener("DOMContentLoaded", function() {
  const navItems = document.querySelectorAll(".nav-item");
  const currentPath = window.location.pathname;

  navItems.forEach(item => {
    if (new URL(item.href).pathname === currentPath) {
      item.classList.add("item-active");
    }
  });

  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      contactForm.querySelector(".form-note").textContent = "Gracias por tu mensaje. Este formulario es una demostración y no lo envía todavía.";
      contactForm.reset();
    });
  }
});
