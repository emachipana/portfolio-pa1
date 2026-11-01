console.log("JS Conectado");

document.addEventListener("DOMContentLoaded", function() {
  const navItems = document.querySelectorAll(".nav-item");
  const currentPath = window.location.pathname;

  navItems.forEach(item => {
    if (new URL(item.href).pathname === currentPath) {
      item.classList.add("item-active");
    }
  });
});
