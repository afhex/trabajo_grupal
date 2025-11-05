# 🏗️ ARCHITECTURE - Arquitectura y Flujo del Sistema

**Última actualización:** 3 de noviembre de 2025  
**Versión:** 1.1.0

---

## Diagrama General del Sistema

```
┌─────────────────────────────────────────────────────────────────┐
│                          USUARIO                                │
│                      (Interacciones)                            │
└────────┬──────────────────┬──────────────────┬─────────────────┘
         │                  │                  │
         ▼                  ▼                  ▼
    ┌────────────┐  ┌──────────────┐  ┌───────────────┐
    │ Click en   │  │ Escribe en   │  │ Click en      │
    │ Carrito 🛒│  │ Búsqueda 🔍  │  │ Producto      │
    └────┬───────┘  └──────┬───────┘  └───┬───────────┘
         │                 │              │
         ▼                 ▼              ▼
    ┌─────────────────────────────────────────────────┐
    │        JavaScript Event Handlers                │
    │  (script.js, product-script.js)                 │
    └─────────────┬──────────────┬─────────┬──────────┘
                  │              │         │
        ┌─────────▼─┐  ┌────────▼──┐  ┌──▼──────┐
        │openCart() │  │showSuggestions()
        │closeCart()│  │performSearch()
        │           │  │addToCart()
        └─────┬─────┘  └────┬──────┘
              │             │
              ▼             ▼
        ┌──────────────────────────────┐
        │  Lógica de Aplicación        │
        │  (CartManager)               │
        └──────────┬────────┬─────────┘
                   │        │
                   ▼        ▼
            ┌────────────────────────┐
            │ localStorage           │
            │ (Persistencia)         │
            └────┬───────────────────┘
                 │
                 ▼
        ┌────────────────────────────┐
        │ Eventos Sincronización     │
        │ (cartUpdated)              │
        └─────┬──────────┬───────┬───┘
              │          │       │
      ┌───────▼──┐ ┌────▼──┐ ┌─▼──────┐
      │ Navbar   │ │Carrito│ │Página  │
      │(Counter) │ │(UI)   │ │(Items) │
      └──────────┘ └───────┘ └────────┘
```

---

## Flujo del Carrito de Compras

### 1. Inicialización

```
Página cargada (DOMContentLoaded)
    ↓
script.js se ejecuta
    ↓
createCartUI() inyecta HTML del carrito
    ↓
CartManager se instancia
    ↓
loadCart() lee de localStorage
    ↓
renderCart() dibuja la UI
    ↓
Event listeners se adjuntan
    ↓
✓ Carrito listo
```

### 2. Usuario agrega un producto

```
Click en "Agregar al carrito"
    ↓
onclick="addToCart('Nombre', precio)"
    ↓
ShoppingCart.addProduct() se ejecuta
    ↓
Producto agregado a memoria
    ↓
saveCart() guarda en localStorage
    ↓
Event 'cartUpdated' se dispara
    ↓
CartManager escucha y re-renderiza
    ↓
UI se actualiza con animación ✨
    ↓
Contador en navbar aumenta
```

### 3. Usuario abre el carrito

```
Click en icono 🛒 en navbar
    ↓
cartIconNav.addEventListener('click', ...)
    ↓
cartManager.openCart() se ejecuta
    ↓
.cart-sidebar recibe clase 'open'
    ↓
CSS animation slideInFromRight se activa
    ↓
Carrito se desliza desde derecha
    ↓
Overlay aparece
    ↓
✓ Carrito visible
```

### 4. Usuario sincroniza entre pestañas

```
Pestaña A: Agrega producto
    ↓
localStorage['sweetverse_cart'] se actualiza
    ↓
Storage event se dispara en Pestaña B
    ↓
cartManager.loadCart() se ejecuta
    ↓
CartManager re-renderiza
    ↓
UI de Pestaña B se actualiza automáticamente
    ↓
✓ Sincronización completada
```

---

## Flujo del Buscador de Productos

### 1. Usuario escribe en la barra

```
Escribe: "choco"
    ↓
Event 'input' se dispara
    ↓
showSuggestions('choco') se ejecuta
    ↓
productsDatabase se filtra
    ↓
Se busca en: name, description, price
    ↓
Coincidencias encontradas: [Chocolates Gourmet]
    ↓
HTML del dropdown se genera
    ↓
.search-suggestions se llena con resultados
    ↓
Dropdown aparece con animación
    ↓
✓ Sugerencias visibles
```

### 2. Usuario clickea en una sugerencia

```
Click en "Chocolates Gourmet"
    ↓
eventListener en .search-suggestion-item
    ↓
window.location.href = producto.url
    ↓
Redirige a: pages/product-chocolates.html
    ↓
Página se carga
    ↓
✓ Usuario en página del producto
```

### 3. Usuario presiona Enter

```
Escribe: "donuts"
    ↓
Presiona Enter
    ↓
Event 'keypress' se dispara
    ↓
performSearch('donuts') se ejecuta
    ↓
Se obtienen todos los .product-card
    ↓
Se filtra cada card por nombre/descripción
    ↓
Cards que NO coinciden: display: 'none'
    ↓
Cards que coinciden: display: ''
    ↓
Scroll automático a .products section
    ↓
✓ Productos filtrados en página
```

---

## Estructura de Archivos Detallada

### HTML Structure

```
index.html
├── <nav> (Navbar)
│   ├── Logo/Marca
│   ├── <div class="search-container">
│   │   ├── <input class="search-input">
│   │   ├── <div class="search-suggestions"> (dropdown)
│   │   └── Icono 🔍
│   └── Icono carrito 🛒 (cartIconNav)
│
├── <main>
│   ├── Hero section
│   ├── <div class="products">
│   │   └── <div class="product-card"> x múltiples
│   └── Otras secciones
│
└── <div class="cart-sidebar">  (Inyectado por JavaScript)
    ├── Header con botón X
    ├── Items del carrito
    └── Resumen de totales
```

### JavaScript Module Structure

```javascript
// script.js
├── ShoppingCart class (original)
├── CartManagerOnPages class (nuevo)
├── createCartUI() función
├── productsDatabase = [...]
├── showSuggestions() función
├── performSearch() función
└── Event listeners
    ├── cartIcon.click
    ├── searchInput.input
    ├── searchInput.keypress
    ├── window.storage
    └── window.cartUpdated

// cart-script.js
├── CartManager class
│   ├── constructor()
│   ├── loadCart()
│   ├── saveCart()
│   ├── renderCart()
│   ├── openCart()
│   ├── closeCart()
│   ├── addItem()
│   ├── removeItem()
│   ├── updateQuantity()
│   └── calculateTotal()
└── Inicialización

// product-script.js
├── Product add to cart handlers
└── Event listeners
```

### CSS Organization

```css
/* styles.css */
:root
├── Variables de color
├── Variables de spacing
├── --search-radius
└── --primary-font

/* Estilos generales */
├── Body, reset
├── Navbar
├── Products grid
├── Cards
├── Buttons
├── Search styles
│   ├── .search-container
│   ├── .search-input
│   ├── .search-suggestions
│   └── .search-suggestion-item
└── Responsive media queries

/* cart-styles.css */
.cart-overlay
├── .cart-sidebar
│   ├── .cart-header
│   ├── .cart-items-container
│   └── .cart-summary
├── Animaciones
│   ├── slideInFromRight
│   ├── slideOutToRight
│   └── fadeIn/fadeOut
└── Responsive media queries
```

---

## Data Flow Diagrams

### Add to Cart Flow

```
User Interaction
       │
       ▼
onClick="addToCart(...)"
       │
       ├─→ ShoppingCart.addProduct()
       │
       ├─→ localStorage.setItem()
       │
       ├─→ dispatchEvent('cartUpdated')
       │
       └─→ CartManager listeners
           │
           ├─→ loadCart()
           │
           ├─→ renderCart()
           │
           └─→ Update DOM
               └─→ Visual change ✨
```

### Search Flow

```
User types in search input
       │
       ▼
Event 'input' fired
       │
       ▼
showSuggestions(query)
       │
       ├─→ Filter productsDatabase
       │
       ├─→ Generate HTML
       │
       ├─→ Insert into .search-suggestions
       │
       └─→ Show dropdown ✨
```

### Sync Between Tabs

```
Tab A: addToCart()
       │
       ▼
localStorage updated
       │
       ▼
Storage event fires in Tab B
       │
       ▼
cartManager.loadCart()
       │
       ▼
cartManager.renderCart()
       │
       ▼
Tab B UI updates ✨
```

---

## Key Classes and Methods

### CartManager Class

```javascript
class CartManager {
    // Properties
    cart = {}
    cartSidebar = null
    overlay = null
    
    // Methods
    constructor()           // Initializa from localStorage
    loadCart()             // Loads cart from storage
    saveCart()             // Saves cart to storage
    renderCart()           // Renders cart UI
    openCart()             // Slides in cart
    closeCart()            // Slides out cart
    addItem(name, price)   // Adds product
    removeItem(name)       // Removes product
    updateQuantity(name, qty) // Updates qty
    calculateTotal()       // Returns totals
    emptyCart()            // Clears cart
}
```

### Key Functions

```javascript
// Carrito
addToCart(name, price)        // Agregar producto
openCart()                    // Abrir carrito
closeCart()                   // Cerrar carrito
calculateTotal()              // Calcular totales

// Búsqueda
showSuggestions(term)         // Mostrar dropdown
performSearch(term)           // Filtrar en página
filterProducts(term)          // Función auxiliar
```

---

## Event System

### Custom Events Dispatched

```javascript
// Cuando carrito se actualiza
window.dispatchEvent(
    new CustomEvent('cartUpdated', {
        detail: { cart: window.cartManager.cart }
    })
);

// Cuando se sincroniza desde otra pestaña
window.addEventListener('storage', (e) => {
    if (e.key === 'sweetverse_cart') {
        // Recargar carrito
    }
});
```

### Built-in Events Listened

```javascript
'DOMContentLoaded'    // Inicializar cuando carga la página
'click'              // Clicks en botones, carrito, sugerencias
'input'              // Escritura en buscador
'keypress'           // Enter en búsqueda
'storage'            // Cambios en localStorage desde otra pestaña
'scroll'             // Para auto-scroll a resultados
```

---

## Performance Considerations

### Optimizations Implemented

✅ **Event Delegation** - No listeners en cada item, solo en container
✅ **Debouncing Search** - No renderiza en cada carácter (usa input event)
✅ **Lazy Rendering** - Solo renderiza cuando es necesario
✅ **localStorage** - Rápido y no requiere servidor
✅ **CSS Animations** - GPU-accelerated (transform, opacity)

### Recommendations for Scaling

| Aspecto | Actual | Escalable |
|---------|--------|-----------|
| Productos | 6 | Cambiar a JSON/API |
| Usuarios | Anónimo | Agregar auth |
| Carrito | localStorage | Mover a Base de Datos |
| Búsqueda | Lineal O(n) | Usar índices |
| Imágenes | No | Optimizar con CDN |

---

## Integration Points

### How Components Work Together

```
┌─────────────────────────────────────┐
│   Page Load (HTML)                  │
└────────────┬────────────────────────┘
             │
             ▼
┌─────────────────────────────────────┐
│   script.js (main logic)            │
├─────────────────────────────────────┤
│  - Creates CartUI                   │
│  - Initializes CartManager          │
│  - Sets up event listeners          │
│  - Loads productDatabase            │
└────────────┬────────────────────────┘
             │
    ┌────────┴────────┐
    │                 │
    ▼                 ▼
┌──────────┐   ┌─────────────┐
│Cart Ops  │   │Search Logic │
│via:      │   │via:         │
│-addToCart│   │-showSuggest │
│-openCart │   │-performSear │
│-closeCart│   │-filterProd  │
└────┬─────┘   └─────┬───────┘
     │              │
     └──────┬───────┘
            │
            ▼
┌────────────────────────────┐
│  localStorage              │
│  (Single source of truth)  │
└────────────────────────────┘
```

---

## Security Considerations

### Current Implementation

- ✅ Client-side validation
- ⚠️ localStorage is visible in DevTools
- ⚠️ No encryption (local data)
- ✅ No sensitive data stored
- ✅ No external API calls

### For Production

- Add server-side validation
- Use HTTPS
- Implement user authentication
- Move cart data to server
- Add rate limiting on searches

---

## Browser Compatibility

```
Feature               Chrome  Firefox  Safari  Edge
─────────────────────────────────────────────
localStorage          ✅      ✅       ✅      ✅
CSS Grid              ✅      ✅       ✅      ✅
CSS Variables         ✅      ✅       ✅      ✅
ES6 Classes           ✅      ✅       ✅      ✅
Event Listeners       ✅      ✅       ✅      ✅
Fetch API             ✅      ✅       ✅      ✅
```

---

## Deployment Checklist

- [ ] Todos los archivos en carpetas correctas
- [ ] cart-styles.css en `/css/`
- [ ] cart-script.js en `/js/`
- [ ] HTML actualizado en todas las páginas
- [ ] localStorage habilitado en servidor
- [ ] CORS configurado (si es necesario)
- [ ] Assets optimizados
- [ ] Cache headers configurados

---

**Versión:** 1.1.0  
**Última revisión:** 3 de noviembre de 2025  
**Estado:** ✅ Completado
