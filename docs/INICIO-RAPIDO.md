# 🚀 INICIO RÁPIDO - MexicoPoly Apps

## ⚡ Empezar en 3 Pasos

### Paso 1: Abrir el Sitio
```
Doble clic en: index.html
```

### Paso 2: Personalizar (Opcional)
1. Cambiar número de WhatsApp → Abre `datos.js` línea 20
2. Agregar productos → Usa `PLANTILLA-PRODUCTOS.js` como guía
3. Cambiar colores → Edita `styles.css` línea 11-42

### Paso 3: Publicar
- **Opción 1**: Sube a GitHub Pages (gratis)
- **Opción 2**: Arrastra a Netlify.com/drop (gratis)
- **Opción 3**: Usa localmente con XAMPP/WAMP

---

## 📖 Guías Completas

- **README.md** → Documentación completa
- **PERSONALIZACION.md** → Cómo personalizar todo
- **PLANTILLA-PRODUCTOS.js** → Template para agregar productos
- **RESUMEN-PROYECTO.md** → Detalles técnicos

---

## ✅ Lo que YA está hecho:

✓ 70+ productos pre-cargados  
✓ 8 categorías organizadas  
✓ Sistema de carrito completo  
✓ Búsqueda en tiempo real  
✓ Generador de PDF  
✓ Botón flotante de WhatsApp  
✓ Diseño responsive perfecto  
✓ Animaciones profesionales  

---

## 🎯 Lo que DEBES hacer:

1. [ ] Cambiar número de WhatsApp en `datos.js`
2. [ ] Personalizar nombre del negocio
3. [ ] Revisar los precios de los productos
4. [ ] Agregar/quitar productos según tu inventario
5. [ ] Cambiar colores según tu marca (opcional)
6. [ ] Probar en móvil y desktop
7. [ ] Publicar online

---

## 💡 Tips Importantes

### Agregar Productos
```javascript
// En datos.js, copia este template:
{
    id: "producto-unico",
    nombre: "Nombre del Producto",
    categoria: "ofimatica",    // ver categorías disponibles
    icono: "📄",
    descripcion: "Descripción breve",
    caracteristicas: ["Feature 1", "Feature 2", "Feature 3"],
    precio: 499,               // solo números
    rating: 4.8,
    badge: "destacado"         // o null
},
```

### Cambiar WhatsApp
```javascript
// En datos.js línea 20:
config: {
    whatsapp: "527296901573",  // ⬅️ CAMBIA ESTE
    telefono: "+52 729 690 1573",
    email: "ventas@tunegocio.com"
}
```

### Cambiar Colores
```css
/* En styles.css línea 13: */
:root {
    --primary: #6366f1;      /* ⬅️ Color principal */
    --primary-dark: #4f46e5; /* ⬅️ Hover */
    --secondary: #8b5cf6;    /* ⬅️ Secundario */
}
```

---

## 🎨 Paletas de Colores Listas

### Azul (Default)
```css
--primary: #6366f1; --primary-dark: #4f46e5; --secondary: #8b5cf6;
```

### Verde
```css
--primary: #10b981; --primary-dark: #059669; --secondary: #14b8a6;
```

### Morado
```css
--primary: #a855f7; --primary-dark: #9333ea; --secondary: #d946ef;
```

### Rojo
```css
--primary: #ef4444; --primary-dark: #dc2626; --secondary: #f97316;
```

---

## 🌐 Publicar Gratis

### Netlify (Más Fácil)
1. Ve a: https://app.netlify.com/drop
2. Arrastra toda la carpeta
3. ¡Listo! Tendrás una URL tipo: `tunegocio.netlify.app`

### GitHub Pages
1. Crea cuenta en GitHub
2. Crea repositorio `mi-catalogo`
3. Sube todos los archivos
4. Settings → Pages → Selecciona branch main
5. Tu URL será: `tuusuario.github.io/mi-catalogo`

---

## ❓ Preguntas Frecuentes

**¿Necesito servidor?**  
No, funciona abriendo index.html directamente.

**¿Funciona offline?**  
Sí, excepto el generador de PDF (necesita internet para cargar jsPDF).

**¿Puedo venderlo?**  
Sí, es de uso libre para tu negocio.

**¿Cómo actualizo productos?**  
Edita `datos.js` y agrega/modifica productos en el array.

**¿Funciona en móvil?**  
Sí, es 100% responsive.

---

## 📞 Soporte

**WhatsApp**: +52 729 690 1573  
**Email**: ventas@mexicopoly.com

---

## 🎯 Checklist de Lanzamiento

Antes de publicar, verifica:

- [ ] Cambié el número de WhatsApp
- [ ] Cambié el nombre del negocio
- [ ] Revisé que todos los productos sean correctos
- [ ] Probé el carrito de compras
- [ ] Probé en móvil
- [ ] Probé en diferentes navegadores
- [ ] Generé un PDF de prueba
- [ ] El botón de WhatsApp funciona
- [ ] Todos los enlaces funcionan

---

**¡Listo para empezar! 🚀**

*Abre index.html y empieza a vender*
