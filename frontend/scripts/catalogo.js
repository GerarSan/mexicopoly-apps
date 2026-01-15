/* ═══════════════════════════════════════════════════════════════
   MEXICOPOLY - APPS | PÁGINA DE CATÁLOGO
   ═══════════════════════════════════════════════════════════════ */

let categoriaActual = 'todos';

document.addEventListener('DOMContentLoaded', function() {
    cargarFiltrosCategorias();
    
    // Verificar parámetros URL
    const params = new URLSearchParams(window.location.search);
    const categoriaURL = params.get('categoria');
    const buscarURL = params.get('buscar');
    
    if (categoriaURL) {
        categoriaActual = categoriaURL;
        actualizarFiltroActivo();
    }
    
    if (buscarURL) {
        document.getElementById('searchInput').value = buscarURL;
        buscarProductos(buscarURL);
    } else {
        cargarProductos();
    }
    
    inicializarBusquedaCatalogo();
});

// ═══════════════════════════════════════════════════════════════
// CARGAR FILTROS DE CATEGORÍAS
// ═══════════════════════════════════════════════════════════════
function cargarFiltrosCategorias() {
    const lista = document.getElementById('categoryFilters');
    if (!lista) return;
    
    // Agregar categorías dinámicamente
    DATOS.categorias.forEach(cat => {
        const li = document.createElement('li');
        li.setAttribute('data-category', cat.id);
        li.innerHTML = `
            <span>${cat.nombre}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="check-icon">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        `;
        li.addEventListener('click', () => filtrarPorCategoria(cat.id));
        lista.appendChild(li);
    });
    
    // Evento para "Todos"
    const todoItem = lista.querySelector('[data-category="todos"]');
    if (todoItem) {
        todoItem.addEventListener('click', () => filtrarPorCategoria('todos'));
    }
}

// ═══════════════════════════════════════════════════════════════
// FILTRAR POR CATEGORÍA
// ═══════════════════════════════════════════════════════════════
function filtrarPorCategoria(categoriaId) {
    categoriaActual = categoriaId;
    actualizarFiltroActivo();
    cargarProductos();
}

function actualizarFiltroActivo() {
    const items = document.querySelectorAll('.category-list li');
    items.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-category') === categoriaActual) {
            item.classList.add('active');
        }
    });
}

// ═══════════════════════════════════════════════════════════════
// CARGAR PRODUCTOS
// ═══════════════════════════════════════════════════════════════
function cargarProductos() {
    const grid = document.getElementById('productsGrid');
    const contador = document.getElementById('resultsCount');
    if (!grid) return;
    
    let productos = DATOS.productos;
    
    // Filtrar por categoría
    if (categoriaActual !== 'todos') {
        productos = productos.filter(p => p.categoria === categoriaActual);
    }
    
    // Actualizar contador
    if (contador) {
        const catNombre = categoriaActual === 'todos' 
            ? 'todas las categorías' 
            : DATOS.categorias.find(c => c.id === categoriaActual)?.nombre || '';
        contador.textContent = `Mostrando ${productos.length} productos en ${catNombre}`;
    }
    
    // Renderizar
    grid.innerHTML = productos.map(producto => crearTarjetaProducto(producto)).join('');
}

// ═══════════════════════════════════════════════════════════════
// BÚSQUEDA EN CATÁLOGO
// ═══════════════════════════════════════════════════════════════
function inicializarBusquedaCatalogo() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput. addEventListener('input', function() {
        const termino = this.value.trim();
        if (termino. length >= 2) {
            buscarProductos(termino);
        } else if (termino.length === 0) {
            cargarProductos();
        }
    });
}

function buscarProductos(termino) {
    const grid = document.getElementById('productsGrid');
    const contador = document.getElementById('resultsCount');
    if (!grid) return;
    
    const terminoLower = termino.toLowerCase();
    const resultados = DATOS.productos.filter(p => 
        p.nombre. toLowerCase().includes(terminoLower) ||
        p.descripcion.toLowerCase().includes(terminoLower) ||
        p. caracteristicas.some(c => c. toLowerCase().includes(terminoLower))
    );
    
    if (contador) {
        contador.textContent = `${resultados.length} resultados para "${termino}"`;
    }
    
    grid.innerHTML = resultados.length > 0
        ? resultados. map(producto => crearTarjetaProducto(producto)).join('')
        : '<p style="text-align:  center; padding: 40px; color: var(--text-secondary);">No se encontraron productos.  Intenta con otro término.</p>';
}

// ═══════════════════════════════════════════════════════════════
// GENERAR PDF (MEJORADO)
// ═══════════════════════════════════════════════════════════════
async function generarPDF() {
    // Verificar si jsPDF está disponible
    if (typeof window.jspdf === 'undefined') {
        alert('⚠️ Error al cargar jsPDF. Recargando página...');
        window.location.reload();
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const categoriaSeleccionada = categoriaActual === 'todos' 
        ? 'Todos los Productos' 
        : DATOS.categorias.find(c => c.id === categoriaActual)?.nombre || '';
    
    let productos = DATOS.productos;
    if (categoriaActual !== 'todos') {
        productos = productos.filter(p => p.categoria === categoriaActual);
    }
    
    // HEADER - Logo y título
    doc.setFontSize(22);
    doc.setTextColor(99, 102, 241);
    doc.setFont('helvetica', 'bold');
    doc.text('MexicoPoly - Apps', 105, 20, { align: 'center' });
    
    doc.setFontSize(14);
    doc.setTextColor(50, 50, 50);
    doc.setFont('helvetica', 'normal');
    doc.text(`Catalogo: ${categoriaSeleccionada}`, 105, 30, { align: 'center' });
    
    doc.setFontSize(9);
    doc.setTextColor(120, 120, 120);
    const fecha = new Date().toLocaleDateString('es-MX', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    doc.text(`Generado el ${fecha}`, 105, 36, { align: 'center' });
    
    // Línea separadora principal
    doc.setDrawColor(99, 102, 241);
    doc.setLineWidth(0.8);
    doc.line(15, 42, 195, 42);
    
    let y = 52;
    const margenIzq = 15;
    const margenDer = 195;
    const anchoUtil = margenDer - margenIzq;
    
    productos.forEach((producto, index) => {
        // Verificar espacio disponible (altura aproximada por producto: 35mm)
        if (y > 260) {
            doc.addPage();
            y = 20;
        }
        
        const categoria = DATOS.categorias.find(c => c.id === producto.categoria);
        
        // Número de producto
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text(`#${index + 1}`, margenIzq, y);
        
        // Nombre del producto (negrita)
        doc.setFontSize(11);
        doc.setTextColor(30, 30, 30);
        doc.setFont('helvetica', 'bold');
        const nombreProducto = `${producto.nombre}`;
        doc.text(nombreProducto, margenIzq + 8, y);
        
        y += 6;
        
        // Categoría con badge de color
        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(100, 100, 100);
        doc.text(`Categoria: ${categoria.nombre}`, margenIzq + 8, y);
        
        // Rating con estrellas
        if (producto.rating) {
            const estrellas = '★'.repeat(Math.floor(producto.rating)) + '☆'.repeat(5 - Math.floor(producto.rating));
            doc.setTextColor(255, 200, 0);
            doc.text(estrellas, margenIzq + 60, y);
            doc.setTextColor(100, 100, 100);
            doc.text(`${producto.rating}/5`, margenIzq + 85, y);
        }
        
        y += 5;
        
        // Descripción con word wrap
        doc.setFontSize(9);
        doc.setTextColor(70, 70, 70);
        doc.setFont('helvetica', 'normal');
        const descripcionWrapped = doc.splitTextToSize(producto.descripcion, anchoUtil - 16);
        doc.text(descripcionWrapped, margenIzq + 8, y);
        y += (descripcionWrapped.length * 4.5) + 3;
        
        // Características (si existen)
        if (producto.caracteristicas && producto.caracteristicas.length > 0) {
            doc.setFontSize(8);
            doc.setTextColor(100, 100, 100);
            doc.text('Caracteristicas:', margenIzq + 8, y);
            y += 4;
            
            producto.caracteristicas.slice(0, 3).forEach(carac => {
                doc.setTextColor(80, 80, 80);
                doc.text(`• ${carac}`, margenIzq + 10, y);
                y += 3.5;
            });
            
            y += 2;
        }
        
        // Badge (si existe)
        if (producto.badge) {
            doc.setFontSize(7);
            doc.setTextColor(139, 92, 246);
            doc.text(`[${producto.badge.toUpperCase()}]`, margenIzq + 8, y);
            y += 4;
        }
        
        // Línea separadora entre productos
        doc.setDrawColor(230, 230, 230);
        doc.setLineWidth(0.3);
        doc.line(margenIzq, y + 2, margenDer, y + 2);
        
        y += 10;
    });
    
    // Footer en todas las páginas
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        
        // Línea superior del footer
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.3);
        doc.line(15, 280, 195, 280);
        
        // Información de contacto
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        doc.setFont('helvetica', 'normal');
        doc.text(`WhatsApp: ${DATOS.config.telefono}`, 15, 287);
        doc.text(`Email: ${DATOS.config.email}`, 15, 291);
        
        // Paginación
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(99, 102, 241);
        doc.text(`Pagina ${i} de ${pageCount}`, 195, 287, { align: 'right' });
        
        // Total de productos en el catálogo
        if (i === pageCount) {
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(120, 120, 120);
            doc.text(`Total de productos: ${productos.length}`, 195, 291, { align: 'right' });
        }
    }
    
    // Descargar con nombre descriptivo
    const nombreArchivo = `MexicoPoly_${categoriaSeleccionada.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(nombreArchivo);
    
    // Notificación de éxito
    if (typeof mostrarNotificacion === 'function') {
        mostrarNotificacion(`✅ PDF generado: ${productos.length} productos`);
    } else {
        alert(`✅ PDF generado exitosamente con ${productos.length} productos`);
    }
}

// ═══════════════════════════════════════════════════════════════
// FILTROS MÓVILES
// ═══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', function() {
    // Crear botón y overlay si no existen
    const catalogLayout = document.querySelector('.catalog-layout');
    const filtersSidebar = document.querySelector('.filters-sidebar');
    
    if (catalogLayout && filtersSidebar && window.innerWidth <= 1024) {
        // Crear botón de filtros móviles
        if (!document.querySelector('.mobile-filter-btn')) {
            const filterBtn = document.createElement('button');
            filterBtn.className = 'mobile-filter-btn';
            filterBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M3 6h18M7 12h10M11 18h2"></path>
                </svg>
                <span>Filtros</span>
            `;
            
            // Insertar el botón antes del grid de productos
            const productsGrid = document.getElementById('productsGrid');
            if (productsGrid && productsGrid.parentElement) {
                productsGrid.parentElement.insertBefore(filterBtn, productsGrid);
            }
        }
        
        // Crear overlay
        if (!document.querySelector('.filter-overlay')) {
            const overlay = document.createElement('div');
            overlay.className = 'filter-overlay';
            document.body.appendChild(overlay);
        }
    }
    
    // Eventos
    const filterBtn = document.querySelector('.mobile-filter-btn');
    const overlay = document.querySelector('.filter-overlay');
    
    if (filterBtn && overlay && filtersSidebar) {
        // Abrir filtros
        filterBtn.addEventListener('click', function() {
            filtersSidebar.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        // Cerrar con overlay
        overlay.addEventListener('click', function() {
            filtersSidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Cerrar al seleccionar una categoría en móvil
        document.querySelectorAll('.category-list li').forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 1024) {
                    setTimeout(() => {
                        filtersSidebar.classList.remove('active');
                        overlay.classList.remove('active');
                        document.body.style.overflow = '';
                    }, 300);
                }
            });
        });
    }
    
    // Actualizar al cambiar tamaño de ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            if (filtersSidebar) filtersSidebar.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});