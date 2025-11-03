// ============================================
// 🍬 SWEETVERSE — CARRITO DE COMPRAS CON LOCALSTORAGE
// Autor(a): Camila León | Última actualización: 03/11/2025
// ============================================

class ShoppingCart {
    constructor() {
        this.cart = this.loadCart();
        this.cartCountElement = document.querySelector('.cart-count');
        this.updateCartCount();
    }

    loadCart() {
        const saved = localStorage.getItem('sweetverse_cart');
        return saved ? JSON.parse(saved) : {};
    }

    saveCart() {
        localStorage.setItem('sweetverse_cart', JSON.stringify(this.cart));
        this.updateCartCount();
        // Disparar evento para sincronizar con el carrito deslizable
        window.dispatchEvent(new Event('cartUpdated'));
    }

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

    updateCartCount() {
        let total = 0;
        for (let product in this.cart) {
            total += this.cart[product].quantity;
        }
        if (this.cartCountElement) {
            this.cartCountElement.textContent = total;
        }
    }

    getTotal() {
        let total = 0;
        for (let product in this.cart) {
            total += this.cart[product].quantity;
        }
        return total;
    }

    getTotalPrice() {
        let total = 0;
        for (let product in this.cart) {
            total += this.cart[product].price * this.cart[product].quantity;
        }
        return total;
    }

    removeProduct(name) {
        delete this.cart[name];
        this.saveCart();
    }

    clearCart() {
        this.cart = {};
        this.saveCart();
    }
}

// Inicializar carrito global
const shoppingCart = new ShoppingCart();

// ============================================
// FUNCIONALIDAD DE NAVEGACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    // Activar enlace de navbar según scroll
    window.addEventListener('scroll', () => {
        let current = '';

        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Detectar la ruta del script actual
    const scriptPath = document.currentScript.src;
    const isInJsFolder = scriptPath.includes('/js/');
    const cssPath = isInJsFolder ? '../css/cart-styles.css' : 'css/cart-styles.css';

    // Cargar estilos del carrito si no están incluidos
    const cartStyleLink = document.querySelector('link[href*="cart-styles.css"]');

    if (!cartStyleLink) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssPath;
        document.head.appendChild(link);
    }

    // No inyectar cart-script.js - CartManagerOnPages ya está definido en este archivo
    // cart-script.js solo se usa en pages/cart.html que lo carga explícitamente

    // Crear carrito si no existe
    createCartUI();
});

// ============================================
// NOTIFICACIONES
// ============================================

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #E85D8A, #C94872);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 50px;
        box-shadow: 0 8px 25px rgba(232, 93, 138, 0.3);
        font-weight: 600;
        z-index: 2000;
        animation: slideInDown 0.4s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideInUp 0.4s ease';
        setTimeout(() => notification.remove(), 400);
    }, 2000);
}

// ============================================
// CREAR UI DEL CARRITO EN LAS PÁGINAS
// ============================================

function createCartUI() {
    // Verificar si la UI del carrito ya existe
    if (document.getElementById('cartSidebar')) {
        return;
    }

    // Crear overlay
    const overlay = document.createElement('div');
    overlay.id = 'cartOverlay';
    overlay.className = 'cart-overlay';
    document.body.appendChild(overlay);

    // Crear sidebar del carrito
    const sidebar = document.createElement('div');
    sidebar.id = 'cartSidebar';
    sidebar.className = 'cart-sidebar';
    sidebar.innerHTML = `
        <div class="cart-header">
            <h2 class="cart-title">Mi Carrito</h2>
            <button class="cart-close-btn" id="cartCloseBtn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
        <div class="cart-items-container" id="cartItemsContainer">
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p class="empty-cart-text">Tu carrito está vacío</p>
                <p class="empty-cart-subtext">¡Agrega algunos productos deliciosos!</p>
            </div>
        </div>
        <div class="cart-footer">
            <div class="cart-summary">
                <div class="summary-row">
                    <span>Subtotal:</span>
                    <span class="summary-value" id="subtotalValue">$0.00</span>
                </div>
                <div class="summary-row">
                    <span>Impuesto (12%):</span>
                    <span class="summary-value" id="taxValue">$0.00</span>
                </div>
                <div class="summary-row total">
                    <span>Total:</span>
                    <span class="summary-value" id="totalValue">$0.00</span>
                </div>
            </div>
            <button class="checkout-btn" id="checkoutBtn">Proceder al Pago</button>
            <button class="continue-shopping-btn" id="continueShoppingBtn">Continuar Comprando</button>
        </div>
    `;
    document.body.appendChild(sidebar);

    // Detectar la ruta del script actual para cargar estilos
    const scriptPath3 = document.currentScript ? document.currentScript.src : '';
    const isInJsFolder2 = scriptPath3.includes('/js/');
    const cssPath2 = isInJsFolder2 ? '../css/cart-styles.css' : 'css/cart-styles.css';

    // Cargar estilos del carrito si no están incluidos
    if (!document.querySelector('link[href*="cart-styles.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssPath2;
        document.head.appendChild(link);
    }

    // Inicializar CartManager
    if (!window.cartManager) {        try {
            window.cartManager = new CartManagerOnPages();        } catch (e) {
            console.error('[ERROR] Failed to create CartManagerOnPages:', e);
        }
    } else {    }
}

// ============================================
// CLASE CartManagerOnPages
// ============================================

class CartManagerOnPages {
    constructor() {
        this.cart = this.loadCart();
        this.cartSidebar = document.getElementById('cartSidebar');
        this.cartOverlay = document.getElementById('cartOverlay');
        this.cartCloseBtn = document.getElementById('cartCloseBtn');
        this.cartItemsContainer = document.getElementById('cartItemsContainer');
        this.subtotalValue = document.getElementById('subtotalValue');
        this.taxValue = document.getElementById('taxValue');
        this.totalValue = document.getElementById('totalValue');
        this.checkoutBtn = document.getElementById('checkoutBtn');
        this.continueShoppingBtn = document.getElementById('continueShoppingBtn');
        this.cartCountElement = document.querySelector('.cart-count');

        // Validar que los elementos críticos existan
        if (!this.cartSidebar || !this.cartOverlay || !this.cartItemsContainer) {
            console.error('[CartManagerOnPages] Missing required DOM elements');
            return;
        }

        this.initializeEventListeners();
        this.renderCart();
        this.setupSyncListeners();
    }

    loadCart() {
        const saved = localStorage.getItem('sweetverse_cart');
        return saved ? JSON.parse(saved) : {};
    }

    saveCart() {
        localStorage.setItem('sweetverse_cart', JSON.stringify(this.cart));
        this.updateCartCount();
        window.dispatchEvent(new Event('cartUpdated'));
    }

    updateCartCount() {
        let total = 0;
        for (let product in this.cart) {
            total += this.cart[product].quantity;
        }
        if (this.cartCountElement) {
            this.cartCountElement.textContent = total;
        }
    }

    initializeEventListeners() {
        if (this.cartCloseBtn) {
            this.cartCloseBtn.addEventListener('click', () => this.closeCart());
        }

        if (this.cartOverlay) {
            this.cartOverlay.addEventListener('click', () => this.closeCart());
        }

        if (this.continueShoppingBtn) {
            this.continueShoppingBtn.addEventListener('click', () => this.closeCart());
        }

        if (this.checkoutBtn) {
            this.checkoutBtn.addEventListener('click', () => this.checkout());
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeCart();
            }
        });
    }

    openCart() {
        this.cartSidebar.classList.add('active');
        this.cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeCart() {
        this.cartSidebar.classList.remove('active');
        this.cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

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
        this.cartItemsContainer.innerHTML = '';

        for (let productName in this.cart) {
            const product = this.cart[productName];
            const itemElement = this.createCartItemElement(productName, product);
            this.cartItemsContainer.appendChild(itemElement);
        }

        this.updateSummary();
    }

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

    removeProduct(productName) {
        delete this.cart[productName];
        this.saveCart();
        this.renderCart();
    }

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

    calculateTotal() {
        let subtotal = 0;
        for (let product in this.cart) {
            subtotal += this.cart[product].price * this.cart[product].quantity;
        }
        return subtotal * 1.12;
    }

    setupSyncListeners() {
        window.addEventListener('storage', (e) => {
            if (e.key === 'sweetverse_cart') {
                this.cart = this.loadCart();
                this.renderCart();
            }
        });

        window.addEventListener('cartUpdated', () => {
            this.cart = this.loadCart();
            this.renderCart();
        });
    }

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
}

// ============================================
// BOTONES DE PRODUCTO EN ÍNDICE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Agregar event listener al icono del carrito
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            if (window.cartManager && typeof window.cartManager.openCart === 'function') {
                window.cartManager.openCart();
            }
        });
    }
});

document.querySelectorAll('.product-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        // Obtener el nombre y precio del producto
        const card = button.closest('.product-card');
        const productName = card.querySelector('.product-name').textContent;
        const priceText = card.querySelector('.product-price').textContent;
        const price = parseFloat(priceText.replace('$', ''));

        // Agregar al carrito
        shoppingCart.addProduct(productName, price);

        // Animación del botón
        button.style.animation = 'none';
        setTimeout(() => {
            button.style.animation = 'pulse 0.6s ease';
        }, 10);

        // Notificación visual
        showNotification(`${productName} añadido al carrito ✨`);
    });
});

// ============================================
// FORMULARIO DE CONTACTO
// ============================================

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        if (name && email && message) {
            showNotification('¡Mensaje enviado exitosamente! 🎉');
            contactForm.reset();
        }
    });
}

// ============================================
// EFECTOS DE PARALLAX SUAVE
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    // Efecto parallax en hero
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ============================================
// EFECTO HOVER EN TARJETAS
// ============================================

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// ============================================
// CTA BUTTON EFFECT
// ============================================

document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        button.style.animation = 'pulse 0.6s ease';
        setTimeout(() => {
            button.style.animation = 'none';
        }, 600);
    });
});

// ============================================
// ANIMACIONES AL SCROLL (Intersection Observer)
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `slideInUp 0.8s ease forwards`;
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos
document.querySelectorAll('.product-card, .feature, .section-header').forEach(el => {
    observer.observe(el);
});

// ============================================
// SCROLL SUAVE PARA ENLACES
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// EFECTO DE CARGA INICIAL
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';
setTimeout(() => {
    document.body.style.opacity = '1';
}, 100);

console.log('🍬 ¡Bienvenido a SweetVerse! 🍬');

