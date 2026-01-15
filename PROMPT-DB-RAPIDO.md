# 🚀 PROMPT RÁPIDO - Base de Datos MexicoPoly Apps

## Versión Corta (Copiar y Pegar)

---

```
Necesito crear una base de datos PostgreSQL para mi tienda de software "MexicoPoly Apps".

DATOS ACTUALES (JavaScript):
- 8 categorías: ofimatica, diseno, seguridad, juegos, desarrollo, multimedia, utilidades, educacion
- ~400 productos con: id, nombre, categoria, icono, descripcion, caracteristicas[], precio, rating, badge

ESTRUCTURA DE PRODUCTO:
{
  id: "office-2024",
  nombre: "Microsoft Office 2024 Professional Plus",
  categoria: "ofimatica",
  icono: "📄",
  descripcion: "Suite completa de Office con Word, Excel, PowerPoint",
  caracteristicas: ["Licencia de por vida", "Todas las aplicaciones", "Windows 10/11"],
  precio: 499,
  rating: 4.9,
  badge: "destacado" // null, "destacado", "top", "nuevo", "oferta", "hot"
}

NECESITO:
1. Esquema PostgreSQL completo (CREATE TABLE)
2. Relaciones: categorias → productos → caracteristicas_producto
3. Tabla configuracion (whatsapp, email, telefono)
4. Script INSERT para migrar datos de ejemplo
5. Índices importantes
6. 10 queries SQL comunes (SELECT, INSERT, UPDATE, DELETE)

OPCIONAL:
- Tablas usuarios, pedidos, items_pedido para futuro
- API REST básica en Node.js/Express
- Diagrama ER en Mermaid

Genera código SQL listo para ejecutar.
```

---

## Versión Ultra-Corta (1 línea)

```
Crea un esquema PostgreSQL completo para tienda de software con tablas: categorias(8), productos(400+), caracteristicas_producto, configuracion. Incluye DDL, relaciones, índices, script de migración y queries comunes. Estructura producto: id, nombre, categoria_id, icono, descripcion, caracteristicas[], precio, rating, badge.
```

---

## Para Supabase específicamente

```
Diseña un esquema Supabase (PostgreSQL) para MexicoPoly Apps con:
- Tabla categorias (8 categorías de software)
- Tabla productos (id, nombre, categoria_id, descripcion, precio, rating, badge, caracteristicas JSONB)
- Tabla configuracion
- RLS policies para admin y public
- Edge Functions para API
Incluye SQL completo y setup de Supabase CLI.
```

---

## Para MySQL específicamente

```
Convierte esta estructura JavaScript a MySQL 8.0:
- 8 categorías (id, nombre, icono, color)
- 400+ productos (id, nombre, categoria_id, descripcion, precio DECIMAL(10,2), rating DECIMAL(2,1), badge ENUM)
- caracteristicas_producto (tabla relacional)
Genera DDL completo, relaciones FK, índices y script de migración.
```

---

## Usar con Claude/ChatGPT/Gemini

1. **Abre el archivo:** `PROMPT-BASE-DATOS.md`
2. **Copia TODO el contenido**
3. **Pégalo en la IA de tu preferencia**
4. **Espera el código SQL completo**

O usa la versión corta de arriba para resultados más rápidos.

---

## Archivos de Referencia

- **Datos actuales:** `/frontend/public/scripts/datos.js`
- **Prompt completo:** `/PROMPT-BASE-DATOS.md` (este archivo tiene TODO el contexto)
- **Documentación Vercel:** `/VERCEL-CONFIG.md`

---

## Tecnologías Recomendadas por Orden

### Opción 1: Supabase (Más fácil)
```bash
# PostgreSQL + API REST automática + Auth + Storage
# Gratis hasta 500MB
# Deploy en 5 minutos
```

### Opción 2: PlanetScale (MySQL)
```bash
# MySQL serverless
# Gratis hasta 5GB
# Branching de BD como Git
```

### Opción 3: Neon (PostgreSQL)
```bash
# PostgreSQL serverless
# Gratis hasta 3GB
# Autoscaling automático
```

### Opción 4: Railway (Más flexible)
```bash
# PostgreSQL, MySQL, MongoDB
# Gratis $5 crédito mensual
# Deploy con Dockerfile
```

---

**Tip:** Si no tienes experiencia con backend, usa **Supabase** - es el más fácil y ya incluye API REST lista para usar.
