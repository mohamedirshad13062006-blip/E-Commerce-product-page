// Fetch products and display on main page
fetch('data/products.json')
  .then(response => response.json())
  .then(products => {
    const productList = document.getElementById('product-list');
    products.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${prod.image}" alt="${prod.name}" />
        <div class="product-name">${prod.name}</div>
        <div class="product-price">₹${prod.price}</div>
      `;
      card.addEventListener('click', () => {
        window.location.href = `product.html?id=${prod.id}`;
      });
      productList.appendChild(card);
    });
  })
  .catch(err => {
    console.error('Failed to load products:', err);
  });
