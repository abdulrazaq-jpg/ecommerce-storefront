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
    },
    {
        id: 7,
        name: "Ergonomic Gaming Mouse",
        price: 39.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
        inStock: true
    },
    {
        id: 8,
        name: "Smart Watch",
        price: 199.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        inStock: true
    },
    {
        id: 9,
        name: "Graphic T-Shirt",
        price: 24.99,
        category: "Apparel",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500",
        inStock: true
    },
    {
        id: 10,
        name: "Running Shoes",
        price: 89.99,
        category: "Apparel",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        inStock: false
    },
    {
        id: 11,
        name: "Polarized Sunglasses",
        price: 45.00,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
        inStock: true
    },
    {
        id: 12,
        name: "Minimalist Watch",
        price: 119.99,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500",
        inStock: true
    }
];

const main = document.getElementById("productGrid");

function add_products(products) {
    let cardsHTML = "";
    products.forEach(product => {
        cardsHTML += `
        <div class = "product_card">
         <img src="${product.image}" alt="${product.name}">
         <p>${product.name}</p>
         <p>${product.category}</p>
         <p>$${product.price.toFixed(2)}</p>
         <button class = "add_to_cart_button" data-id = "${product.id}" ${!product.inStock ? 'disabled' : ''}>${!product.inStock ? 'Out Of Stock' : 'Add to Cart'}</button>
        </div>
        `
    });

    main.innerHTML = cardsHTML;
}

add_products(products);

function open_cartDrawer() {
    const cartDrawer = document.getElementById("cartDrawer");
    const opencart = document.getElementById("opencart");
    const closecart = document.getElementById("closecart");

    opencart.addEventListener("click", () => {
        cartDrawer.classList.add("open");
    });

    closecart.addEventListener("click", () => {
        cartDrawer.classList.remove("open");
    });

}

open_cartDrawer();

const cart_content = document.getElementById("cart-list");

let cnt = 0;
const cart_Arr = [];

function add_to_cart() {
    main.addEventListener("click", (event) => {
        if (event.target.classList.contains("add_to_cart_button")) {
            const product_id = Number(event.target.dataset.id);
            const selected_product = products.find(p => p.id === product_id);

            if (selected_product) {
                if (cart_Arr.some(p => p.id === product_id)) {
                    alert("Item Present In Cart");
                }
                else {
                    update_cart(product_id, selected_product);
                }
            }
        };
    })
}

function update_cart(product_id, selected_product) {
    cnt++;
    cart_content.innerHTML += `
    <div class = "product_card">
        <img src="${selected_product.image}" alt="${selected_product.name}">
        <p>${selected_product.name}</p>
        <p>${selected_product.category}</p>
        <p>$${selected_product.price.toFixed(2)}</p>
        <button class = "cart_btn" data-id="${product_id}">
            Remove
        </button>
    </div>
    `
    document.getElementById("count").innerHTML = cnt;

    cart_Arr.push(selected_product);

    alert("Added to Cart");
}

add_to_cart()

const element = document.getElementById("cartDrawer");

function remove_from_cart() {
    element.addEventListener("click", (e) => {
        if (e.target.classList.contains("cart_btn")) {
            const p_id = Number(e.target.dataset.id);

            let index = cart_Arr.findIndex(p => p.id === p_id);

            if (index !== -1) {
                cart_Arr.splice(index, 1);
                if (cnt !== 0) cnt--;
                document.getElementById("count").innerHTML = cnt;
                render_cart();
            }
        }
    })
}

function render_cart() {
    if (cart_Arr.length === 0) {
        cart_content.innerHTML = "CART IS EMPTY";
    }
    else {
        cart_content.innerHTML = "";
        cart_Arr.forEach(element => {
            cart_content.innerHTML += `
                <div class = "product_card">
                    <img src="${element.image}" alt="${element.name}">
                    <p>${element.name}</p>
                    <p>${element.category}</p>
                    <p>$${element.price.toFixed(2)}</p>
                    <button class = "cart_btn" data-id="${element.id}">
                        Remove
                    </button>
                </div>
            `
        });
    }

}

remove_from_cart();

const filter_btn = document.querySelector(".filters nav");

function filter_category(products) {
    filter_btn.addEventListener("click", (event) => {
        let cat_Arr = [];
        const rawcat = event.target.dataset.category;

        if (!rawcat) return;

        const cat = String(event.target.dataset.category).toLowerCase();

        if (cat === "all") {
            cat_Arr = products;
        }
        else {
            cat_Arr = products.filter(item => item.category.toLowerCase() === cat);
        }

        add_products(cat_Arr);
    })
}

filter_category(products);