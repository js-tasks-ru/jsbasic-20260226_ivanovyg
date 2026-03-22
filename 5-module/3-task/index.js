function initCarousel() {
  const carouselInner    = document.querySelector('.carousel__inner');
  const arrowToRight     = document.querySelector('.carousel__arrow_right');
  const arrowToLeft      = document.querySelector('.carousel__arrow_left');
  
  let totalSlides        = carouselInner.children.length;
  let carouselInnerWidth = carouselInner.offsetWidth;
  let slidePosition      = 0;
  let slideNumber        = 1;
  
  // Задать номер слайда при инициализации
  if (!carouselInner.hasAttribute('data-slide-number')) {
    carouselInner.setAttribute('data-slide-number', slideNumber);
  }

  // Скрыть стрелку 'влево', если это первый слайд
  arrowToLeft.style.display  = 'none';

  arrowToRight.addEventListener('click', function() {
    // Задать номер слайда
    carouselInner.dataset.slideNumber = ++slideNumber;
    
    // Показать стрелку "влево", если слайд не первый
    if (slideNumber !== 1) {
      arrowToLeft.style.display  = '';
    }

    // Скрыть стрелку "вправо", если слайд четвертый
    if (slideNumber === totalSlides) {
      arrowToRight.style.display = 'none';
    }

    // Обновить позицию слайда
    slidePosition -= carouselInnerWidth;

    // Изменить позицию на странице
    carouselInner.style.transform = `translateX(${slidePosition}px)`;
  });

  arrowToLeft.addEventListener('click', function() {
    // Задать номер слайда
    carouselInner.dataset.slideNumber = --slideNumber;
    
    // Скрыть стрелку "влево", если слайд первый
    if (slideNumber === 1) {
      arrowToLeft.style.display = 'none';
    }

    // Показать стрелку "вправо", если слайд не четвертый
    if (slideNumber !== totalSlides) {
      arrowToRight.style.display = '';
    }

    // Обновить позицию слайда
    slidePosition += carouselInnerWidth;

    // Изменить позицию на странице
    carouselInner.style.transform = `translateX(${slidePosition}px)`;
  });
}
