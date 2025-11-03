# 🚀 QUICK START - SweetVerse v1.1.0

**Última actualización:** 3 de noviembre de 2025  
**Tiempo de lectura:** 5 minutos

---

## ¿Qué se ha implementado?

✅ **Carrito deslizable** - Se abre desde la derecha  
✅ **Buscador de productos** - Búsqueda en tiempo real  
✅ **Sincronización** - Entre todas las páginas y pestañas  
✅ **Responsive** - Funciona en móvil, tablet y desktop  

---

## 🛒 Carrito de Compras

### ¿Cómo lo uso?

1. **Abrir carrito:** Click en icono 🛒 en la navbar
2. **Agregar productos:** Click en "Agregar al carrito" en cualquier producto
3. **Modificar cantidades:** Botones +/- en el carrito
4. **Cerrar carrito:** 
   - Tecla ESC
   - Click en área oscura
   - Click en botón X
   - Click en "Continuar Comprando"

### Características

- 💾 Los datos se guardan automáticamente en localStorage
- 🔄 Se sincroniza entre pestañas (abre en otra pestaña y verás los cambios)
- 📊 Calcula automáticamente: Subtotal, Impuesto (12%), Total
- 📱 Funciona perfectamente en móviles

### Precios y Cálculos

```
Subtotal = Precio × Cantidad (de cada producto)
Impuesto = Subtotal × 12%
Total = Subtotal + Impuesto

Ejemplo:
  2 × Caramelos ($5.99) = $11.98
  1 × Chocolates ($12.99) = $12.99
  ─────────────────────────────
  Subtotal:              $24.97
  Impuesto (12%):        $2.99
  Total:                 $27.96
```

---

## 🔍 Buscador de Productos

### ¿Cómo lo uso?

1. **Ver buscador:** En la navbar (barra redondeada con icono 🔍)
2. **Buscar:** Escribe el nombre de un producto
3. **Ver sugerencias:** Aparecerá un dropdown con coincidencias
4. **Seleccionar:** Click en una sugerencia para ir al producto
5. **Presionar Enter:** Filtra productos en la página actual

### Productos disponibles

| Icono | Nombre | Precio |
|-------|--------|--------|
| 🍬 | Caramelos Clásicos | $5.99 |
| 🍭 | Chupetines Premium | $3.49 |
| 🍫 | Chocolates Gourmet | $12.99 |
| 🍩 | Donuts Artesanales | $7.99 |
| 🍮 | Flan Deluxe | $8.99 |
| 🎂 | Mini Tortas | $14.99 |

### Características

- ⌨️ Búsqueda en tiempo real mientras escribes
- 🔎 Busca por: nombre, descripción, precio
- 🎯 Redirección automática a página del producto
- ⬇️ Auto-scroll a resultados de búsqueda
- 📱 100% responsive en móviles

---

## 📂 Estructura de Carpetas

```
trabajo_grupal/
├── index.html                              (Página principal)
├── pages/
│   ├── cart.html                           (Página del carrito)
│   ├── products.html                       (Todos los productos)
│   └── product-*.html                      (6 productos individuales)
├── css/
│   ├── styles.css                          (Estilos principales)
│   └── cart-styles.css                     (Estilos del carrito)
├── js/
│   ├── script.js                           (Lógica principal)
│   ├── cart-script.js                      (Lógica del carrito)
│   └── product-script.js                   (Lógica de productos)
└── docs/
    ├── QUICK_START.md                      (Este archivo - Inicio rápido)
    ├── IMPLEMENTATION.md                   (Docs técnicas)
    ├── ARCHITECTURE.md                     (Arquitectura del sistema)
    └── CHANGELOG.md                        (Historial de cambios)
```

---

## ⚙️ Personalización Rápida

### Cambiar impuesto (actualmente 12%)

```javascript
// Abre: js/cart-script.js
// Busca: const tax = subtotal * 0.12;
// Cambia: 0.12 al valor que desees (ej: 0.08 para 8%)
```

### Cambiar ancho del carrito (actualmente 400px)

```css
/* Abre: css/cart-styles.css */
/* Busca: width: 400px; */
/* Cambia: al valor que desees */
```

### Agregar más productos al buscador

```javascript
// Abre: js/script.js
// Busca: const productsDatabase = [
// Agrega un nuevo objeto:
{
    name: "Mi Producto",
    description: "Descripción del producto",
    price: 10.99,
    icon: "🍰",
    url: "pages/product-mio.html"
}
```

### Cambiar radius del buscador (actualmente 50px)

```css
/* Abre: css/styles.css */
/* Busca: --search-radius: 50px; */
/* Cambia: al valor que desees */
```

---

## 🐛 Solución de Problemas

| Problema | Solución |
|----------|----------|
| El carrito no aparece | Verifica que `cart-styles.css` exista en `css/` |
| No se sincroniza entre pestañas | Habilita localStorage en el navegador |
| Búsqueda no funciona | Recarga la página (Ctrl+R o Cmd+R) |
| Carrito se ve mal en móvil | Limpia caché y recarga |
| Precios no se calculan | Verifica que no tengan símbolos ($) |

---

## ✅ Lo que ya funciona

- ✅ Carrito deslizable en todas las páginas
- ✅ Buscador en todas las páginas
- ✅ Sincronización entre pestañas
- ✅ Diseño responsive completo
- ✅ Persistencia de datos
- ✅ Animaciones suaves
- ✅ Sin errores en consola

---

## 📚 Documentos disponibles

- **QUICK_START.md** ← Estás aquí (5 min)
- **IMPLEMENTATION.md** - Documentación técnica y ejemplos (20 min)
- **ARCHITECTURE.md** - Arquitectura y flujo de datos (15 min)
- **CHANGELOG.md** - Historial completo de cambios

---

## 🎓 Primeros pasos

1. Abre `index.html` en tu navegador
2. Prueba a agregar un producto
3. Abre el carrito (click en 🛒)
4. Escribe en la barra de búsqueda
5. Abre otra pestaña y verifica la sincronización

¡Listo! Ahora explora el código en los otros documentos cuando necesites más detalles.

---

**Versión:** 1.1.0  
**Estado:** ✅ Completado y validado  
**Última revisión:** 3 de noviembre de 2025
