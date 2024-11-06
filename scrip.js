document.addEventListener("DOMContentLoaded", function() {
    // Animar las herramientas cuando aparezcan en pantalla
    const toolItems = document.querySelectorAll(".tool-item");
  
    const handleScroll = () => {
      const triggerPoint = window.innerHeight / 1.5;
      toolItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < triggerPoint) {
          item.classList.add("visible");
        }
      });
    };
  
    // Evento de scroll
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Llamar al scroll inicial para verificar si se debe animar al cargar
  });
  