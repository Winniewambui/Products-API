const url = 'https://course-api.com/javascript-store-products';

window.addEventListener('DOMContentLoaded', () =>{

    displayProducts();
})

function displayProducts(){
    fetch(url,{
        headers: {
            'Accept':'application/json'
        }
    }).then((response) =>{
        return response.json();
    }).then((data) =>{
        console.log(data)
        // const productsArray = data.fields;

        const productsContainer = data.map(product =>{
            // console.log(product.fields.image[0]);
            return`
            <article class="product">
            <img src=${product.fields.image[0]} alt="image" class="image">
    <div class="details">
        <h3 class="name">${product.fields.name}</h3>
    <h1 class="price">${product.fields.price}</h1>
    </div>
        </article>
            `
        })
        document.querySelector('.main-container').innerHTML = productsContainer.join('');
    }).catch((err) =>{
        console.error(err);
    })
}