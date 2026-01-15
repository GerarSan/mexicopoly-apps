# 🎨 GUÍA DE PERSONALIZACIÓN RÁPIDA
## MexicoPoly - Apps

---

## 📞 CAMBIAR NÚMERO DE WHATSAPP

### Paso 1: Editar datos.js

Abre `datos.js` y busca la sección `config`:

```javascript
config: {
    nombre: "MexicoPoly - Apps",
    whatsapp: "527296901573",        // ⬅️ CAMBIA ESTO
    telefono: "+52 729 690 1573",    // ⬅️ CAMBIA ESTO
    email: "ventas@mexicopoly.com"   // ⬅️ CAMBIA ESTO
}
```

**Formato del número WhatsApp:**
- Sin espacios ni guiones
- Código del país + número
- Ejemplo México: `52` + `7296901573` = `527296901573`
- Ejemplo USA: `1` + `5551234567` = `15551234567`
- Ejemplo España: `34` + `612345678` = `34612345678`

### Paso 2: Actualizar botones flotantes

Los botones flotantes se actualizan automáticamente porque usan `DATOS.config.whatsapp`.

### Paso 3: Verificar

1. Guarda todos los cambios
2. Recarga el navegador (Ctrl + F5)
3. Haz clic en el botón de WhatsApp
4. Verifica que abra tu número

---

## 🎨 CAMBIAR COLORES DEL SITIO

### Colores Principales

Abre `styles.css` y busca `:root` (línea ~11):

```css
:root {
    /* Colores principales */
    --primary: #6366f1;        /* Color principal (botones, enlaces) */
    --primary-dark: #4f46e5;   /* Hover de botones */
    --primary-light: #818cf8;  /* Acentos claros */
    --secondary: #8b5cf6;      /* Color secundario (gradientes) */
}
```

### Paletas de Colores Sugeridas

#### 🔵 Azul Profesional (Default)
```css
--primary: #6366f1;
--primary-dark: #4f46e5;
--primary-light: #818cf8;
--secondary: #8b5cf6;
```

#### 🟢 Verde Tecnológico
```css
--primary: #10b981;
--primary-dark: #059669;
--primary-light: #34d399;
--secondary: #14b8a6;
```

#### 🟣 Morado Moderno
```css
--primary: #a855f7;
--primary-dark: #9333ea;
--primary-light: #c084fc;
--secondary: #d946ef;
```

#### 🔴 Rojo Energético
```css
--primary: #ef4444;
--primary-dark: #dc2626;
--primary-light: #f87171;
--secondary: #f97316;
```

#### 🟠 Naranja Vibrante
```css
--primary: #f97316;
--primary-dark: #ea580c;
--primary-light: #fb923c;
--secondary: #eab308;
```

#### ⚫ Oscuro Elegante
```css
--primary: #1e293b;
--primary-dark: #0f172a;
--primary-light: #334155;
--secondary: #475569;
```

---

## 📝 CAMBIAR NOMBRE DEL NEGOCIO

### Ubicaciones del Nombre

Debes cambiar en **3 lugares**:

#### 1. datos.js (línea ~20)
```javascript
config: {
    nombre: "TU NOMBRE AQUÍ",  // ⬅️ CAMBIA
    whatsapp: "527296901573",
    telefono: "+52 729 690 1573",
    email: "ventas@tunegocio.com"
}
```

#### 2. index.html (línea ~6)
```html
<title>TU NOMBRE | Software al Mejor Precio</title>
```

Y en el logo (línea ~24):
```html
<span class="logo-text">TU NOMBRE</span>
```

Y en el footer (línea ~196):
```html
<span class="logo-text">TU NOMBRE</span>
```

#### 3. catalogo.html (línea ~6 y 22)
Igual que index.html

#### 4. lista-az.html (línea ~6 y 22)
Igual que index.html

### Buscar y Reemplazar Rápido

1. Abre Visual Studio Code o tu editor
2. Presiona `Ctrl + Shift + F` (buscar en archivos)
3. Busca: `MexicoPoly`
4. Reemplaza con: `TU NOMBRE`
5. Clic en "Reemplazar todo"

---

## 🖼️ CAMBIAR LOGO

### Opción 1: Usar Emoji (Actual)

Ya tienes un logo con emojis. Para cambiarlo:

1. Abre `index.html`, `catalogo.html`, `lista-az.html`
2. Busca la clase `.logo-dots` (línea ~18-22)
3. Ya está configurado con cuadrados

### Opción 2: Usar Imagen

Reemplaza el logo completo:

```html
<!-- ANTES -->
<div class="logo">
    <div class="logo-icon">
        <div class="logo-dots">
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
        </div>
    </div>
    <span class="logo-text">MexicoPoly</span>
</div>

<!-- DESPUÉS -->
<div class="logo">
    <img src="mi-logo.png" alt="Logo" style="height: 40px;">
    <span class="logo-text">MI NEGOCIO</span>
</div>
```

---

## 📊 AGREGAR/QUITAR CATEGORÍAS

### Agregar Nueva Categoría

En `datos.js`, busca el array `categorias` (línea ~30):

```javascript
categorias: [
    // ... categorías existentes ...
    
    // ⬇️ AGREGA LA NUEVA AQUÍ
    { 
        id: "videojuegos",           // ID único sin espacios
        nombre: "Videojuegos",       // Nombre visible
        icono: "🎮",                 // Emoji
        color: "#8b5cf6"             // Color en hexadecimal
    }
]
```

Luego crea productos con `categoria: "videojuegos"`.

### Quitar Categoría

1. Abre `datos.js`
2. Busca la categoría en el array `categorias`
3. Elimina todo el objeto `{ id: "...", ... }`
4. Elimina o cambia la categoría de los productos que la usaban

---

## 💰 CAMBIAR PRECIOS

### Método 1: Individual

Abre `datos.js` y busca el producto:

```javascript
{
    id: "office-2024",
    nombre: "Microsoft Office 2024",
    // ...
    precio: 499,  // ⬅️ CAMBIA ESTE NÚMERO
    // ...
}
```

### Método 2: Todos los Precios

Usa buscar y reemplazar con cuidado:
- Solo cambia números después de `precio:`
- Verifica uno por uno

---

## 🏷️ PERSONALIZAR BADGES

### Cambiar Colores de Badges

En `styles.css`, busca (línea ~457):

```css
.badge-featured { background: var(--primary); color: white; }
.badge-top { background: var(--accent-blue); color: white; }
.badge-new { background: var(--accent-green); color: white; }
.badge-sale { background: var(--accent-orange); color: white; }
.badge-hot { background: var(--accent-red); color: white; }
```

Cambia los colores:

```css
.badge-featured { background: #9333ea; color: white; }  /* Morado */
.badge-top { background: #3b82f6; color: white; }       /* Azul */
.badge-new { background: #10b981; color: white; }       /* Verde */
.badge-sale { background: #f97316; color: white; }      /* Naranja */
.badge-hot { background: #dc2626; color: white; }       /* Rojo */
```

---

## 🌐 PUBLICAR EN INTERNET

### GitHub Pages (GRATIS)

1. Crea cuenta en [GitHub](https://github.com)
2. Crea nuevo repositorio llamado `mi-catalogo`
3. Sube todos los archivos
4. Ve a Settings → Pages
5. Selecciona branch `main` y carpeta `/ (root)`
6. Espera 2 minutos
7. Tu sitio estará en: `https://tuusuario.github.io/mi-catalogo`

### Netlify (GRATIS - MÁS FÁCIL)

1. Ve a [Netlify Drop](https://app.netlify.com/drop)
2. Arrastra toda la carpeta `mexicopoly-apps`
3. ¡Listo! Tu sitio está online en segundos
4. URL personalizable: `tunegocio.netlify.app`

### Comprar Dominio Propio

Conecta tu dominio (ej: `www.tunegocio.com`):
- **Netlify**: Settings → Domain Management
- **GitHub Pages**: Settings → Pages → Custom domain

---

## 📱 REDES SOCIALES

### Agregar Enlaces

En `index.html` busca la sección de redes sociales (línea ~216):

```html
<div class="social-links">
    <a href="https://facebook.com/tupagina" class="social-icon">📘</a>
    <a href="https://instagram.com/tuusuario" class="social-icon">📷</a>
    <a href="https://wa.me/527296901573" class="social-icon">💬</a>
    <a href="https://t.me/tucanal" class="social-icon">✈️</a>
</div>
```

---

## 🔧 SOLUCIÓN DE PROBLEMAS

### Los cambios no se ven

1. Presiona `Ctrl + F5` para recargar sin caché
2. Verifica que guardaste todos los archivos
3. Revisa la consola del navegador (F12) por errores

### Error en datos.js

- Verifica que todas las comas estén bien puestas
- Asegúrate de cerrar todas las llaves `{}`
- No pongas coma después del último producto

### El carrito no funciona

- Habilita cookies/localStorage en tu navegador
- Prueba en modo incógnito

---

## 💡 TIPS PROFESIONALES

1. **Backup**: Haz copias antes de cambios grandes
2. **Prueba**: Verifica en varios navegadores
3. **Mobile**: Revisa cómo se ve en celular
4. **Velocidad**: Optimiza imágenes si las usas
5. **SEO**: Cambia los `<title>` y meta descriptions

---

**¿Necesitas más ayuda?**
WhatsApp: +52 729 690 1573

*Última actualización: Enero 2026*
