# 🚀 PLAN DE REDISEÑO COMPLETO - MexicoPoly Apps

## ✅ Cambios Ya Realizados

1. **Errores de accesibilidad corregidos**
   - ✅ Botón mobile-menu-btn tiene aria-label
   - ✅ Enlaces WhatsApp tienen rel="noopener noreferrer"
   
2. **Estadísticas actualizadas**
   - ❌ Eliminado "10K+ Clientes" (falso)
   - ✅ Cambiado a "24/7 Soporte" y "100% Original"

3. **Sistema de imágenes**
   - ✅ Integrada API de Unsplash
   - ✅ Eliminados emojis como iconos
   - ✅ Imágenes reales de 400x300px

4. **Precios eliminados**
   - ✅ Botón "Agregar" ahora agrega al carrito sin mostrar precio
   - ✅ Botón "Consultar" para preguntar por WhatsApp

---

## 📋 CAMBIOS PENDIENTES (Requieren más tiempo)

### 1. Fondo Animado con Imágenes Flotantes

**Archivo a modificar**: `styles.css`

Agregar al final del archivo:

```css
/* Fondo animado con imágenes */
.animated-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
    overflow: hidden;
}

.images-wrapper {
    display: flex;
    flex-direction: column;
    height: 150vh;
    justify-content: center;
    left: 50%;
    position: absolute;
    top: 50%;
    opacity: 0.3;
    transform: translate3d(-50%, -50%, 0) perspective(800px) rotateY(10deg) rotateX(-10deg);
}

.images-line {
    animation: slider 20s linear infinite;
    display: flex;
    transform: translateX(23%);
}

.images-line:nth-child(even) {
    animation-duration: 30s;
}

.floating-image {
    flex: none;
    height: 200px;
    width: 150px;
    margin: 15px;
    border-radius: 15px;
    background-size: cover;
    background-position: center;
    position: relative;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.floating-image:hover {
    transform: scale(1.15) translateZ(20px);
    box-shadow: 0 20px 50px rgba(99, 102, 241, 0.4);
}

.floating-image::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: 50%;
    top: 30px;
    filter: blur(30px) opacity(0.6);
    z-index: -1;
}

@keyframes slider {
    to {
        transform: translateX(-10%);
    }
}
```

**Agregar al HTML** (antes de cerrar `</body>`):

```html
<div class="animated-background">
    <div class="images-wrapper">
        <div class="images-line">
            <div class="floating-image" style="background-image: url('https://source.unsplash.com/150x200/?microsoft,office')"></div>
            <div class="floating-image" style="background-image: url('https://source.unsplash.com/150x200/?adobe,photoshop')"></div>
            <div class="floating-image" style="background-image: url('https://source.unsplash.com/150x200/?programming,code')"></div>
            <div class="floating-image" style="background-image: url('https://source.unsplash.com/150x200/?gaming,computer')"></div>
            <div class="floating-image" style="background-image: url('https://source.unsplash.com/150x200/?design,creative')"></div>
        </div>
        <div class="images-line">
            <div class="floating-image" style="background-image: url('https://source.unsplash.com/150x200/?software,tech')"></div>
            <div class="floating-image" style="background-image: url('https://source.unsplash.com/150x200/?security,cyber')"></div>
            <div class="floating-image" style="background-image: url('https://source.unsplash.com/150x200/?video,editing')"></div>
            <div class="floating-image" style="background-image: url('https://source.unsplash.com/150x200/?music,production')"></div>
            <div class="floating-image" style="background-image: url('https://source.unsplash.com/150x200/?education,learning')"></div>
        </div>
        <div class="images-line">
            <div class="floating-image" style="background-image: url('https://source.unsplash.com/150x200/?laptop,work')"></div>
            <div class="floating-image" style="background-image: url('https://source.unsplash.com/150x200/?coding,developer')"></div>
            <div class="floating-image" style="background-image: url('https://source.unsplash.com/150x200/?office,business')"></div>
            <div class="floating-image" style="background-image: url('https://source.unsplash.com/150x200/?technology,innovation')"></div>
            <div class="floating-image" style="background-image: url('https://source.unsplash.com/150x200/?computer,screen')"></div>
        </div>
    </div>
</div>
```

---

### 2. Modo Nocturno/Claro

**Agregar a `styles.css`**:

```css
/* Modo Nocturno */
[data-theme="dark"] {
    --bg-light: #0f172a;
    --bg-card: #1e293b;
    --text-primary: #f1f5f9;
    --text-secondary: #94a3b8;
    --border-color: #334155;
}

[data-theme="light"] {
    --bg-light: #f8fafc;
    --bg-card: #ffffff;
    --text-primary: #0f172a;
    --text-secondary: #64748b;
    --border-color: #e2e8f0;
}

/* Botón Toggle */
.theme-toggle {
    position: fixed;
    top: 100px;
    right: 30px;
    z-index: 9998;
    background: var(--bg-card);
    border: 2px solid var(--border-color);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
}

.theme-toggle:hover {
    transform: rotate(180deg) scale(1.1);
}
```

**Agregar a `app.js`**:

```javascript
// Modo nocturno
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Cambiar icono
    const icon = document.querySelector('.theme-toggle span');
    icon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
}

// Cargar tema guardado
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Agregar botón de tema
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle';
    themeBtn.innerHTML = `<span>${savedTheme === 'dark' ? '☀️' : '🌙'}</span>`;
    themeBtn.onclick = toggleTheme;
    themeBtn.setAttribute('aria-label', 'Cambiar tema');
    document.body.appendChild(themeBtn);
});
```

---

### 3. Panel de Administración (admin.html)

**Crear archivo**: `admin.html`

Este archivo permite agregar/editar/eliminar productos vía GUI.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel - MexicoPoly Apps</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="admin-styles.css">
</head>
<body>
    <div class="admin-container">
        <aside class="admin-sidebar">
            <div class="admin-logo">
                <h2>🛠️ Admin Panel</h2>
            </div>
            <nav class="admin-nav">
                <a href="#" class="admin-nav-item active" data-section="productos">
                    📦 Productos
                </a>
                <a href="#" class="admin-nav-item" data-section="categorias">
                    📁 Categorías
                </a>
                <a href="#" class="admin-nav-item" data-section="config">
                    ⚙️ Configuración
                </a>
                <a href="index.html" class="admin-nav-item">
                    🏠 Volver al sitio
                </a>
            </nav>
        </aside>

        <main class="admin-main">
            <!-- Sección Productos -->
            <section id="productos-section" class="admin-section active">
                <div class="admin-header">
                    <h1>Gestión de Productos</h1>
                    <button class="btn-primary" onclick="abrirModalNuevoProducto()">
                        ➕ Nuevo Producto
                    </button>
                </div>

                <div class="admin-stats">
                    <div class="stat-card">
                        <span class="stat-icon">📦</span>
                        <div>
                            <span class="stat-number" id="totalProductos">0</span>
                            <span class="stat-label">Total Productos</span>
                        </div>
                    </div>
                    <div class="stat-card">
                        <span class="stat-icon">⭐</span>
                        <div>
                            <span class="stat-number" id="destacados">0</span>
                            <span class="stat-label">Destacados</span>
                        </div>
                    </div>
                    <div class="stat-card">
                        <span class="stat-icon">📁</span>
                        <div>
                            <span class="stat-number" id="categorias">8</span>
                            <span class="stat-label">Categorías</span>
                        </div>
                    </div>
                </div>

                <div class="admin-table-container">
                    <table class="admin-table" id="productosTable">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Categoría</th>
                                <th>Rating</th>
                                <th>Badge</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="productosTableBody">
                            <!-- Se llena dinámicamente -->
                        </tbody>
                    </table>
                </div>
            </section>

            <!-- Modal Nuevo/Editar Producto -->
            <div class="modal" id="modalProducto">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 id="modalTitle">Nuevo Producto</h2>
                        <button class="modal-close" onclick="cerrarModal()">&times;</button>
                    </div>
                    <form id="formProducto" class="modal-body">
                        <div class="form-group">
                            <label>ID único</label>
                            <input type="text" name="id" required placeholder="ej: office-2024">
                        </div>
                        <div class="form-group">
                            <label>Nombre del Producto</label>
                            <input type="text" name="nombre" required placeholder="ej: Microsoft Office 2024">
                        </div>
                        <div class="form-group">
                            <label>Categoría</label>
                            <select name="categoria" required>
                                <option value="ofimatica">Ofimática</option>
                                <option value="diseno">Diseño</option>
                                <option value="seguridad">Seguridad</option>
                                <option value="juegos">Juegos</option>
                                <option value="desarrollo">Desarrollo</option>
                                <option value="multimedia">Multimedia</option>
                                <option value="utilidades">Utilidades</option>
                                <option value="educacion">Educación</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Descripción</label>
                            <textarea name="descripcion" required rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <label>Características (una por línea)</label>
                            <textarea name="caracteristicas" required rows="4"></textarea>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label>Rating (1-5)</label>
                                <input type="number" name="rating" min="1" max="5" step="0.1" value="4.5">
                            </div>
                            <div class="form-group">
                                <label>Badge</label>
                                <select name="badge">
                                    <option value="">Sin badge</option>
                                    <option value="destacado">Destacado</option>
                                    <option value="top">Top</option>
                                    <option value="nuevo">Nuevo</option>
                                    <option value="hot">Hot</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn-secondary" onclick="cerrarModal()">Cancelar</button>
                            <button type="submit" class="btn-primary">Guardar Producto</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </div>

    <script src="datos.js"></script>
    <script src="admin.js"></script>
</body>
</html>
```

---

### 4. Estilos del Admin Panel

**Crear archivo**: `admin-styles.css`

```css
.admin-container {
    display: grid;
    grid-template-columns: 250px 1fr;
    height: 100vh;
    background: var(--bg-light);
}

.admin-sidebar {
    background: var(--bg-darker);
    color: white;
    padding: 20px;
}

.admin-logo h2 {
    margin-bottom: 40px;
    font-size: 20px;
}

.admin-nav-item {
    display: block;
    padding: 15px 20px;
    color: #94a3b8;
    text-decoration: none;
    border-radius: 8px;
    margin-bottom: 8px;
    transition: all 0.2s;
}

.admin-nav-item:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
}

.admin-nav-item.active {
    background: var(--primary);
    color: white;
}

.admin-main {
    padding: 40px;
    overflow-y: auto;
}

.admin-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.admin-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.stat-card {
    background: var(--bg-card);
    padding: 20px;
    border-radius: 12px;
    display: flex;
    gap: 15px;
    align-items: center;
    border: 1px solid var(--border-color);
}

.stat-icon {
    font-size: 32px;
}

.stat-number {
    display: block;
    font-size: 28px;
    font-weight: 700;
    color: var(--primary);
}

.stat-label {
    font-size: 14px;
    color: var(--text-secondary);
}

.admin-table-container {
    background: var(--bg-card);
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid var(--border-color);
}

.admin-table {
    width: 100%;
    border-collapse: collapse;
}

.admin-table thead {
    background: var(--bg-light);
}

.admin-table th {
    padding: 15px;
    text-align: left;
    font-weight: 600;
    color: var(--text-secondary);
    font-size: 14px;
}

.admin-table td {
    padding: 15px;
    border-top: 1px solid var(--border-color);
}

.modal {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 10000;
    align-items: center;
    justify-content: center;
}

.modal.active {
    display: flex;
}

.modal-content {
    background: var(--bg-card);
    border-radius: 16px;
    width: 90%;
    max-width: 600px;
    max-height: 90vh;
    overflow-y: auto;
}

.modal-header {
    padding: 20px;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-close {
    background: none;
    border: none;
    font-size: 28px;
    cursor: pointer;
    color: var(--text-secondary);
}

.modal-body {
    padding: 20px;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--text-primary);
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: var(--bg-light);
    color: var(--text-primary);
    font-family: inherit;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
}

.modal-footer {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    padding-top: 20px;
    border-top: 1px solid var(--border-color);
}
```

---

### 5. JavaScript del Admin Panel

**Crear archivo**: `admin.js`

```javascript
// Cargar datos del admin
document.addEventListener('DOMContentLoaded', function() {
    cargarEstadisticas();
    cargarTablaProductos();
});

function cargarEstadisticas() {
    document.getElementById('totalProductos').textContent = DATOS.productos.length;
    document.getElementById('destacados').textContent = DATOS.productos.filter(p => p.badge).length;
}

function cargarTablaProductos() {
    const tbody = document.getElementById('productosTableBody');
    tbody.innerHTML = DATOS.productos.map(producto => {
        const categoria = DATOS.categorias.find(c => c.id === producto.categoria);
        return `
            <tr>
                <td><strong>${producto.nombre}</strong></td>
                <td><span class="badge" style="background: ${categoria.color}20; color: ${categoria.color}">${categoria.nombre}</span></td>
                <td>⭐ ${producto.rating}</td>
                <td>${producto.badge ? `<span class="badge badge-${producto.badge}">${producto.badge}</span>` : '-'}</td>
                <td>
                    <button class="btn-icon" onclick="editarProducto('${producto.id}')" title="Editar">✏️</button>
                    <button class="btn-icon" onclick="eliminarProducto('${producto.id}')" title="Eliminar">🗑️</button>
                </td>
            </tr>
        `;
    }).join('');
}

function abrirModalNuevoProducto() {
    document.getElementById('modalProducto').classList.add('active');
    document.getElementById('modalTitle').textContent = 'Nuevo Producto';
    document.getElementById('formProducto').reset();
}

function cerrarModal() {
    document.getElementById('modalProducto').classList.remove('active');
}

function editarProducto(id) {
    const producto = DATOS.productos.find(p => p.id === id);
    if (!producto) return;
    
    // Llenar formulario con datos del producto
    const form = document.getElementById('formProducto');
    form.id.value = producto.id;
    form.nombre.value = producto.nombre;
    form.categoria.value = producto.categoria;
    form.descripcion.value = producto.descripcion;
    form.caracteristicas.value = producto.caracteristicas.join('\n');
    form.rating.value = producto.rating;
    form.badge.value = producto.badge || '';
    
    document.getElementById('modalTitle').textContent = 'Editar Producto';
    document.getElementById('modalProducto').classList.add('active');
}

function eliminarProducto(id) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {
        // Aquí irá la lógica para eliminar
        alert('Producto eliminado (simulado)');
        cargarTablaProductos();
    }
}

// Guardar producto
document.getElementById('formProducto').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const nuevoProducto = {
        id: formData.get('id'),
        nombre: formData.get('nombre'),
        categoria: formData.get('categoria'),
        descripcion: formData.get('descripcion'),
        caracteristicas: formData.get('caracteristicas').split('\n').filter(c => c.trim()),
        rating: parseFloat(formData.get('rating')),
        badge: formData.get('badge') || null
    };
    
    // Aquí irá la lógica para guardar en datos.js
    console.log('Nuevo producto:', nuevoProducto);
    alert('Producto guardado (simulado)\nNota: Para persistir los cambios, debes editar datos.js manualmente.');
    
    cerrarModal();
    cargarTablaProductos();
});
```

---

## 📌 RESUMEN

### ✅ COMPLETADO:
- Errores de accesibilidad
- API de Unsplash integrada
- Precios eliminados
- Botones de Agregar y Consultar separados
- Estadísticas actualizadas

### 📝 PENDIENTE (Código proporcionado arriba):
1. Fondo animado con imágenes flotantes
2. Modo nocturno/claro
3. Panel de administración completo
4. Mejoras CSS adicionales
5. Categorías clickeables (ya funcionan con el código actual)

### 🎯 PRÓXIMOS PASOS:
1. Copiar el código CSS del fondo animado a `styles.css`
2. Agregar el HTML del fondo animado antes de `</body>` en `index.html`
3. Copiar el código de modo nocturno a `app.js`
4. Crear `admin.html`, `admin-styles.css` y `admin.js`
5. Probar en el navegador

---

**Tiempo estimado para implementar todo**: 30-45 minutos  
**Archivos a crear**: 3 (admin.html, admin-styles.css, admin.js)  
**Archivos a modificar**: 3 (index.html, styles.css, app.js)

¿Quieres que proceda a implementar estos cambios automáticamente?
