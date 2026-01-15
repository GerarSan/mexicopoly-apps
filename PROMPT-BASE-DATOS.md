# 🗄️ PROMPT PARA CREAR BASE DE DATOS - MEXICOPOLY APPS

---

## 📋 CONTEXTO DEL PROYECTO

Soy el desarrollador de **MexicoPoly Apps**, una tienda en línea de software y aplicaciones digitales.

Actualmente tengo todos los datos en un archivo JavaScript (`datos.js`) con aproximadamente **866 líneas** conteniendo:
- **8 categorías** de productos
- **~300-400 productos** de software
- Información de configuración (WhatsApp, email, teléfono)

Necesito migrar estos datos a una base de datos **PostgreSQL** (o MySQL si es más conveniente) para:
1. Hacer el sistema escalable
2. Permitir gestión dinámica de productos
3. Añadir funcionalidades de backend (carrito, pedidos, usuarios)
4. Mejorar el rendimiento

---

## 🎯 LO QUE NECESITO QUE HAGAS

Genera para mí:

1. **📐 Esquema de base de datos completo** (DDL/CREATE TABLE)
2. **📊 Diagrama ER (Entidad-Relación)** en texto o Mermaid
3. **🔄 Script de migración SQL** para insertar todos los datos existentes
4. **📝 Queries SQL comunes** que necesitaré (SELECT, INSERT, UPDATE, DELETE)
5. **🔌 API REST básica** (opcional pero recomendada) para conectar el frontend

---

## 📊 ESTRUCTURA ACTUAL DE DATOS

### **1️⃣ CONFIGURACIÓN**
```javascript
config: {
    nombre: "MexicoPoly - Apps",
    whatsapp: "527296901573",
    telefono: "+52 729 690 1573",
    email: "ventas@mexicopoly.com"
}
```

### **2️⃣ CATEGORÍAS** (8 categorías)
```javascript
categorias: [
    { 
        id: "ofimatica", 
        nombre: "Ofimática", 
        icono: "📊", 
        color: "#3b82f6" 
    },
    { 
        id: "diseno", 
        nombre: "Diseño Gráfico", 
        icono: "🎨", 
        color: "#ec4899" 
    },
    { 
        id: "seguridad", 
        nombre: "Seguridad", 
        icono: "🔒", 
        color: "#10b981" 
    },
    { 
        id: "juegos", 
        nombre: "Juegos", 
        icono: "🎮", 
        color: "#8b5cf6" 
    },
    { 
        id: "desarrollo", 
        nombre: "Desarrollo", 
        icono: "💻", 
        color: "#06b6d4" 
    },
    { 
        id: "multimedia", 
        nombre: "Multimedia", 
        icono: "🎬", 
        color: "#f59e0b" 
    },
    { 
        id: "utilidades", 
        nombre: "Utilidades", 
        icono: "🛠️", 
        color: "#6366f1" 
    },
    { 
        id: "educacion", 
        nombre: "Educación", 
        icono: "📚", 
        color: "#14b8a6" 
    }
]
```

### **3️⃣ PRODUCTOS** (Ejemplo de estructura)
```javascript
productos: [
    {
        id: "office-2024",                              // VARCHAR(100) PRIMARY KEY
        nombre: "Microsoft Office 2024 Professional",   // VARCHAR(255)
        categoria: "ofimatica",                         // FOREIGN KEY → categorias.id
        icono: "📄",                                    // VARCHAR(10)
        descripcion: "Suite completa de Office...",     // TEXT
        caracteristicas: [                              // JSON o tabla relacionada
            "Licencia de por vida",
            "Todas las aplicaciones incluidas",
            "Compatible con Windows 10/11",
            "Soporte técnico incluido"
        ],
        precio: 499,                                    // DECIMAL(10,2)
        rating: 4.9,                                    // DECIMAL(2,1)
        badge: "destacado"                              // ENUM o VARCHAR(20)
    },
    // ... ~300-400 productos más
]
```

### **4️⃣ BADGES POSIBLES**
- `null` (sin badge)
- `"destacado"` - Producto destacado
- `"top"` - Más vendido
- `"nuevo"` - Producto nuevo
- `"oferta"` - En oferta
- `"hot"` - Popular

---

## 🎯 REQUISITOS DE LA BASE DE DATOS

### **Tablas que necesito:**

1. **`categorias`** 
   - Almacenar las 8 categorías
   - Campos: id, nombre, icono, color

2. **`productos`**
   - Almacenar todos los productos de software
   - Campos: id, nombre, categoria_id, icono, descripcion, precio, rating, badge, fecha_creacion, activo
   - FOREIGN KEY a categorias

3. **`caracteristicas_producto`** (opcional - tabla relacionada)
   - Almacenar las características de cada producto
   - Campos: id, producto_id, caracteristica
   - O bien usar tipo JSON en PostgreSQL

4. **`configuracion`**
   - Datos de contacto y configuración general
   - Campos: clave, valor

5. **`usuarios`** (opcional pero recomendada para futuro)
   - Gestionar clientes/administradores
   - Campos: id, email, password_hash, nombre, rol, fecha_registro

6. **`pedidos`** (opcional pero recomendada para futuro)
   - Registrar pedidos de clientes
   - Campos: id, usuario_id, total, estado, fecha_pedido
   - Estados: pendiente, procesando, completado, cancelado

7. **`items_pedido`** (opcional)
   - Detalle de productos en cada pedido
   - Campos: id, pedido_id, producto_id, cantidad, precio_unitario

---

## 💻 FORMATO DE ENTREGA

Por favor, proporciona:

### **1. Esquema SQL completo** (DDL)
```sql
-- PostgreSQL preferido (o MySQL como alternativa)
CREATE TABLE categorias (...);
CREATE TABLE productos (...);
-- etc.
```

### **2. Índices importantes**
```sql
CREATE INDEX idx_productos_categoria ON productos(categoria_id);
CREATE INDEX idx_productos_precio ON productos(precio);
-- etc.
```

### **3. Script de migración inicial**
```sql
-- Insertar las 8 categorías
INSERT INTO categorias (id, nombre, icono, color) VALUES
('ofimatica', 'Ofimática', '📊', '#3b82f6'),
-- ... resto de categorías

-- Insertar productos de ejemplo (al menos 10-20)
INSERT INTO productos (id, nombre, categoria_id, descripcion, precio, rating, badge) VALUES
('office-2024', 'Microsoft Office 2024', 'ofimatica', '...', 499.00, 4.9, 'destacado'),
-- ... más productos
```

### **4. Queries SQL esenciales**
```sql
-- Obtener todos los productos activos
SELECT * FROM productos WHERE activo = true;

-- Obtener productos por categoría
SELECT * FROM productos WHERE categoria_id = 'ofimatica';

-- Buscar productos por nombre
SELECT * FROM productos WHERE nombre ILIKE '%office%';

-- Productos destacados
SELECT * FROM productos WHERE badge IS NOT NULL ORDER BY rating DESC;

-- etc.
```

### **5. API REST básica (Node.js + Express recomendado)**
```javascript
// GET /api/productos - Listar todos los productos
// GET /api/productos/:id - Obtener un producto
// GET /api/categorias - Listar categorías
// POST /api/productos - Crear producto (admin)
// PUT /api/productos/:id - Actualizar producto (admin)
// DELETE /api/productos/:id - Eliminar producto (admin)
```

---

## 🔧 TECNOLOGÍAS SUGERIDAS

### **Backend:**
- **Base de datos:** PostgreSQL 14+ (preferido) o MySQL 8+
- **ORM/Query Builder:** Prisma, TypeORM o Sequelize
- **API:** Node.js + Express + TypeScript
- **Hosting:** Vercel (Serverless Functions) + Supabase (PostgreSQL)

### **Alternativa Serverless (más fácil):**
- **Supabase** - PostgreSQL + API REST automática + Auth
- **PlanetScale** - MySQL serverless
- **Neon** - PostgreSQL serverless

---

## 📄 ARCHIVO DE REFERENCIA

Los datos actuales están en: `frontend/public/scripts/datos.js`

**Total de líneas:** ~866 líneas
**Estructura:** JavaScript object con `config`, `categorias`, y `productos`

---

## 🎯 OBJETIVO FINAL

Quiero poder:
1. ✅ Conectar mi frontend actual (Vanilla JS) a una API REST
2. ✅ Gestionar productos desde un panel admin (CRUD)
3. ✅ Escalar la aplicación en el futuro (usuarios, pedidos, pagos)
4. ✅ Mantener el rendimiento del sitio web

---

## ⚡ PRIORIDAD

**ALTA PRIORIDAD:**
- Esquema de BD completo y funcional
- Script de migración con datos de ejemplo
- Queries SQL básicas

**MEDIA PRIORIDAD:**
- API REST básica
- Documentación de endpoints

**BAJA PRIORIDAD (futuro):**
- Sistema de usuarios
- Sistema de pedidos
- Pasarela de pagos

---

¿Puedes ayudarme a crear todo esto? Genera el código SQL completo y listo para ejecutar.
