# Documentación del Carrito Deslizable SweetVerse 🛒

## Descripción General

El carrito deslizable es un componente visual que se desliza desde la derecha de la página, mostrando todos los productos agregados por el usuario. Está completamente integrado con el sistema de localStorage, lo que permite sincronización entre todas las páginas del sitio.

## Características

✨ **Deslizable desde la derecha** - Se abre y cierra suavemente desde el lado derecho de la pantalla
💾 **Sincronización automática** - Los cambios en el carrito se sincronizan en tiempo real entre todas las páginas
🎨 **Diseño visual atractivo** - Usa la paleta de colores y estilos de SweetVerse
📱 **Responsive** - Funciona perfectamente en dispositivos móviles
♿ **Accesible** - Puede cerrarse con la tecla Escape

## Archivos Creados

### 1. `cart.html`
Página dedicada para visualizar el carrito. Contiene:
- Header del carrito con botón de cierre
- Contenedor de items del carrito
- Resumen de totales (subtotal, impuesto, total)
- Botones de checkout y continuar comprando

### 2. `cart-styles.css`
Estilos exclusivos para el carrito:
- Animaciones de entrada/salida (slideInFromRight, slideOutToRight)
- Estilos del sidebar deslizable
- Estilos de items del carrito
- Estilos responsive para móviles

### 3. `cart-script.js`
Clase `CartManager` que maneja:
- Carga y guardado del carrito en localStorage
- Renderizado de items
- Actualización de cantidades
- Cálculo de totales con impuesto del 12%
- Sincronización entre pestañas/ventanas

## Cómo Funciona

### Abrir el Carrito
El carrito se puede abrir de dos formas:

1. **Haciendo clic en el icono del carrito** en la navbar
2. **Navegando a `cart.html`** directamente

### Agregar Productos al Carrito

**Desde el index.html o products.html:**
```javascript
shoppingCart.addProduct("Nombre del Producto", 9.99);
```

**Desde cualquier página (usando la función global):**
```javascript
addToCart("Nombre del Producto", 9.99);
```

### Estructura del Carrito en localStorage

El carrito se guarda en localStorage con la clave `'sweetverse_cart'`:

```javascript
{
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

## Integración con Páginas Existentes

### script.js (Principal)
- Crea automáticamente la UI del carrito en todas las páginas
- Maneja el evento de clic en el icono del carrito
- Sincroniza eventos entre la clase `ShoppingCart` y el `CartManager`

### product-script.js (Páginas de Producto)
- Abre automáticamente el carrito al agregar un producto
- Maneja cantidades de productos

## Eventos Sincronización

El carrito se sincroniza usando:
1. **localStorage events** - Detecta cambios desde otras pestañas
2. **Custom events (cartUpdated)** - Comunicación entre componentes en la misma página

## Cálculo de Totales

- **Subtotal**: Suma de (precio × cantidad) de todos los items
- **Impuesto**: Subtotal × 12%
- **Total**: Subtotal + Impuesto

## Controles del Usuario

| Acción | Resultado |
|--------|-----------|
| Click en icono carrito | Abre/cierra el carrito |
| Click en overlay | Cierra el carrito |
| Tecla Escape | Cierra el carrito |
| Click en "Eliminar" | Elimina el producto |
| Botones +/- | Aumenta/disminuye cantidad |
| "Proceder al Pago" | Checkout (vacía el carrito) |
| "Continuar Comprando" | Cierra el carrito |

## Styling Personalizado

El carrito utiliza la paleta de colores de SweetVerse:

```css
--primary-pink: #E85D8A;
--light-pink: #F5D7E8;
--dark-pink: #C94872;
--accent-purple: #8B5FBF;
--dark-bg: #0F0F1E;
```

## Notas Técnicas

- El carrito NO requiere cambios en las páginas existentes para funcionar
- La funcionalidad se inyecta automáticamente en index.html y products.html
- Los estilos se cargan dinámicamente si no están presentes
- Usa flexbox para layout responsivo
- Compatible con navegadores modernos que soportan CSS Grid y Flexbox

## Troubleshooting

### El carrito no se abre
- Verifica que `cart-styles.css` esté en el mismo directorio
- Abre la consola del navegador (F12) para buscar errores

### Los items no se sincronizan entre páginas
- Asegúrate de que localStorage no esté deshabilitado
- Los cambios se sincronizan cuando cambias entre pestañas

### El carrito se ve mal en móvil
- El carrito es totalmente responsive, se ajusta automáticamente
- En móviles, el sidebar ocupa el 100% del ancho

## Futuras Mejoras Posibles

- [ ] Integración con pasarela de pago real
- [ ] Persistencia de carrito en base de datos
- [ ] Sistema de cupones de descuento
- [ ] Historial de compras
- [ ] Carrito guardado para usuarios registrados
