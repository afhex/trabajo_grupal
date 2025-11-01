# 🍬 SweetVerse - Tienda de Golosinas Premium

**Trabajo Grupal #1 - Aplicaciones Web / ISTER**

---

## 📖 Descripción del Proyecto

SweetVerse es una tienda en línea moderna y elegante de golosinas premium. Diseñada con un enfoque minimalista y futurista, la plataforma ofrece una experiencia de compra inmersiva con efectos visuales cautivadores y una navegación intuitiva.

### 🎨 Características Principales

- **Diseño Minimalista Futurista**: Interfaz limpia con efectos de animación suave
- **Paleta de Colores Elegante**: Rosa principal (#E85D8A) con toques púrpura
- **Carrito Persistente**: Los productos se mantienen en el carrito incluso al cambiar de página (usando localStorage)
- **Navegación Intuitiva**: Menú responsive con transiciones suaves
- **Páginas de Producto Detalladas**: Cada producto tiene su propia página con información completa
- **Efectos de Interactividad**: Hover 3D, animaciones de scroll, parallax suave

---

## 🗂️ Estructura del Proyecto

```
trabajo_grupal/
├── index.html                 # Página principal
├── products.html              # Catálogo completo de productos
├── product-caramelos.html     # Página de Caramelos Clásicos
├── product-chupetines.html    # Página de Chupetines Premium
├── product-chocolates.html    # Página de Chocolates Gourmet
├── product-donuts.html        # Página de Donuts Artesanales
├── product-flan.html          # Página de Flan Deluxe
├── product-tortas.html        # Página de Mini Tortas
├── styles.css                 # Estilos globales
├── script.js                  # JavaScript principal y carrito
├── product-script.js          # JavaScript para páginas de producto
├── README.md                  # Este archivo
└── .gitignore                 # Archivos ignorados por Git
```

---

## 🚀 Cómo Usar

### Clonar el Repositorio

```bash
git clone https://github.com/afhex/trabajo_grupal.git
cd trabajo_grupal
```

### Cambiar de Rama

Para trabajar en nuevas funcionalidades:

```bash
# Ver ramas disponibles
git branch -a

# Cambiar a la rama development (para colaboradores)
git checkout development
```

### Ramas Principales

- **main**: Rama estable con la versión funcional
- **development**: Rama de desarrollo para nuevas funcionalidades y mejoras

---

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño responsivo con animaciones
- **JavaScript (Vanilla)**: Interactividad y carrito de compras
- **localStorage API**: Persistencia de datos del carrito
- **Git & GitHub**: Control de versiones y colaboración

---

## 💡 Funcionalidades Implementadas

### ✅ Carrito de Compras Persistente

- Agregar/eliminar productos
- Los datos se guardan en localStorage
- El contador se sincroniza entre todas las páginas
- Notificaciones visuales al agregar productos

### ✅ Sistema de Navegación

- Navbar fija con logo animado
- Enlaces activos según la sección
- Carrito con contador visible
- Scroll suave entre secciones

### ✅ Efectos Visuales

- Animaciones de float en productos
- Hover 3D en tarjetas de productos
- Parallax suave en scroll
- Transiciones fluidas
- Fondos animados con gradientes

### ✅ Diseño Responsivo

- Mobile-first approach
- Media queries para todos los dispositivos
- Navbar adaptable
- Grid responsive para productos

---

## 👥 Contribuciones

Este proyecto está abierto para colaboraciones. Si deseas contribuir:

1. **Fork** el repositorio
2. **Crea una rama** para tu funcionalidad (`git checkout -b feature/AmazingFeature`)
3. **Haz commit** de tus cambios (`git commit -m 'Add AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre un Pull Request** hacia la rama `development`

### Directrices de Contribución

- Mantén la coherencia visual con la paleta de colores existente
- Usa las mismas variables CSS para colores y transiciones
- Asegúrate de que el código sea responsivo
- Prueba los cambios en diferentes navegadores y dispositivos

---

## 🎯 Ideas para Futuras Mejoras

- [ ] Página de checkout y pago
- [ ] Sistema de usuario y login
- [ ] Historial de compras
- [ ] Reseñas y calificaciones de productos
- [ ] Búsqueda y filtros avanzados
- [ ] Carrito visual con detalles
- [ ] Integración con API de pagos
- [ ] Animaciones más complejas
- [ ] Sistema de categorías
- [ ] Blog o sección de noticias

---

## 📱 Compatibilidad

- ✅ Chrome (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Edge (últimas versiones)
- ✅ Navegadores móviles

---

## 📝 Notas Importantes

### Paleta de Colores

```css
--primary-pink: #E85D8A;       /* Rosa principal */
--light-pink: #F5D7E8;         /* Rosa clara */
--dark-pink: #C94872;          /* Rosa oscura */
--accent-purple: #8B5FBF;      /* Púrpura de acento */
--dark-bg: #0F0F1E;            /* Fondo oscuro */
--secondary-bg: #1A1A2E;       /* Fondo secundario */
```

### Transiciones Estándar

```css
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 📧 Contacto

Para preguntas o sugerencias sobre el proyecto, contáctate con el equipo de desarrollo.

---

## 📄 Licencia

Este proyecto es parte de un trabajo grupal académico. Todos los derechos reservados © 2025 SweetVerse.

---

**¡Gracias por tu interés en SweetVerse! 🍬✨**