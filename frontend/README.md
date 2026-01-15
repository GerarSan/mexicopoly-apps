# Frontend - MexicoPoly Apps

Aplicación frontend para el catálogo digital de software y licencias.

## Estructura

```
frontend/
├── public/              # Página principal
│   └── index.html       # Home page con hero, featured products, etc.
│
├── pages/               # Páginas secundarias
│   ├── catalogo.html    # Catálogo completo con filtros y búsqueda
│   ├── lista-az.html    # Lista alfabética de productos
│   ├── canva.html       # Planes y precios de Canva Pro
│   ├── educativo.html   # Software educativo (ChatGPT, Duolingo, etc.)
│   ├── documentos.html  # Documentos oficiales de México
│   └── admin.html       # Panel de administración de productos
│
├── styles/              # Hojas de estilo
│   ├── styles.css       # Estilos globales y componentes
│   └── admin-styles.css # Estilos específicos del panel admin
│
├── scripts/             # JavaScript modules
│   ├── datos.js         # Base de datos de productos (⭐ IMPORTANTE)
│   ├── app.js           # Funciones principales y carrito de compras
│   ├── catalogo.js      # Lógica del catálogo y generación de PDF
│   ├── lista-az.js      # Lógica de la lista alfabética
│   ├── admin.js         # Funciones del panel de administración
│   └── PLANTILLA-PRODUCTOS.js # Plantilla para agregar nuevos productos
│
└── assets/              # Recursos estáticos
    └── logos/           # Logotipos e imágenes
```

## Características

### 🎯 Funcionalidades Implementadas
- ✅ Catálogo de productos con más de 70 items
- ✅ Sistema de búsqueda en tiempo real
- ✅ Filtros por categoría
- ✅ Carrito de compras con localStorage
- ✅ Generación de PDF del catálogo
- ✅ Integración con WhatsApp para pedidos
- ✅ Panel de administración para gestionar productos
- ✅ Diseño responsive (móvil, tablet, desktop)

### 📱 Páginas

#### Index (Home)
- Hero section con CTA
- Productos destacados
- Categorías populares
- Footer con información de contacto

#### Catálogo
- Grid de productos con tarjetas
- Filtros por categoría
- Búsqueda en tiempo real
- Botón para generar PDF
- Agregar al carrito

#### Lista A-Z
- Navegación alfabética
- Productos organizados por letra inicial
- Búsqueda rápida

#### Canva
- Planes de suscripción (Individual, Teams, Educación)
- Información de tipos de cuenta (Privada vs Lista)
- Precios y características

#### Educativo
- Software educativo premium
- ChatGPT, Gemini, Perplexity, Copilot
- Duolingo, CapCut, OpenEnglish
- Precios y características de cada plan

#### Documentos
- Documentos oficiales de México
- CURP, Actas, Comprobantes
- Paquetes con descuento
- Tabla de precios

#### Admin
- Panel para gestionar productos
- Agregar, editar, eliminar productos
- Vista previa en tiempo real
- Exportar/importar datos

## Tecnologías

- HTML5 semántico
- CSS3 (Grid, Flexbox, Animaciones)
- JavaScript Vanilla (ES6+)
- LocalStorage para persistencia
- jsPDF para generación de PDFs
- Google Fonts (Inter)

## Personalización

### Editar Productos

Los productos se gestionan en `scripts/datos.js`:

```javascript
{
    id: "producto-unico",
    nombre: "Nombre del Producto",
    categoria: "ofimatica",
    icono: "📄",
    descripcion: "Descripción breve",
    caracteristicas: [
        "Característica 1",
        "Característica 2"
    ],
    precio: 499,
    rating: 4.9,
    etiqueta: "Destacado"
}
```

### Categorías Disponibles
- `ofimatica` - Office, Adobe, etc.
- `diseno` - Canva, Photoshop, etc.
- `vpn` - VPNs y seguridad
- `streaming` - Netflix, Spotify, etc.
- `almacenamiento` - Google Drive, OneDrive, etc.
- `educacion` - Cursos y plataformas educativas
- `juegos` - Videojuegos y plataformas
- `otros` - Otros productos

### Modificar Estilos

Los estilos están en `styles/styles.css`:

- Variables CSS en `:root` para colores, fuentes, etc.
- Componentes modulares
- Media queries para responsive
- Animaciones y transiciones

### WhatsApp

Actualiza el número de WhatsApp en todos los archivos HTML:

```javascript
href="https://wa.me/527296901573"
```

## Integración con Backend

El frontend está preparado para integrarse con el backend mediante:

1. **API REST**: Los archivos JS pueden modificarse para consumir endpoints
2. **Autenticación**: El panel admin puede conectarse con JWT
3. **Base de datos**: Migrar datos.js a una base de datos real
4. **Pagos**: Integrar gateway de pagos (Stripe, PayPal, etc.)

## Deploy

Para producción:

1. Minificar CSS y JS
2. Optimizar imágenes
3. Configurar CDN para assets
4. Habilitar caché del navegador
5. Configurar HTTPS
6. Añadir meta tags SEO

## Desarrollo

Para desarrollar localmente:

1. Abre `public/index.html` en tu navegador
2. Usa Live Server de VS Code para hot reload
3. Abre las DevTools para debugging
4. Modifica los archivos y recarga el navegador

## Notas

- Todos los archivos HTML en `pages/` referencian recursos con rutas relativas (`../styles/`, `../scripts/`, etc.)
- El archivo principal está en `public/index.html`
- Los logos están en `assets/logos/`
- La documentación completa está en la carpeta `docs/` en la raíz del proyecto
