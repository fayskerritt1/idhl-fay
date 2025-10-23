export function initCart() {
    const addBtn = document.querySelector('.add-to-bag');
    const cartBtn = document.querySelector('.cart__open');
    const cart = document.getElementById('cart');
    const closeBtn = cart.querySelector('.cart__close');
    const continueShoppingBtn = cart.querySelector('.continue-shopping');
    const loader = document.getElementById('cart-loader');

    if (
        !addBtn ||
        !cart ||
        !closeBtn ||
        !loader ||
        !cartBtn ||
        !continueShoppingBtn
    )
        return;

    // Function to open the cart
    const openCart = () => {
        if (cart.classList.contains('cart--open')) return; // prevent multiple opens
        cart.classList.add('cart--open');
        cart.setAttribute('aria-hidden', 'false');
        addBtn.disabled = true; // disable Add to bag button while cart is open
    };

    // Function to close the cart
    const closeCart = () => {
        cart.classList.remove('cart--open');
        cart.setAttribute('aria-hidden', 'true');
        addBtn.disabled = false; // re-enable Add to bag button
    };

    // Add to bag click: show loader then cart
    addBtn.addEventListener('click', () => {
        if (addBtn.disabled) return; // do nothing if disabled

        loader.style.display = 'block';

        setTimeout(() => {
            loader.style.display = 'none';
            openCart();
        }, 1000); // 1 second spinner
    });

    // Cart button click: open cart immediately
    cartBtn.addEventListener('click', () => {
        openCart();
    });

    // Close cart button click
    closeBtn.addEventListener('click', () => {
        closeCart();
    });

    // Continue Shopping button click
    continueShoppingBtn.addEventListener('click', () => {
        closeCart();
    });
}
