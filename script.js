
// Coffee information
const coffees = [
    {
        id: 1,
        name: "Classic Cold Coffee",
        price: 120,
        emoji: "🥤"
    },
    {
        id: 2,
        name: "Chocolate Cold Coffee",
        price: 150,
        emoji: "🍫"
    },
    {
        id: 3,
        name: "Vanilla Cold Coffee",
        price: 140,
        emoji: "🍦"
    },
    {
        id: 4,
        name: "Caramel Cold Coffee",
        price: 160,
        emoji: "🍮"
    }
];

// Shopping cart
let cart = [];


// Display coffee menu
function displayCoffees() {

    const coffeeList = document.getElementById("coffee-list");

    if (!coffeeList) {
        return;
    }

    coffeeList.innerHTML = "";

    coffees.forEach((coffee) => {

        const card = document.createElement("div");

        card.className = "coffee-card";

        card.innerHTML = `
            <div class="emoji">${coffee.emoji}</div>

            <h3>${coffee.name}</h3>

            <p class="price">₹${coffee.price}</p>

            <button onclick="addToCart(${coffee.id})">
                Add to Cart
            </button>
        `;

        coffeeList.appendChild(card);
    });
}


// Add coffee to cart
function addToCart(coffeeId) {

    const coffee = coffees.find(
        (item) => item.id === coffeeId
    );

    if (!coffee) {
        return;
    }

    const existingItem = cart.find(
        (item) => item.coffee.id === coffeeId
    );

    if (existingItem) {

        existingItem.quantity++;

    } else {

        cart.push({
            coffee: coffee,
            quantity: 1
        });
    }

    displayCart();
}


// Display cart
function displayCart() {

    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    if (!cartItems || !totalElement) {
        return;
    }

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item) => {

        const itemTotal =
            item.coffee.price * item.quantity;

        total += itemTotal;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <span>
                ${item.coffee.name}
                × ${item.quantity}
            </span>

            <span>
                ₹${itemTotal}
            </span>
        `;

        cartItems.appendChild(div);
    });

    totalElement.textContent = total;
}


// Place order
function placeOrder() {

    if (cart.length === 0) {

        alert("Please add a coffee to your cart!");

        return;
    }

    let total = 0;

    cart.forEach((item) => {
        total += item.coffee.price * item.quantity;
    });

    alert(
        `🎉 Order placed successfully!\n\n` +
        `Your total is ₹${total}\n\n` +
        `Thank you for ordering from Chill & Brew! ☕`
    );

    // Empty cart
    cart = [];

    displayCart();
}


// Order button
const orderButton =
    document.getElementById("order-btn");

if (orderButton) {

    orderButton.addEventListener(
        "click",
        placeOrder
    );
}


// Start application
displayCoffees();

