// ============================================
// FUNCIONALIDAD DE PÁGINAS DE PRODUCTO INDIVIDUAL
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const decreaseBtn = document.getElementById('decrease');
    const increaseBtn = document.getElementById('increase');
    const quantityInput = document.getElementById('quantity');
    const addToCartBtn = document.getElementById('add-to-cart');

    if (decreaseBtn && increaseBtn && quantityInput && addToCartBtn) {
        // Botón de disminuir
        decreaseBtn.addEventListener('click', () => {
            if (parseInt(quantityInput.value) > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
            }
        });

        // Botón de aumentar
        increaseBtn.addEventListener('click', () => {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        });

        // Botón de agregar al carrito
        addToCartBtn.addEventListener('click', () => {
            const quantity = parseInt(quantityInput.value);
            const productTitle = document.querySelector('.product-detail-title').textContent;
            const priceText = document.querySelector('.product-detail-price').textContent;
            const price = parseFloat(priceText.replace('$', ''));

            // Agregar cada cantidad al carrito
            for (let i = 0; i < quantity; i++) {
                shoppingCart.addProduct(productTitle, price);
            }

            showNotification(`¡${quantity} ${productTitle}${quantity > 1 ? 's' : ''} añadido al carrito! 🎉`);
            quantityInput.value = 1;
        });
    }
});
