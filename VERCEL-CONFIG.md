# 🚀 Configuración de Vercel para MexicoPoly Apps

## ✅ Estructura del Proyecto (ACTUALIZADA)

```
mexicopoly-apps/
├── frontend/
│   ├── public/              ← TODO está aquí ahora
│   │   ├── index.html       ← Página principal
│   │   ├── styles/          ← CSS
│   │   ├── scripts/         ← JavaScript
│   │   ├── assets/          ← Imágenes/Logos
│   │   └── pages/           ← Páginas HTML
│   └── README.md
├── backend/
├── docs/
├── vercel.json              ← Configuración de Vercel
└── README.md
```

## 📋 Pasos para Desplegar en Vercel

### 1️⃣ Configuración Inicial en Vercel

1. Ve a [vercel.com](https://vercel.com) y conecta tu cuenta de GitHub
2. Selecciona el repositorio `mexicopoly-apps`
3. En la configuración de despliegue, usa estos valores:

```
Framework Preset: Other
Root Directory: frontend
Build Command: (dejar vacío)
Output Directory: public
Install Command: (dejar vacío)
```

### 2️⃣ Variables de Entorno (Opcional)

Si necesitas variables de entorno en el futuro:

```bash
WHATSAPP_NUMBER=527296901573
```

### 3️⃣ Dominios Personalizados (Opcional)

Después del despliegue, puedes agregar dominios personalizados:

1. Ve a `Project Settings` → `Domains`
2. Agrega tu dominio personalizado
3. Sigue las instrucciones para configurar DNS

## ✅ Cambios Realizados

### 📁 Estructura de Archivos
- ✅ Todos los archivos movidos dentro de `frontend/public/`
- ✅ Carpetas antiguas eliminadas
- ✅ Estructura limpia y organizada

### 🔗 Rutas Corregidas
- ✅ Todas las rutas cambiadas a **rutas absolutas** (`/styles/`, `/scripts/`, etc.)
- ✅ Enlaces de navegación actualizados
- ✅ Scripts de JavaScript con rutas correctas

### 📄 Archivos Actualizados
- ✅ `index.html` - Rutas absolutas
- ✅ `catalogo.html` - Rutas absolutas
- ✅ `lista-az.html` - Rutas absolutas
- ✅ `canva.html` - Rutas absolutas
- ✅ `educativo.html` - Rutas absolutas
- ✅ `documentos.html` - Rutas absolutas
- ✅ `admin.html` - Rutas absolutas
- ✅ `app.js` - Enlaces corregidos
- ✅ `vercel.json` - Configuración de Vercel

## 🔍 Verificación Local

Para probar localmente antes de desplegar:

```bash
# Instalar Vercel CLI (solo una vez)
npm install -g vercel

# Iniciar servidor local
cd mexicopoly-apps
vercel dev
```

Abre http://localhost:3000 en tu navegador.

## 📊 Rutas del Sitio Web

Una vez desplegado en Vercel, las rutas serán:

```
https://tu-dominio.vercel.app/                    → Página principal
https://tu-dominio.vercel.app/pages/catalogo.html → Catálogo
https://tu-dominio.vercel.app/pages/lista-az.html → Lista A-Z
https://tu-dominio.vercel.app/pages/canva.html    → Canva
https://tu-dominio.vercel.app/pages/educativo.html → Educativo
https://tu-dominio.vercel.app/pages/documentos.html → Documentos
https://tu-dominio.vercel.app/pages/admin.html    → Admin Panel
```

## 🛠️ Solución de Problemas

### Problema: "404 Not Found" en páginas
**Solución:** Verifica que el `Root Directory` esté configurado como `frontend`

### Problema: CSS no carga
**Solución:** Verifica que las rutas en HTML sean absolutas (`/styles/styles.css`)

### Problema: JavaScript no funciona
**Solución:** Abre la consola del navegador (F12) y revisa errores

### Problema: Imágenes no cargan
**Solución:** Verifica que las rutas sean absolutas (`/assets/logos/...`)

## 📞 Contacto WhatsApp

El botón de WhatsApp está configurado con:
- **Número:** +52 729 690 1573
- **Configuración:** `frontend/public/scripts/datos.js`

## 🎯 Próximos Pasos

1. ✅ Desplegar en Vercel
2. ⏳ Configurar dominio personalizado (opcional)
3. ⏳ Agregar analytics (opcional)
4. ⏳ Configurar formulario de contacto con Vercel Forms (opcional)

## 📝 Notas Importantes

- ✅ **Todas las rutas son absolutas** (comienzan con `/`)
- ✅ **Sin dependencias de Node.js** - Es un sitio estático puro
- ✅ **Sin build step** - Los archivos se sirven directamente
- ✅ **Optimizado para Vercel** - Configuración en `vercel.json`

---

**Última actualización:** 15 de enero de 2026
**Commit:** `refactor: Reestructurar proyecto para Vercel`
**Estado:** ✅ Listo para desplegar
