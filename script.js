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
});

// ============================================
// CARRITO DE COMPRAS
// ============================================

let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

document.querySelectorAll('.product-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        cartCount++;
        cartCountElement.textContent = cartCount;
        
        // Animación del botón
        button.style.animation = 'none';
        setTimeout(() => {
            button.style.animation = 'pulse 0.6s ease';
        }, 10);
        
        // Notificación visual
        showNotification('Producto añadido al carrito ✨');
    });
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
