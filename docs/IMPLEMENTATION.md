# 📚 IMPLEMENTATION - Documentación Técnica Completa

**Última actualización:** 3 de noviembre de 2025  
**Versión:** 1.1.0

---

## Tabla de Contenidos

1. [Descripción General](#descripción-general)
2. [Archivos del Proyecto](#archivos-del-proyecto)
3. [Carrito de Compras](#carrito-de-compras)
4. [Buscador de Productos](#buscador-de-productos)
5. [Ejemplos de Código](#ejemplos-de-código)
6. [Estructura de Datos](#estructura-de-datos)
7. [Integración](#integración)
8. [Personalización Avanzada](#personalización-avanzada)
9. [Troubleshooting](#troubleshooting)

---

## Descripción General

SweetVerse es una tienda online de dulces con dos características principales:

1. **Carrito Deslizable** - Sistema completo de compra
2. **Buscador de Productos** - Búsqueda en tiempo real

Ambas características están completamente integradas y funcionan sin conflictos.

### Tecnología

- **HTML5** - Estructura semántica
- **CSS3** - Variables CSS, Flexbox, Grid, Animaciones
- **JavaScript Vanilla** - ES6+, sin dependencias
- **localStorage** - Persistencia de datos
- **Event Listeners** - Sincronización en tiempo real

---

## Archivos del Proyecto

### 📄 HTML

```
index.html                    - Página principal
pages/
  ├── cart.html              - Página completa del carrito
  ├── products.html          - Catálogo de productos
  └── product-*.html         - 6 páginas de productos individuales
```

### 🎨 CSS

```
css/
  ├── styles.css             - Estilos principales + búsqueda
  └── cart-styles.css        - Estilos del carrito deslizable
```

### ⚙️ JavaScript

```
js/
  ├── script.js              - Lógica principal (Carrito + Búsqueda)
  ├── cart-script.js         - Clase CartManager (sincronización)
  └── product-script.js      - Funcionalidad de productos
```

### 📚 Documentación

```
docs/
  ├── QUICK_START.md         - Guía rápida (5 min)
  ├── IMPLEMENTATION.md      - Este archivo (documentación técnica)
  ├── ARCHITECTURE.md        - Arquitectura del sistema
  ├── CHANGELOG.md           - Historial de cambios
  └── [Otros documentos obsoletos - pueden eliminarse]
```

---

## Carrito de Compras

### ¿Cómo funciona?

1. Usuario hace click en "Agregar al carrito"
2. `addToCart()` agrega el producto a `ShoppingCart`
3. Se guarda en `localStorage['sweetverse_cart']`
4. Se dispara evento `cartUpdated`
5. `CartManager` renderiza el carrito
6. UI se actualiza con animación

### Archivos Relacionados

| Archivo | Función |
|---------|---------|
| `cart.html` | Página dedicada del carrito |
| `cart-styles.css` | Estilos y animaciones |
| `cart-script.js` | Clase CartManager |
| `script.js` | Integración y eventos |

### Clase CartManager

```javascript
class CartManager {
    constructor()               // Inicializa y carga el carrito
    loadCart()                 // Obtiene datos de localStorage
    saveCart()                 // Guarda en localStorage
    renderCart()               // Renderiza la UI
    openCart()                 // Abre el sidebar
    closeCart()                // Cierra el sidebar
    addItem(name, price)       // Agrega un producto
    removeItem(name)           // Elimina un producto
    updateQuantity(name, qty)  // Actualiza cantidad
    calculateTotal()           // Calcula totales
}
```

### Eventos Disparados

```javascript
// Evento de sincronización
window.dispatchEvent(
    new CustomEvent('cartUpdated', {
        detail: { cart: window.cartManager.cart }
    })
);
```

### localStorage Schema

```javascript
localStorage['sweetverse_cart'] = {
    "Caramelos": {
        "price": 5.99,
        "quantity": 2
    },
    "Chocolates": {
        "price": 12.99,
        "quantity": 1
    }
}
```

### Cálculos

```javascript
// En CartManager.calculateTotal()
let subtotal = 0;
for (let product in this.cart) {
    const item = this.cart[product];
    subtotal += item.price * item.quantity;
}

const tax = subtotal * 0.12;        // 12% tax
const total = subtotal + tax;

return total;
```

---

## Buscador de Productos

### ¿Cómo funciona?

1. Usuario escribe en la barra de búsqueda
2. Evento `input` dispara `showSuggestions()`
3. Se filtran 6 productos de `productsDatabase`
4. Aparece dropdown con sugerencias
5. Usuario hace click en sugerencia o presiona Enter
6. Se filtra página actual o redirige a producto

### Base de Datos de Productos

```javascript
const productsDatabase = [
    {
        name: "Caramelos Clásicos",
        description: "Caramelos tradicionales con sabor intenso",
        price: 5.99,
        icon: "🍬",
        url: "pages/product-caramelos.html"
    },
    {
        name: "Chupetines Premium",
        description: "Chupetines gourmet en diferentes sabores",
        price: 3.49,
        icon: "🍭",
        url: "pages/product-chupetines.html"
    },
    // ... 4 productos más
]
```

### Funciones Principales

```javascript
showSuggestions(searchTerm)  // Muestra dropdown de sugerencias
performSearch(searchTerm)    // Filtra productos en página actual
```

### Filtrado

```javascript
// Busca insensible a mayúsculas en:
// - Nombre del producto
// - Descripción
// - Precio
const searchLower = searchTerm.toLowerCase();
const matches = productsDatabase.filter(product =>
    product.name.toLowerCase().includes(searchLower) ||
    product.description.toLowerCase().includes(searchLower) ||
    product.price.toString().includes(searchLower)
);
```

---

## Ejemplos de Código

### Ejemplo 1: Agregar producto desde HTML

```html
<button onclick="addToCart('Caramelos', 5.99)">
    Agregar al Carrito
</button>
```

### Ejemplo 2: Agregar desde JavaScript

```javascript
const btn = document.querySelector('.add-to-cart-btn');
btn.addEventListener('click', () => {
    addToCart('Chocolates Gourmet', 12.99);
});
```

### Ejemplo 3: Abrir carrito desde JavaScript

```javascript
if (window.cartManager) {
    window.cartManager.openCart();
}
```

### Ejemplo 4: Agregar y abrir carrito

```javascript
addToCart('Donuts Artesanales', 7.99);
setTimeout(() => {
    if (window.cartManager) {
        window.cartManager.openCart();
    }
}, 300);
```

### Ejemplo 5: Verificar si hay productos

```javascript
if (window.cartManager) {
    const itemCount = Object.keys(window.cartManager.cart).length;
    if (itemCount > 0) {
        console.log(`Hay ${itemCount} productos en el carrito`);
    }
}
```

### Ejemplo 6: Obtener total del carrito

```javascript
if (window.cartManager) {
    const total = window.cartManager.calculateTotal();
    console.log(`Total: $${total.toFixed(2)}`);
}
```

### Ejemplo 7: Escuchar cambios en el carrito

```javascript
window.addEventListener('cartUpdated', (event) => {
    const cart = event.detail.cart;
    console.log('Carrito actualizado:', cart);
});
```

### Ejemplo 8: Buscar desde JavaScript

```javascript
// Activar búsqueda desde código
const searchInput = document.querySelector('.search-input');
searchInput.value = "Chocolates";
searchInput.dispatchEvent(new Event('input'));
```

### Ejemplo 9: Obtener sugerencias manualmente

```javascript
const searchTerm = "Donuts";
const matches = productsDatabase.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
);
console.log(matches);
// Output: [{name: "Donuts Artesanales", price: 7.99, ...}]
```

### Ejemplo 10: Cantidad total de dinero en carrito

```javascript
if (window.cartManager) {
    let subtotal = 0;
    for (let product in window.cartManager.cart) {
        const item = window.cartManager.cart[product];
        subtotal += item.price * item.quantity;
    }
    console.log(`Dinero gastado: $${subtotal.toFixed(2)}`);
}
```

---

## Estructura de Datos

### Cart Object

```javascript
{
    "Producto A": {
        price: 9.99,
        quantity: 2
    },
    "Producto B": {
        price: 15.50,
        quantity: 1
    }
}
```

### Product Object (en base de datos)

```javascript
{
    name: "Nombre del Producto",
    description: "Descripción breve",
    price: 12.99,
    icon: "🍫",
    url: "pages/product-page.html"
}
```

### Totals Object

```javascript
{
    subtotal: 24.97,
    tax: 2.99,
    total: 27.96
}
```

---

## Integración

### Inicialización en Páginas

```javascript
// 1. Se carga script.js
// 2. Se ejecuta: window.addEventListener('DOMContentLoaded', ...)
// 3. Se inyecta: createCartUI()
// 4. Se crea: CartManager instance
// 5. Todo listo para usar
```

### Sincronización entre Páginas

```javascript
// Detecta cambios en localStorage desde otras pestañas
window.addEventListener('storage', (event) => {
    if (event.key === 'sweetverse_cart') {
        // Actualizar carrito desde otra pestaña
        window.cartManager.loadCart();
        window.cartManager.renderCart();
    }
});
```

### Event Flow

```
Usuario acción
    ↓
JavaScript event handler
    ↓
Función (addToCart, showSuggestions, etc.)
    ↓
localStorage actualizado
    ↓
Evento 'cartUpdated' disparado
    ↓
CartManager escucha y re-renderiza
    ↓
UI actualizada
```

---

## Personalización Avanzada

### Cambiar el impuesto

**Archivo:** `js/cart-script.js`

```javascript
// Busca esta línea (aprox línea 45):
const tax = subtotal * 0.12;

// Cambia 0.12 al valor que desees:
const tax = subtotal * 0.08;  // Para 8%
```

### Agregar nuevo producto a base de datos

**Archivo:** `js/script.js`

```javascript
// Busca: const productsDatabase = [
// Agrega al final del array:
{
    name: "Nuevo Producto",
    description: "Descripción",
    price: 9.99,
    icon: "🎁",
    url: "pages/product-nuevo.html"
}
```

### Cambiar colores

**Archivo:** `css/styles.css`

```css
:root {
    --primary-pink: #E85D8A;        /* Rosa principal */
    --light-pink: #F5D7E8;          /* Rosa claro */
    --dark-pink: #C94872;           /* Rosa oscuro */
    --accent-purple: #8B5FBF;       /* Púrpura */
    --dark-bg: #0F0F1E;             /* Fondo oscuro */
}
```

### Cambiar velocidad de animaciones

**Archivo:** `css/cart-styles.css`

```css
@keyframes slideInFromRight {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
}

.cart-sidebar {
    animation: slideInFromRight 0.3s ease-out;  /* Cambiar 0.3s */
}
```

### Aumentar límite de búsqueda

**Archivo:** `css/styles.css`

```css
.search-suggestions {
    max-height: 300px;  /* Aumentar a 500px si quieres más resultados visibles */
    overflow-y: auto;
}
```

---

## Troubleshooting

### El carrito no se abre

**Causas posibles:**
- `cart-styles.css` no está en la carpeta `css/`
- JavaScript está deshabilitado
- Error en consola (F12)

**Solución:**
```javascript
// En consola de navegador (F12):
window.cartManager.openCart();
// Debería abrir el carrito
```

### No se sincroniza entre pestañas

**Causas posibles:**
- localStorage deshabilitado
- Usando navegación privada

**Verificar:**
```javascript
// En consola:
localStorage.setItem('test', 'test');
localStorage.getItem('test');  // Debería devolver 'test'
```

### Búsqueda no funciona

**Causas posibles:**
- productosDatabase no está cargado
- Event listeners no se adjuntaron

**Verificar:**
```javascript
// En consola:
console.log(productsDatabase);
// Debería mostrar array de 6 productos
```

### Carrito se ve mal en móvil

**Causas posibles:**
- CSS media queries no se aplican
- Caché del navegador

**Solución:**
- Limpiar caché (Ctrl+Shift+Delete)
- Forzar recarga (Ctrl+Shift+R)

### Precios incorrectos

**Causas posibles:**
- Precios contienen símbolos ($)
- Errores en cálculo de impuesto

**Verificar:**
```javascript
// Los precios deben ser números puros:
addToCart('Producto', 9.99);    // ✅ Correcto
addToCart('Producto', '$9.99');  // ❌ Incorrecto
```

---

## Notas Importantes

- localStorage se limpia al limpiar caché del navegador
- Los datos NO están encriptados (es almacenamiento local)
- La búsqueda es local (no requiere servidor)
- Compatible con navegadores modernos (Chrome, Firefox, Safari, Edge)
- Sin dependencias externas necesarias

---

**Versión:** 1.1.0  
**Última revisión:** 3 de noviembre de 2025  
**Estado:** ✅ Completado
