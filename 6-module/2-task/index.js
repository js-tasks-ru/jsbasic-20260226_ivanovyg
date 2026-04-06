export default class ProductCard {
  constructor(product) {
    this.elem = document.createElement('div');
    this.elem.className = 'card';
    this.elem.innerHTML = `
      <div class="card__top">
        <img src="/assets/images/products/${product['image']}" class="card__image" alt="product">
        <span class="card__price">€${product['price'].toFixed(2)}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${product['name']}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    `;
    
    let productAdd = new CustomEvent('product-add', {
      detail: product.id,
      bubbles: true
    });

    this.elem.addEventListener('click', () => {
      document.body.dispatchEvent(productAdd);
    });

    document.body.addEventListener('product-add', (event) => {
      
    });
  }
}