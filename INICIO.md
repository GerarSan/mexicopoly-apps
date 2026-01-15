# 🚀 Guía de Inicio - MexicoPoly Apps

## Estructura del Proyecto

El proyecto ha sido reorganizado en una estructura profesional con separación clara entre frontend y backend:

```
mexicopoly-apps/
│
├── frontend/           # Aplicación cliente
│   ├── public/         # Página principal
│   ├── pages/          # Páginas secundarias
│   ├── styles/         # Hojas de estilo
│   ├── scripts/        # JavaScript
│   ├── assets/         # Recursos estáticos
│   └── README.md       # Documentación del frontend
│
├── backend/            # API y servidor (en desarrollo)
│   ├── src/            # Código fuente
│   ├── config/         # Configuración
│   └── README.md       # Documentación del backend
│
├── docs/               # Documentación del proyecto
│   ├── INICIO-RAPIDO.md
│   ├── PERSONALIZACION.md
│   ├── PLAN-REDISENO.md
│   └── RESUMEN-PROYECTO.md
│
└── README.md           # Documentación principal
```

## Inicio Rápido

### Frontend

1. **Abrir la aplicación**: 
   - Navega a `frontend/public/index.html`
   - Ábrelo con tu navegador favorito
   - O usa Live Server en VS Code

2. **Navegar por las páginas**:
   - **Inicio**: `frontend/public/index.html`
   - **Catálogo**: `frontend/pages/catalogo.html`
   - **Lista A-Z**: `frontend/pages/lista-az.html`
   - **Canva**: `frontend/pages/canva.html`
   - **Educativo**: `frontend/pages/educativo.html`
   - **Documentos**: `frontend/pages/documentos.html`
   - **Admin**: `frontend/pages/admin.html`

### Backend (Próximamente)

El backend está preparado para ser desarrollado. Ver `backend/README.md` para más información.

## Personalización Rápida

### 1. Editar Productos

Abre `frontend/scripts/datos.js` y modifica el array de productos.

### 2. Cambiar Colores

Edita las variables CSS en `frontend/styles/styles.css`:

```css
:root {
    --primary: #3b82f6;
    --secondary: #8b5cf6;
    /* ... más variables */
}
```

### 3. Actualizar WhatsApp

Busca y reemplaza `527296901573` con tu número en todos los archivos HTML.

## Próximos Pasos

1. ✅ **Frontend organizado** - Estructura modular lista
2. ⏳ **Backend** - Desarrollar API REST
3. ⏳ **Base de datos** - Migrar datos.js a BD real
4. ⏳ **Autenticación** - Sistema de usuarios
5. ⏳ **Pagos** - Integrar pasarela de pagos

## Documentación

- **Frontend**: `frontend/README.md`
- **Backend**: `backend/README.md`
- **Personalización**: `docs/PERSONALIZACION.md`
- **Plan de Diseño**: `docs/PLAN-REDISENO.md`

## Soporte

Para más información, consulta la documentación completa en la carpeta `docs/`.
