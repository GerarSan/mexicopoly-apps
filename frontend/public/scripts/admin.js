/* ═══════════════════════════════════════════════════════════════
   MEXICOPOLY ADMIN PANEL - JAVASCRIPT
   ═══════════════════════════════════════════════════════════════ */

let productoEditando = null;

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', function() {
    cargarEstadisticas();
    cargarTablaProductos();
    cargarCategoriasAdmin();
});

// ═══════════════════════════════════════════════════════════════
// CAMBIAR SECCIÓN
// ═══════════════════════════════════════════════════════════════
function cambiarSeccion(seccion) {
    // Ocultar todas las secciones
    document.querySelectorAll('.admin-section').forEach(s => {
        s.classList.remove('active');
    });
    
    // Mostrar sección seleccionada
    document.getElementById(`${seccion}-section`).classList.add('active');
    
    // Actualizar navegación
    document.querySelectorAll('.admin-nav-item').forEach(item => {
        item.classList.remove('active');
    });
    event.target.closest('.admin-nav-item').classList.add('active');
    
    // Cargar datos según sección
    if (seccion === 'productos') {
        cargarTablaProductos();
    } else if (seccion === 'categorias') {
        cargarCategoriasAdmin();
    }
}

// ═══════════════════════════════════════════════════════════════
// ESTADÍSTICAS
// ═══════════════════════════════════════════════════════════════
function cargarEstadisticas() {
    const totalProductos = DATOS.productos.length;
    const destacados = DATOS.productos.filter(p => p.badge).length;
    const promRating = (DATOS.productos.reduce((sum, p) => sum + p.rating, 0) / totalProductos).toFixed(1);
    
    document.getElementById('totalProductos').textContent = totalProductos;
    document.getElementById('destacados').textContent = destacados;
    document.getElementById('categorias').textContent = DATOS.categorias.length;
    document.getElementById('promRating').textContent = promRating;
}

// ═══════════════════════════════════════════════════════════════
// TABLA DE PRODUCTOS
// ═══════════════════════════════════════════════════════════════
function cargarTablaProductos() {
    const tbody = document.getElementById('productosTableBody');
    if (!tbody) return;
    
    tbody.innerHTML = DATOS.productos.map(producto => {
        const categoria = DATOS.categorias.find(c => c.id === producto.categoria);
        const badgeHTML = producto.badge 
            ? `<span class="badge badge-${producto.badge}">${producto.badge}</span>` 
            : '<span style="color: #94a3b8;">Sin badge</span>';
        
        return `
            <tr data-id="${producto.id}">
                <td>
                    <strong style="display: block; margin-bottom: 3px;">${producto.nombre}</strong>
                    <small style="color: #64748b;">${producto.descripcion.substring(0, 50)}...</small>
                </td>
                <td>
                    <span class="badge" style="background: ${categoria.color}20; color: ${categoria.color}; border: 1px solid ${categoria.color}40;">
                        ${categoria.nombre}
                    </span>
                </td>
                <td>
                    <span style="font-weight: 600;">⭐ ${producto.rating}</span>
                </td>
                <td>${badgeHTML}</td>
                <td>
                    <small style="color: #64748b;">${producto.caracteristicas.length} características</small>
                </td>
                <td>
                    <button class="btn-icon" onclick="editarProducto('${producto.id}')" title="Editar producto">
                        ✏️
                    </button>
                    <button class="btn-icon" onclick="duplicarProducto('${producto.id}')" title="Duplicar producto">
                        📋
                    </button>
                    <button class="btn-icon" onclick="eliminarProducto('${producto.id}')" title="Eliminar producto">
                        🗑️
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

// ═══════════════════════════════════════════════════════════════
// FILTRAR PRODUCTOS
// ═══════════════════════════════════════════════════════════════
function filtrarProductos() {
    const searchTerm = document.getElementById('searchProductos').value.toLowerCase();
    const filterCategoria = document.getElementById('filterCategoria').value;
    const filterBadge = document.getElementById('filterBadge').value;
    
    const filas = document.querySelectorAll('#productosTableBody tr');
    
    filas.forEach(fila => {
        const id = fila.getAttribute('data-id');
        const producto = DATOS.productos.find(p => p.id === id);
        
        if (!producto) return;
        
        const matchSearch = !searchTerm || 
            producto.nombre.toLowerCase().includes(searchTerm) ||
            producto.descripcion.toLowerCase().includes(searchTerm);
        
        const matchCategoria = !filterCategoria || producto.categoria === filterCategoria;
        
        const matchBadge = !filterBadge || 
            (filterBadge === 'sin-badge' && !producto.badge) ||
            (producto.badge === filterBadge);
        
        if (matchSearch && matchCategoria && matchBadge) {
            fila.style.display = '';
        } else {
            fila.style.display = 'none';
        }
    });
}

// ═══════════════════════════════════════════════════════════════
// MODAL NUEVO PRODUCTO
// ═══════════════════════════════════════════════════════════════
function abrirModalNuevoProducto() {
    productoEditando = null;
    document.getElementById('modalTitle').textContent = 'Nuevo Producto';
    document.getElementById('formProducto').reset();
    document.getElementById('productoId').disabled = false;
    document.getElementById('modalProducto').classList.add('active');
}

function cerrarModal() {
    document.getElementById('modalProducto').classList.remove('active');
    productoEditando = null;
}

// ═══════════════════════════════════════════════════════════════
// EDITAR PRODUCTO
// ═══════════════════════════════════════════════════════════════
function editarProducto(id) {
    const producto = DATOS.productos.find(p => p.id === id);
    if (!producto) return;
    
    productoEditando = producto;
    
    // Llenar formulario
    document.getElementById('productoId').value = producto.id;
    document.getElementById('productoNombre').value = producto.nombre;
    document.getElementById('productoCategoria').value = producto.categoria;
    document.getElementById('productoDescripcion').value = producto.descripcion;
    document.getElementById('productoCaracteristicas').value = producto.caracteristicas.join('\n');
    document.getElementById('productoRating').value = producto.rating;
    document.getElementById('productoBadge').value = producto.badge || '';
    
    // Deshabilitar edición de ID
    document.getElementById('productoId').disabled = true;
    
    document.getElementById('modalTitle').textContent = 'Editar Producto';
    document.getElementById('modalProducto').classList.add('active');
}

// ═══════════════════════════════════════════════════════════════
// DUPLICAR PRODUCTO
// ═══════════════════════════════════════════════════════════════
function duplicarProducto(id) {
    const producto = DATOS.productos.find(p => p.id === id);
    if (!producto) return;
    
    productoEditando = null;
    
    // Llenar formulario con datos del producto
    document.getElementById('productoId').value = producto.id + '-copia';
    document.getElementById('productoNombre').value = producto.nombre + ' (Copia)';
    document.getElementById('productoCategoria').value = producto.categoria;
    document.getElementById('productoDescripcion').value = producto.descripcion;
    document.getElementById('productoCaracteristicas').value = producto.caracteristicas.join('\n');
    document.getElementById('productoRating').value = producto.rating;
    document.getElementById('productoBadge').value = producto.badge || '';
    
    document.getElementById('productoId').disabled = false;
    document.getElementById('modalTitle').textContent = 'Duplicar Producto';
    document.getElementById('modalProducto').classList.add('active');
}

// ═══════════════════════════════════════════════════════════════
// ELIMINAR PRODUCTO
// ═══════════════════════════════════════════════════════════════
function eliminarProducto(id) {
    const producto = DATOS.productos.find(p => p.id === id);
    if (!producto) return;
    
    if (confirm(`¿Estás seguro de eliminar "${producto.nombre}"?\n\nEsta acción no se puede deshacer.`)) {
        // Encontrar índice
        const index = DATOS.productos.findIndex(p => p.id === id);
        if (index > -1) {
            DATOS.productos.splice(index, 1);
            cargarTablaProductos();
            cargarEstadisticas();
            mostrarNotificacionAdmin('Producto eliminado correctamente', 'success');
            
            // En producción, aquí harías una petición al backend
            console.log('Producto eliminado:', id);
            console.log('NOTA: Para persistir cambios, edita datos.js manualmente o conecta un backend');
        }
    }
}

// ═══════════════════════════════════════════════════════════════
// GUARDAR PRODUCTO
// ═══════════════════════════════════════════════════════════════
function guardarProducto(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    
    // Validar ID único
    const id = formData.get('id').toLowerCase().replace(/\s+/g, '-');
    if (!productoEditando && DATOS.productos.find(p => p.id === id)) {
        alert('Ya existe un producto con ese ID. Por favor usa otro.');
        return;
    }
    
    // Parsear características
    const caracteristicas = formData.get('caracteristicas')
        .split('\n')
        .map(c => c.trim())
        .filter(c => c.length > 0)
        .map(c => c.replace(/^[-•*]\s*/, '')); // Eliminar guiones/bullets al inicio
    
    if (caracteristicas.length < 2) {
        alert('Debes agregar al menos 2 características (una por línea)');
        return;
    }
    
    const nuevoProducto = {
        id: id,
        nombre: formData.get('nombre'),
        categoria: formData.get('categoria'),
        descripcion: formData.get('descripcion'),
        caracteristicas: caracteristicas,
        rating: parseFloat(formData.get('rating')),
        badge: formData.get('badge') || null
    };
    
    if (productoEditando) {
        // Actualizar producto existente
        const index = DATOS.productos.findIndex(p => p.id === productoEditando.id);
        if (index > -1) {
            DATOS.productos[index] = nuevoProducto;
            mostrarNotificacionAdmin('Producto actualizado correctamente', 'success');
        }
    } else {
        // Agregar nuevo producto
        DATOS.productos.push(nuevoProducto);
        mostrarNotificacionAdmin('Producto agregado correctamente', 'success');
    }
    
    // Recargar tabla
    cargarTablaProductos();
    cargarEstadisticas();
    cerrarModal();
    
    // En producción, aquí harías una petición al backend
    console.log('Producto guardado:', nuevoProducto);
    console.log('NOTA: Para persistir cambios, edita datos.js manualmente o conecta un backend');
}

// ═══════════════════════════════════════════════════════════════
// CATEGORÍAS
// ═══════════════════════════════════════════════════════════════
function cargarCategoriasAdmin() {
    const grid = document.getElementById('categoriasGrid');
    if (!grid) return;
    
    grid.innerHTML = DATOS.categorias.map(categoria => {
        const cantidad = DATOS.productos.filter(p => p.categoria === categoria.id).length;
        return `
            <div class="category-card-admin">
                <div class="category-icon">${categoria.icono}</div>
                <h3>${categoria.nombre}</h3>
                <p class="category-count">${cantidad} productos</p>
                <div style="margin-top: 15px;">
                    <span class="badge" style="background: ${categoria.color}20; color: ${categoria.color}; border: 1px solid ${categoria.color}40;">
                        ${categoria.id}
                    </span>
                </div>
            </div>
        `;
    }).join('');
}

// ═══════════════════════════════════════════════════════════════
// CONFIGURACIÓN
// ═══════════════════════════════════════════════════════════════
function guardarConfiguracion() {
    const whatsapp = document.getElementById('configWhatsapp').value;
    const telefono = document.getElementById('configTelefono').value;
    const email = document.getElementById('configEmail').value;
    const nombre = document.getElementById('configNombre').value;
    const colorPrimary = document.getElementById('configColorPrimary').value;
    const colorSecondary = document.getElementById('configColorSecondary').value;
    
    // Actualizar configuración
    DATOS.config.whatsapp = whatsapp;
    DATOS.config.telefono = telefono;
    DATOS.config.email = email;
    DATOS.config.nombre = nombre;
    
    // Aplicar colores (esto solo es visual, no persiste)
    document.documentElement.style.setProperty('--primary', colorPrimary);
    document.documentElement.style.setProperty('--secondary', colorSecondary);
    
    mostrarNotificacionAdmin('Configuración guardada correctamente', 'success');
    
    console.log('Configuración actualizada:', DATOS.config);
    console.log('NOTA: Para persistir cambios, edita datos.js manualmente o conecta un backend');
}

// ═══════════════════════════════════════════════════════════════
// NOTIFICACIONES
// ═══════════════════════════════════════════════════════════════
function mostrarNotificacionAdmin(mensaje, tipo = 'info') {
    const notif = document.createElement('div');
    notif.className = 'admin-notification';
    notif.style.cssText = `
        position: fixed;
        top: 30px;
        right: 30px;
        background: ${tipo === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #6366f1, #8b5cf6)'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10001;
        font-weight: 600;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    notif.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 20px;">${tipo === 'success' ? '✅' : 'ℹ️'}</span>
            <span>${mensaje}</span>
        </div>
    `;
    
    document.body.appendChild(notif);
    
    // Animar entrada
    setTimeout(() => {
        notif.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto-ocultar después de 3 segundos
    setTimeout(() => {
        notif.style.transform = 'translateX(400px)';
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

// ═══════════════════════════════════════════════════════════════
// UTILIDADES
// ═══════════════════════════════════════════════════════════════

// Exportar datos a JSON (útil para backup)
function exportarDatos() {
    const dataStr = JSON.stringify(DATOS, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `mexicopoly-backup-${new Date().getTime()}.json`;
    link.click();
    
    mostrarNotificacionAdmin('Datos exportados correctamente', 'success');
}

// Importar datos desde JSON
function importarDatos() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                // Validar estructura básica
                if (data.productos && data.categorias && data.config) {
                    DATOS.productos = data.productos;
                    DATOS.categorias = data.categorias;
                    DATOS.config = data.config;
                    cargarTablaProductos();
                    cargarEstadisticas();
                    mostrarNotificacionAdmin('Datos importados correctamente', 'success');
                } else {
                    alert('El archivo JSON no tiene la estructura correcta');
                }
            } catch (error) {
                alert('Error al leer el archivo JSON');
                console.error(error);
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

// Cerrar modal con ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        cerrarModal();
    }
});

// Cerrar modal al hacer clic fuera
document.getElementById('modalProducto')?.addEventListener('click', function(e) {
    if (e.target === this) {
        cerrarModal();
    }
});

// ═══════════════════════════════════════════════════════════════
// MENÚ MÓVIL ADMIN
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', function() {
    // Crear botón hamburguesa si no existe
    if (!document.querySelector('.admin-menu-toggle')) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'admin-menu-toggle';
        toggleBtn.innerHTML = '<span></span><span></span><span></span>';
        toggleBtn.setAttribute('aria-label', 'Toggle menu');
        document.body.appendChild(toggleBtn);
        
        const sidebar = document.querySelector('.admin-sidebar');
        
        // Toggle menú
        toggleBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            sidebar.classList.toggle('active');
            document.body.classList.toggle('admin-menu-open');
        });
        
        // Cerrar al hacer clic en un item del menú
        document.querySelectorAll('.admin-nav-item').forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 1024) {
                    toggleBtn.classList.remove('active');
                    sidebar.classList.remove('active');
                    document.body.classList.remove('admin-menu-open');
                }
            });
        });
        
        // Cerrar al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 1024 && 
                sidebar.classList.contains('active') && 
                !sidebar.contains(e.target) && 
                !toggleBtn.contains(e.target)) {
                toggleBtn.classList.remove('active');
                sidebar.classList.remove('active');
                document.body.classList.remove('admin-menu-open');
            }
        });
    }
});
