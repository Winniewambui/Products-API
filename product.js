const url = 'https://course-api.com/javascript-store-single-product';

window.addEventListener('DOMContentLoaded', () => {
    displaySingleProduct();
});

function displaySingleProduct() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    fetch(url, {
        headers: {
            'Accept': 'application/json',
        },
    }).then((response) => {
        return response.json();
    }).then((data) => {
        const singleProduct = data.find(product => product.id === productId);
        if (singleProduct) {
            const formatPrice = singleProduct.fields.price / 100;

            const productContainer = `
                <article class="single-product">
                    <img src="${singleProduct.fields.image[0].url}" alt="image" class="product-image">
                    <div class="product-details">
                        <h3 class="product-name">${singleProduct.fields.name}</h3>
                        <h3 class="product-company">${singleProduct.fields.company}</h3>
                        <h1 class="product-price">$ ${formatPrice}</h1>
                        <h3 class="product-colors">${singleProduct.fields.colors}</h3>
                        <p class="product-desc">${singleProduct.fields.description}</p>
                    </div>
                </article>
            `;

            document.querySelector('.single-product').innerHTML = productContainer;
        }
    });
}