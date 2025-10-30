document.addEventListener('DOMContentLoaded', () => {

  // Busca TODOS los carruseles de la página
  const carousels = document.querySelectorAll('.carousel-wrapper');

  carousels.forEach(wrapper => {
    const container = wrapper.querySelector('.cards');
    const btnPrev = wrapper.querySelector('.btn-prev');
    const btnNext = wrapper.querySelector('.btn-next');

    // Si a un carrusel le falta algo, no ejecuta el código para él
    if (!container || !btnPrev || !btnNext) return;

    // Función para definir cuánto se scrollea
    const getScrollAmount = () => {
      // Scrollea el 80% del ancho visible del contenedor
      return container.clientWidth * 0.8; 
    };

    // Función para chequear si estamos al inicio o al final
    const checkArrowState = () => {
      // Usamos un margen de 1px por si hay decimales en el scroll
      const atStart = container.scrollLeft < 1;
      // Comprueba si el scroll llegó al final
      const atEnd = container.scrollWidth - container.scrollLeft - container.clientWidth < 1;

      btnPrev.classList.toggle('disabled', atStart);
      btnNext.classList.toggle('disabled', atEnd);
    };

    // --- Event Listeners ---

    // Clic en "Anterior"
    btnPrev.addEventListener('click', () => {
      container.scrollBy({
        left: -getScrollAmount(), // Scrollea hacia la izquierda
        behavior: 'smooth'
      });
    });

    // Clic en "Siguiente"
    btnNext.addEventListener('click', () => {
      container.scrollBy({
        left: getScrollAmount(), // Scrollea hacia la derecha
        behavior: 'smooth'
      });
    });

    // Chequear estado de flechas CADA vez que el usuario scrollea
    container.addEventListener('scroll', checkArrowState);

    // Chequear estado al cargar la página
    checkArrowState();
  });
});