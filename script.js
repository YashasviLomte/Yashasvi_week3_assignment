let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let totalPrice = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} -₹${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    document.getElementById('total-price').textContent = `Total: ₹${totalPrice.toFixed(2)}`;
}

document.getElementById('checkout-button').addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Thank you for your purchase!');
        cart = [];
        updateCart();
    } else {
        alert('Your cart is empty!');
    }
});
