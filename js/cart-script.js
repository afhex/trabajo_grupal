// ============================================
// GESTIÓN DEL CARRITO DESLIZABLE
// ============================================

class CartManager {
    constructor() {
        this.cart = this.loadCart();
        this.cartSidebar = document.getElementById('cartSidebar');
        this.cartOverlay = document.getElementById('cartOverlay');
        this.cartIconNav = document.getElementById('cartIconNav');
        this.cartCloseBtn = document.getElementById('cartCloseBtn');
        this.cartItemsContainer = document.getElementById('cartItemsContainer');
        this.subtotalValue = document.getElementById('subtotalValue');
        this.taxValue = document.getElementById('taxValue');
        this.totalValue = document.getElementById('totalValue');
        this.checkoutBtn = document.getElementById('checkoutBtn');
        this.continueShoppingBtn = document.getElementById('continueShoppingBtn');
        this.cartCountElement = document.querySelector('.cart-count');

        this.initializeEventListeners();
        this.renderCart();
        this.syncWithOtherPages();
    }

    // Cargar carrito desde localStorage
    loadCart() {
        const saved = localStorage.getItem('sweetverse_cart');
        return saved ? JSON.parse(saved) : {};
    }

    // Guardar carrito en localStorage
    saveCart() {
        localStorage.setItem('sweetverse_cart', JSON.stringify(this.cart));
        this.updateCartCount();
        window.dispatchEvent(new Event('cartUpdated'));
    }

    // Actualizar contador del carrito en navbar
    updateCartCount() {
        let total = 0;
        for (let product in this.cart) {
            total += this.cart[product].quantity;
        }
        if (this.cartCountElement) {
            this.cartCountElement.textContent = total;
            if (total > 0) {
                this.cartCountElement.style.display = 'flex';
            } else {
                this.cartCountElement.style.display = 'none';
            }
        }
    }

    // Inicializar event listeners
    initializeEventListeners() {
        // Abrir carrito
        if (this.cartIconNav) {
            this.cartIconNav.addEventListener('click', () => this.openCart());
        }

        // Cerrar carrito
        if (this.cartCloseBtn) {
            this.cartCloseBtn.addEventListener('click', () => this.closeCart());
        }

        // Cerrar carrito al hacer clic en overlay
        if (this.cartOverlay) {
            this.cartOverlay.addEventListener('click', () => this.closeCart());
        }

        // Botón continuar comprando
        if (this.continueShoppingBtn) {
            this.continueShoppingBtn.addEventListener('click', () => this.closeCart());
        }

        // Botón checkout
        if (this.checkoutBtn) {
            this.checkoutBtn.addEventListener('click', () => this.checkout());
        }

        // Cerrar carrito con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeCart();
            }
        });
    }

    // Abrir carrito
    openCart() {
        this.cartSidebar.classList.add('active');
        this.cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Cerrar carrito
    closeCart() {
        this.cartSidebar.classList.remove('active');
        this.cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Renderizar carrito
    renderCart() {
        if (Object.keys(this.cart).length === 0) {
            this.cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <div class="empty-cart-icon">🛒</div>
                    <p class="empty-cart-text">Tu carrito está vacío</p>
                    <p class="empty-cart-subtext">¡Agrega algunos productos deliciosos!</p>
                </div>
            `;
            this.checkoutBtn.disabled = true;
            this.updateSummary();
            return;
        }

        this.checkoutBtn.disabled = false;

        // Limpiar contenedor
        this.cartItemsContainer.innerHTML = '';

        // Renderizar cada item
        for (let productName in this.cart) {
            const product = this.cart[productName];
            const itemElement = this.createCartItemElement(productName, product);
            this.cartItemsContainer.appendChild(itemElement);
        }

        this.updateSummary();
    }

    // Crear elemento de item del carrito
    createCartItemElement(productName, product) {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.dataset.product = productName;

        const itemTotal = product.price * product.quantity;

        div.innerHTML = `
            <div class="item-header">
                <p class="item-name">${productName}</p>
                <button class="item-remove-btn" data-product="${productName}">Eliminar</button>
            </div>
            <div class="item-details">
                <div class="detail-row">
                    <span class="detail-label">Precio:</span>
                    <span class="detail-value">$${product.price.toFixed(2)}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Subtotal:</span>
                    <span class="detail-value">$${itemTotal.toFixed(2)}</span>
                </div>
            </div>
            <div class="quantity-control">
                <button class="qty-btn decrease" data-product="${productName}">−</button>
                <span class="qty-display">${product.quantity}</span>
                <button class="qty-btn increase" data-product="${productName}">+</button>
            </div>
            <div class="item-total">
                <span class="item-total-label">Total del item:</span>
                <span class="item-total-value">$${itemTotal.toFixed(2)}</span>
            </div>
        `;

        // Event listeners para los botones
        const removeBtn = div.querySelector('.item-remove-btn');
        const decreaseBtn = div.querySelector('.qty-btn.decrease');
        const increaseBtn = div.querySelector('.qty-btn.increase');

        removeBtn.addEventListener('click', () => {
            div.classList.add('removing');
            setTimeout(() => {
                this.removeProduct(productName);
            }, 300);
        });

        decreaseBtn.addEventListener('click', () => this.updateQuantity(productName, -1));
        increaseBtn.addEventListener('click', () => this.updateQuantity(productName, 1));

        return div;
    }

    // Actualizar cantidad de producto
    updateQuantity(productName, change) {
        if (this.cart[productName]) {
            this.cart[productName].quantity += change;
            if (this.cart[productName].quantity <= 0) {
                this.removeProduct(productName);
            } else {
                this.saveCart();
                this.renderCart();
            }
        }
    }

    // Eliminar producto
    removeProduct(productName) {
        delete this.cart[productName];
        this.saveCart();
        this.renderCart();
    }

    // Actualizar resumen del carrito
    updateSummary() {
        let subtotal = 0;
        for (let product in this.cart) {
            subtotal += this.cart[product].price * this.cart[product].quantity;
        }

        const tax = subtotal * 0.12;
        const total = subtotal + tax;

        this.subtotalValue.textContent = `$${subtotal.toFixed(2)}`;
        this.taxValue.textContent = `$${tax.toFixed(2)}`;
        this.totalValue.textContent = `$${total.toFixed(2)}`;
    }

    // Proceder al checkout
    checkout() {
        const total = this.calculateTotal();
        if (total > 0) {
            alert(`Proceder al pago de $${total.toFixed(2)}. ¡Gracias por tu compra!`);
            this.cart = {};
            this.saveCart();
            this.renderCart();
            this.closeCart();
        }
    }

    // Calcular total
    calculateTotal() {
        let subtotal = 0;
        for (let product in this.cart) {
            subtotal += this.cart[product].price * this.cart[product].quantity;
        }
        return subtotal * 1.12; // Con impuesto del 12%
    }

    // Sincronizar cambios con otras páginas
    syncWithOtherPages() {
        // Escuchar cambios en localStorage desde otras pestañas/ventanas
        window.addEventListener('storage', (e) => {
            if (e.key === 'sweetverse_cart') {
                this.cart = this.loadCart();
                this.renderCart();
            }
        });

        // Escuchar evento personalizado de otras páginas
        window.addEventListener('cartUpdated', () => {
            this.cart = this.loadCart();
            this.renderCart();
        });
    }

    // Agregar producto desde otras páginas
    addProduct(name, price) {
        if (this.cart[name]) {
            this.cart[name].quantity++;
        } else {
            this.cart[name] = {
                price: price,
                quantity: 1
            };
        }
        this.saveCart();
    }

    // Obtener estado actual del carrito
    getCart() {
        return this.cart;
    }
}

// Inicializar carrito cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.cartManager = new CartManager();
});

// Función global para agregar productos desde otras páginas
function addToCart(productName, productPrice) {
    if (window.cartManager) {
        window.cartManager.addProduct(productName, productPrice);
    } else {
        // Si cartManager no está disponible, guardar en localStorage directamente
        const cart = JSON.parse(localStorage.getItem('sweetverse_cart') || '{}');
        if (cart[productName]) {
            cart[productName].quantity++;
        } else {
            cart[productName] = {
                price: productPrice,
                quantity: 1
            };
        }
        localStorage.setItem('sweetverse_cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('cartUpdated'));
    }
}
