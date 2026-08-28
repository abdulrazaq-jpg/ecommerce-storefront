const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    inStock: true
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 149.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    inStock: true
  },
  {
    id: 3,
    name: "Cotton Hoodie",
    price: 49.99,
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500",
    inStock: true
  },
  {
    id: 4,
    name: "Denim Jacket",
    price: 79.99,
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500",
    inStock: false
  },
  {
    id: 5,
    name: "Leather Wallet",
    price: 29.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500",
    inStock: true
  },
  {
    id: 6,
    name: "Canvas Backpack",
    price: 59.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    inStock: true
  }
];

const main = document.getElementById("productGrid");



function add_products(products) {
    products.forEach(product => {
        main.innerHTML = "";

        main.innerHTML += `
        <div class = "product_card">
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
            <p>${product.category}</p>
            <p>${product.price.toFixed(2)}</p>
            <button class = "add_to_cart_button" data-id = "${product.id}" ${!product.inStock ? 'disabled' : ''}>${!product.inStock ? 'Out Of Stock' : 'Add to Cart'}</button>
        </div>
        `
    });
}

add_products(products);