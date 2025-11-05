# 🍬 SweetVerse - Tienda Online de Dulces v1.1.0

**Trabajo Grupal #1 - Aplicaciones Web / ISTER**  
**Estado:** ✅ Completado y Validado  
**Última actualización:** 3 de noviembre de 2025

---

## 📖 Descripción del Proyecto

SweetVerse es una tienda online moderna de golosinas premium con carrito deslizable y buscador de productos integrado. Diseñada con enfoque minimalista y futurista, ofrece una experiencia de compra inmersiva con efectos visuales cautivadores y navegación intuitiva.

### ✨ Características Principales

- **🛒 Carrito Deslizable** - Se abre desde la derecha con animaciones suaves
- **🔍 Buscador en Tiempo Real** - Búsqueda rápida de 6 productos disponibles
- **💾 Sincronización Automática** - Entre todas las páginas y pestañas
- **📱 100% Responsive** - Funciona en móvil, tablet y desktop
- **🎨 Diseño Elegante** - Paleta rosa y púrpura con efectos visuales
- **⚡ Sin Dependencias** - Vanilla JavaScript ES6+

---

## 🚀 Inicio Rápido

```bash
# 1. Clonar el repositorio
git clone https://github.com/afhex/trabajo_grupal.git
cd trabajo_grupal

# 2. Abrir en navegador
# Opción A: Doble click en index.html
# Opción B: Usar Live Server en VS Code
# Opción C: python3 -m http.server

# 3. Probar funcionalidades
# ✅ Click en producto → Agrega al carrito
# ✅ Click en icono 🛒 → Abre carrito deslizable
# ✅ Escribe en búsqueda → Ve sugerencias en dropdown
# ✅ Abre otra pestaña → Se sincroniza automáticamente
```

---

## � Estructura del Proyecto

```
trabajo_grupal/
├── 📄 index.html                    # Página principal
├── pages/
│   ├── cart.html                    # Página completa del carrito
│   ├── products.html                # Catálogo de productos
│   └── product-*.html               # 6 páginas de productos
├── css/
│   ├── styles.css                   # Estilos principales (+ búsqueda)
│   └── cart-styles.css              # Estilos del carrito
├── js/
│   ├── script.js                    # Lógica principal (Carrito + Búsqueda)
│   ├── cart-script.js               # Clase CartManager
│   └── product-script.js            # Funcionalidad de productos
└── docs/
    ├── README.md                    # Este archivo
    ├── QUICK_START.md               # Guía de 5 minutos
    ├── IMPLEMENTATION.md            # Documentación técnica
    ├── ARCHITECTURE.md              # Diagramas y flujos
    └── CHANGELOG.md                 # Historial completo
```

---

## 📚 Documentación

Elige según lo que necesites:

| Documento | Tiempo | Para |
|-----------|--------|------|
| **[QUICK_START.md](docs/QUICK_START.md)** | 5 min | Usuarios nuevos |
| **[IMPLEMENTATION.md](docs/IMPLEMENTATION.md)** | 20 min | Desarrolladores |
| **[ARCHITECTURE.md](docs/ARCHITECTURE.md)** | 15 min | Arquitectos/Senior |
| **[CHANGELOG.md](docs/CHANGELOG.md)** | 10 min | Historial de cambios |
| **[CONTRIBUTING.md](docs/CONTRIBUTING.md)** | 5 min | Guía de contribución |

👉 **Si es tu primera vez, comienza con [QUICK_START.md](docs/QUICK_START.md) (5 minutos)**

---

## 🎯 Características Implementadas

### ✅ Fase 1: Carrito Deslizable (01/11/2025)

- ✅ Sistema completo de carrito de compras
- ✅ Sincronización entre todas las páginas
- ✅ Persistencia en localStorage
- ✅ Cálculos automáticos (Subtotal, Impuesto 12%, Total)
- ✅ Animaciones suaves (slideInFromRight, slideOutToRight)
- ✅ 100% Responsive (móvil, tablet, desktop)
- ✅ Overlay semi-transparente con blur effect
- ✅ Cierre con ESC, click en overlay, o botón X

### ✅ Fase 2: Buscador de Productos (03/11/2025)

- ✅ Barra de búsqueda en navbar (todas 9 páginas)
- ✅ Búsqueda en tiempo real mientras escribes
- ✅ Dropdown con sugerencias e iconos
- ✅ Filtrado por nombre, descripción y precio
- ✅ Base de datos de 6 productos
- ✅ Redirección al clickear sugerencias
- ✅ Auto-scroll a productos coincidentes
- ✅ Soporte para búsqueda con Enter y click en icono

---

## 🛒 Carrito de Compras

### Cómo usar

1. **Abrir carrito:** Click en icono 🛒 en la navbar
2. **Agregar productos:** Click en "Agregar al carrito"
3. **Modificar cantidades:** Botones +/- en el carrito
4. **Cerrar carrito:** ESC, click en área oscura, o botón X

### Características

- 💾 Datos guardados automáticamente en localStorage
- 🔄 Se sincroniza entre pestañas
- 📊 Calcula automáticamente totales
- 📱 Totalmente responsive

### Cálculos

```
Subtotal = Precio × Cantidad
Impuesto = Subtotal × 12%
Total = Subtotal + Impuesto
```

---

## 🔍 Buscador de Productos

### Cómo usar

1. **Ver búsqueda:** En la navbar (barra redondeada con 🔍)
2. **Buscar:** Escribe el nombre de un producto
3. **Ver sugerencias:** Dropdown con coincidencias
4. **Seleccionar:** Click para ir al producto
5. **Filtrar página:** Presiona Enter

### Productos Disponibles

| Producto | Precio | Icono |
|----------|--------|-------|
| Caramelos Clásicos | $5.99 | 🍬 |
| Chupetines Premium | $3.49 | 🍭 |
| Chocolates Gourmet | $12.99 | 🍫 |
| Donuts Artesanales | $7.99 | 🍩 |
| Flan Deluxe | $8.99 | 🍮 |
| Mini Tortas | $14.99 | 🎂 |

---

## 🛠️ Tecnologías Utilizadas

```
HTML5          - Estructura semántica
CSS3           - Variables CSS, Grid, Flexbox, Animaciones
JavaScript ES6+ - Vanilla JS (sin dependencias)
localStorage   - Persistencia de datos
Git            - Control de versiones
```

---

## � Personalización Rápida

### Cambiar impuesto (actualmente 12%)

```javascript
// Archivo: js/cart-script.js
const tax = subtotal * 0.12;  // Cambiar 0.12 por otro valor
```

### Agregar producto al buscador

```javascript
// Archivo: js/script.js
// Busca: const productsDatabase = [
// Agrega un nuevo objeto:
{
    name: "Mi Producto",
    description: "Descripción",
    price: 9.99,
    icon: "🎁",
    url: "pages/product-mio.html"
}
```

### Cambiar colores

```css
/* Archivo: css/styles.css */
:root {
    --primary-pink: #E85D8A;  /* Cambiar aquí */
    --accent-purple: #8B5FBF;
    --dark-bg: #0F0F1E;
}
```

---

## 🐛 Troubleshooting Rápido

| Problema | Solución |
|----------|----------|
| Carrito no aparece | Verifica que `css/cart-styles.css` existe |
| No se sincroniza | Habilita localStorage en navegador |
| Búsqueda no funciona | Recarga la página (Ctrl+R) |
| Estilos no cargan | Limpia caché (Ctrl+Shift+Delete) |

👉 Para más ayuda, consulta [QUICK_START.md - Troubleshooting](docs/QUICK_START.md#-solución-de-problemas)

---

## ✅ Validación y Testing

Todas las características han sido completamente testeadas:

- ✅ Carrito abre/cierra correctamente
- ✅ Se sincroniza entre pestañas
- ✅ Cálculos son precisos
- ✅ Búsqueda filtra correctamente
- ✅ 100% Responsive en todos los dispositivos
- ✅ Sin errores en consola
- ✅ Compatible con navegadores modernos

---

## 📊 Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos HTML | 9 |
| Archivos CSS | 2 |
| Archivos JavaScript | 3 |
| Productos | 6 |
| Líneas de código | ~1000+ |
| Documentación | 4 documentos |
| Commits | 4+ |

---

## 🎨 Paleta de Colores

```css
Rosa Principal        #E85D8A  (Botones, acentos)
Rosa Claro            #F5D7E8  (Backgrounds suaves)
Rosa Oscuro           #C94872  (Hover, enfoque)
Púrpura               #8B5FBF  (Gradientes)
Fondo Oscuro          #0F0F1E  (Tema dark)
Fondo Secundario      #1A1A2E  (Variación)
Texto Principal       #F0F0F0  (Texto blanco)
Texto Secundario      #A0A0A0  (Texto gris)
```

---

## 👥 Contribución

Para contribuir al proyecto:

1. **Fork** el repositorio
2. **Crea una rama** (`git checkout -b feature/MiFeature`)
3. **Haz commit** (`git commit -m 'Agregar MiFeature'`)
4. **Push** (`git push origin feature/MiFeature`)
5. **Pull Request** hacia `development`

### Directrices

- Mantén coherencia visual con la paleta de colores
- Usa variables CSS existentes
- Asegúrate que sea responsive
- Prueba en múltiples navegadores

---

## 🎯 Próximas Tareas (Opcionales)

```
[ ] Página de checkout con formulario
[ ] Pasarela de pago real (Stripe)
[ ] Sistema de usuarios/login
[ ] Base de datos backend
[ ] Filtros avanzados de búsqueda
[ ] Recomendaciones personalizadas
[ ] Reviews y calificaciones
[ ] Multi-idioma
[ ] Dark mode
[ ] PWA (Progressive Web App)
```

---

## 📱 Compatibilidad

- ✅ Chrome (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Edge (últimas versiones)
- ✅ Navegadores móviles

---

## 📝 Ramas Git

```
main (Estable)
  ↑ merge después de pruebas
  |
development (Colaboración)
  ├─ feature/carrito
  ├─ feature/buscador ✅ COMPLETADO
  └─ bugfix/...
```

---

## 🔗 Enlaces Importantes

- **GitHub:** https://github.com/afhex/trabajo_grupal
- **Documentación:** `/docs/` (ver tabla arriba)
- **Rama main:** Versión estable
- **Rama development:** Cambios recientes

---

## 🏆 Logros Completados

✅ Sistema de carrito 100% funcional  
✅ Buscador con 6 productos  
✅ 9 páginas actualizadas  
✅ 0 dependencias externas  
✅ 100% documentado  
✅ 100% testeado  
✅ 100% responsive  
✅ Listo para producción  

---

## 📧 Contacto

Para preguntas o sugerencias sobre el proyecto, contacta al equipo de desarrollo.

---

## 📄 Licencia

Este proyecto es parte de un trabajo grupal académico. Todos los derechos reservados © 2025 SweetVerse.

---

## 📅 Changelog Rápido

### v1.1.0 (03/11/2025) ✅
- ✅ Buscador de productos implementado
- ✅ Base de datos de 6 productos
- ✅ Dropdown con sugerencias
- ✅ Documentación consolidada en 4 documentos

### v1.0.0 (01/11/2025) ✅
- ✅ Carrito deslizable completado
- ✅ Sincronización entre páginas
- ✅ Persistencia en localStorage

---

**¡Gracias por tu interés en SweetVerse! 🍬✨**

💡 **Tip:** Si es tu primera vez, comienza con [QUICK_START.md](docs/QUICK_START.md) (5 minutos)
