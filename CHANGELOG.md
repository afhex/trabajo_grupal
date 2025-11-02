# 📋 CHANGELOG

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto se adhiere a [Semantic Versioning](https://semver.org/es/).

---
## [Unreleased]

### 🐛 Corregido
- **Cart Functionality**: Agregar `js/script.js` a `pages/cart.html` para inicializar `ShoppingCart` antes que `CartManager`
  - Permite actualización correcta del contador en la navegación
  - Habilita listeners del carrito en `pages/cart.html`
  - Previene duplicación de instancias al verificar existencia de elementos

---

## [1.0.0] - 2025-11-01

### ✨ Agregado

#### Página Principal (index.html)
- Hero section con título y descripción animada
- Grid de 6 productos destacados
- Sección "Sobre Nosotros" con características
- Formulario de contacto funcional
- Navbar con navegación suave
- Footer con enlaces sociales

#### Páginas de Productos
- `products.html` - Catálogo completo de productos
- `product-caramelos.html` - Caramelos Clásicos
- `product-chupetines.html` - Chupetines Premium
- `product-chocolates.html` - Chocolates Gourmet
- `product-donuts.html` - Donuts Artesanales
- `product-flan.html` - Flan Deluxe
- `product-tortas.html` - Mini Tortas

#### Carrito de Compras
- Sistema de carrito con localStorage
- Persistencia de datos entre páginas
- Contador dinámico en navbar
- Notificaciones visuales al agregar productos

#### Diseño y Animaciones
- Paleta de colores minimalista (rosa elegante + púrpura)
- Animaciones suave (float, pulse, glow)
- Efectos hover 3D en tarjetas
- Parallax suave en scroll
- Fondos animados con gradientes
- Transiciones fluidas con cubic-bezier

#### Funcionalidad
- Navegación responsiva
- Design móvil-first
- Scroll suave entre secciones
- Intersection Observer para animaciones al scroll
- Formulario de contacto con validación

#### Documentación
- README.md completo con descripción del proyecto
- CONTRIBUTING.md con guía para colaboradores
- CHANGELOG.md (este archivo)
- .gitignore configurado

### 🔧 Tecnologías

- HTML5 semántico
- CSS3 con variables CSS personalizadas
- JavaScript vanilla (sin dependencias)
- localStorage API
- Git & GitHub

---

## [Versiones Futuras]

### Planeado para v1.1.0

- [ ] Página de carrito visual con detalles
- [ ] Sistema de búsqueda y filtros
- [ ] Página de checkout
- [ ] Métodos de pago (mock)
- [ ] Mejoras en animaciones

### Planeado para v2.0.0

- [ ] Sistema de usuarios y autenticación
- [ ] Historial de compras
- [ ] Reseñas y calificaciones
- [ ] Sistema de puntos/recompensas
- [ ] Blog de noticias
- [ ] Integración con base de datos
- [ ] Backend con Node.js/Express

---

## 📝 Notas

- La rama `main` contiene la versión estable
- La rama `development` es para nuevas funcionalidades
- Todos los cambios deben pasar por pull requests en `development`
- Los cambios verificados se hacen merge a `main`

---

## 🤝 Contribuyentes

- **Alejandro Vaca Cedeño** - Desarrollador principal

---

**Última actualización:** 2025-11-01
