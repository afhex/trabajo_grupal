# 🤝 GUÍA PARA COLABORADORES

Bienvenido al equipo de SweetVerse. Esta guía te ayudará a comenzar a colaborar en el proyecto.

---

## 📋 Configuración Inicial

### 1. **Clonar el repositorio**

```bash
git clone https://github.com/afhex/trabajo_grupal.git
cd trabajo_grupal
```

### 2. **Cambiar a la rama development**

```bash
git checkout development
```

### 3. **Crear tu propia rama para trabajar**

```bash
git checkout -b feature/tu-nombre-funcionalidad
```

Ejemplos de nombres de rama:
- `feature/carrito-visual`
- `feature/sistema-login`
- `feature/mejoras-animaciones`
- `bugfix/carrito-contador`

---

## 🎨 Estándares de Código

### Colores Estándar (NO CAMBIAR)

```css
:root {
    --primary-pink: #E85D8A;
    --light-pink: #F5D7E8;
    --dark-pink: #C94872;
    --white: #FFFFFF;
    --dark-bg: #0F0F1E;
    --secondary-bg: #1A1A2E;
    --accent-purple: #8B5FBF;
    --text-primary: #F0F0F0;
    --text-secondary: #A0A0A0;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Animaciones Comunes

```css
/* Float suave */
@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(10deg); }
}

/* Pulse */
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}

/* Glow */
@keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(232, 93, 138, 0.3); }
    50% { box-shadow: 0 0 40px rgba(232, 93, 138, 0.6); }
}
```

---

## 📱 Directorios y Convenciones

### Archivos HTML
- `index.html` - Página principal
- `products.html` - Catálogo de productos
- `product-[nombre].html` - Página individual de producto

### Archivos CSS
- `styles.css` - Todos los estilos (mantén separadas por secciones comentadas)

### Archivos JavaScript
- `script.js` - Funcionalidad global y carrito
- `product-script.js` - Funcionalidad específica de páginas de producto

---

## 🔄 Flujo de Trabajo

### 1. **Crea tu rama**

```bash
git checkout -b feature/nueva-funcionalidad
```

### 2. **Realiza tus cambios**

- Edita los archivos necesarios
- Mantén la consistencia visual
- Prueba en diferentes navegadores

### 3. **Verifica tus cambios**

```bash
git status
git diff
```

### 4. **Haz commit de tus cambios**

```bash
git add .
git commit -m "Descripción clara de los cambios"
```

**Formato recomendado para mensajes de commit:**
- ✨ `Agregar nueva funcionalidad`
- 🐛 `Corregir bug en carrito`
- 🎨 `Mejorar estilos de navbar`
- 📚 `Actualizar documentación`
- ⚡ `Optimizar rendimiento`

### 5. **Sube tu rama**

```bash
git push origin feature/nueva-funcionalidad
```

### 6. **Crea un Pull Request**

- Ve a GitHub
- GitHub te sugerirá crear un PR
- Describe claramente qué cambios realizaste
- Asegúrate de que la rama objetivo sea `development`

---

## ✅ Checklist Antes de Hacer Push

- [ ] Probé los cambios en múltiples navegadores
- [ ] Probé en dispositivos móviles (si aplica)
- [ ] Mantuve la paleta de colores estándar
- [ ] Usé animaciones consistentes
- [ ] El código está limpio y sin comentarios innecesarios
- [ ] Incluí comentarios si el código es complejo
- [ ] No rompí funcionalidad existente
- [ ] Los cambios son responsivos

---

## 📋 Ideas para Contribuir

Aquí hay algunas mejoras que podrías implementar:

### 🔴 Prioridad Alta

1. **Página de Carrito Visual**
   - Mostrar todos los productos en el carrito
   - Permitir modificar cantidades
   - Calcular total
   - Opción de vaciar carrito

2. **Sistema de Filtros**
   - Filtrar por precio
   - Filtrar por popularidad
   - Buscar productos

### 🟡 Prioridad Media

3. **Página de Checkout**
   - Formulario de datos personales
   - Selección de método de pago (mock)
   - Resumen de compra

4. **Mejoras de Animaciones**
   - Transiciones más fluidas
   - Efectos de carga
   - Animaciones en hover más elaboradas

### 🟢 Prioridad Baja

5. **Sistema de Usuarios**
   - Login/Registro
   - Perfil de usuario
   - Historial de compras

6. **Blog de Noticias**
   - Página de blog
   - Artículos sobre golosinas
   - Sección de promociones

---

## 🐛 Reporte de Bugs

Si encuentras un bug:

1. Crea una rama: `bugfix/descripcion-bug`
2. Describe el problema claramente
3. Incluye pasos para reproducir
4. Crea un commit descriptivo
5. Haz un Pull Request a `development`

---

## 📞 Comunicación

- Usa los comentarios en Pull Requests para discutir cambios
- Sé respetuoso y constructivo
- Responde las revisiones de código en tiempo razonable

---

## 🎓 Recursos Útiles

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Git Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com/)

---

## 📈 Estado del Proyecto

**Versión Actual:** 1.0.0
**Estado:** En Desarrollo (Development)
**Última Actualización:** 2025-11-01

---

**¡Gracias por contribuir a SweetVerse! 🍬✨**

Si tienes preguntas, no dudes en preguntar en los issues de GitHub.
