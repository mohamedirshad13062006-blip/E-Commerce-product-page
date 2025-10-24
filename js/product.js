// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const prodId = urlParams.get('id');

// Elements
const prodImage = document.getElementById('prod-image');
const prodName = document.getElementById('prod-name');
const prodPrice = document.getElementById('prod-price');
const prodType = document.getElementById('prod-type');
const prodDesc = document.getElementById('prod-desc');
const placeOrderBtn = document.getElementById('place-order-btn');
const orderMsg = document.getElementById('order-msg');

// Fetch products and find the one matching the ID
fetch('data/products.json')
  .then(response => response.json())
  .then(products => {
    const product = products.find(p => p.id === prodId);
    if (!product) {
      prodName.textContent = 'Product Not Found';
      placeOrderBtn.style.display = 'none';
      return;
    }
    prodImage.src = product.image;
    prodName.textContent = product.name;
    prodPrice.textContent = '₹' + product.price;
    prodType.textContent = product.types;
    prodDesc.textContent = product.description;
  });

// Place order button click handler
placeOrderBtn.addEventListener('click', () => {
  orderMsg.textContent = 'Order Placement Successful! Thank you for your purchase.';
  placeOrderBtn.disabled = true;
});
