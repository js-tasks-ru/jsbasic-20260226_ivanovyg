import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = document.createElement('div');
    this.elem.className = 'carousel';
    this.elem.innerHTML = `
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner"></div>
    `;

    const carouselInner = this.elem.querySelector('.carousel__inner');
    const arrowToRight  = this.elem.querySelector('.carousel__arrow_right');
    const arrowToLeft   = this.elem.querySelector('.carousel__arrow_left');

    for (let slide of slides) {
      let oneSlide = `
        <div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price}</span>
          <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `;

      carouselInner.insertAdjacentHTML('beforeend', oneSlide);
    }
    
    let totalSlides        = carouselInner.children.length;
    let carouselInnerWidth = carouselInner.querySelector('img').width;
    let slidePosition = 0;
    let slideNumber   = 1;

    // Скрыть стрелку 'влево', если это первый слайд
    arrowToLeft.style.display = 'none';

    this.elem.addEventListener('click', (e) => {
      if (e.target.closest('button')) {
        let productAdd = new CustomEvent('product-add', {
          detail: e.target.closest('.carousel__slide').dataset.id,
          bubbles: true
        });

        this.elem.dispatchEvent(productAdd);
      }
    });

    this.elem.addEventListener('product-add', () => (console.log('1')));

    arrowToRight.addEventListener('click', function() {
      // Задать номер слайда
      carouselInner.dataset.slideNumber = ++slideNumber;
      
      // Показать стрелку "влево", если слайд не первый
      if (slideNumber !== 1) {
        arrowToLeft.style.display = '';
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
}
