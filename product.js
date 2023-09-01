const url = 'https://course-api.com/javascript-store-single-product';

window.addEventListener('DOMContentLoaded', () => {
    displaySingleProduct();
});

function displaySingleProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    fetch(`${url}?id=${productId}`, { // Fetch the single product by its ID
        headers: {
            'Accept': 'application/json',
        },
    }).then((response) => {
        return response.json();
    }).then((singleProductData) => { // Use the fetched singleProduct directly
        if (singleProductData) {
            const formatPrice = singleProductData.fields.price / 100;
            const colorsList = singleProductData.fields.colors
            .map((color) => {
              return `<span class="product-color" style="background: ${color}"></span>`;
            })
            .join('');

            const productContainer = `
                <article class="single-product">
                    <img src="${singleProductData.fields.image[0].url}" alt="image" class="product-image">
                    <div class="product-details">
                        <h3 class="product-name">${singleProductData.fields.name}</h3>
                        <h3 class="product-company">${singleProductData.fields.company}</h3>
                        <h1 class="product-price">$ ${formatPrice}</h1>
                        <h3 class="product-colors">${colorsList}</h3>
                        <p class="product-desc">${singleProductData.fields.description}</p> 
                        <button class="cart-btn">add to cart</button>
                    </div>
                </article>
            `;

            document.querySelector('.product-container').innerHTML = productContainer;
        }
    });
}

