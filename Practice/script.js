// Sample product data (can be fetched from backend)
const products = [
    {
        image: 'image.jpg',
        title: 'Product 1',
        description: 'Hello madhusudan ka shoes bol rha hu ',
        price: '$19.99'
    },
    {
        image: 'image.jpg',
        title: 'Product 2',
        description: 'madhusudan bahu achha banda hai',
        price: '$29.99'
    },
    // Add more products here if needed
];

// Function to display products
function displayProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        const imageElement = document.createElement('img');
        imageElement.src = product.image;
        productElement.appendChild(imageElement);

        const detailsElement = document.createElement('div');
        detailsElement.classList.add('product-details');

        const titleElement = document.createElement('div');
        titleElement.classList.add('product-title');
        titleElement.textContent = product.title;
        detailsElement.appendChild(titleElement);

        const descriptionElement = document.createElement('div');
        descriptionElement.classList.add('product-description');
        descriptionElement.textContent = product.description;
        detailsElement.appendChild(descriptionElement);

        const priceElement = document.createElement('div');
        priceElement.classList.add('product-price');
        priceElement.textContent = product.price;
        detailsElement.appendChild(priceElement);

        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add('add-to-cart');
        addToCartButton.textContent = 'Add to Cart';
        addToCartButton.addEventListener('click', () => {
            // Add functionality to add product to cart here
            alert('Product added to cart: ' + product.title);
        });
        detailsElement.appendChild(addToCartButton);

        productElement.appendChild(detailsElement);
        productContainer.appendChild(productElement);
    });
}

// Call the function to display products when the page loads
displayProducts();
