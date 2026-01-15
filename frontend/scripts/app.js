/* ═══════════════════════════════════════════════════════════════
   MEXICOPOLY - APPS | FUNCIONES PRINCIPALES
   ═══════════════════════════════════════════════════════════════ */

// Carrito de compras
let carrito = JSON.parse(localStorage.getItem('mexicopoly-carrito')) || [];

// Esperar a que cargue el DOM
document.addEventListener('DOMContentLoaded', function() {
    inicializarApp();
    actualizarCarritoUI();
    inicializarModoNocturno();
});

function inicializarApp() {
    cargarProductosDestacados();
    cargarCategorias();
    cargarCategoriasFooter();
    inicializarBusqueda();
    inicializarCarrito();
    inicializarAnimacionesScroll();
}

// ═══════════════════════════════════════════════════════════════
// ANIMACIONES DE SCROLL
// ═══════════════════════════════════════════════════════════════
function inicializarAnimacionesScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(element => {
        observer.observe(element);
    });
}

// ═══════════════════════════════════════════════════════════════
// MODO NOCTURNO/CLARO
// ═══════════════════════════════════════════════════════════════
function inicializarModoNocturno() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle';
    themeBtn.innerHTML = `<span>${savedTheme === 'dark' ? '☀️' : '🌙'}</span>`;
    themeBtn.onclick = toggleTheme;
    themeBtn.setAttribute('aria-label', 'Cambiar tema');
    document.body.appendChild(themeBtn);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    const icon = document.querySelector('.theme-toggle span');
    icon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
}

// ═══════════════════════════════════════════════════════════════
// CARRITO DE COMPRAS
// ═══════════════════════════════════════════════════════════════
function inicializarCarrito() {
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', toggleCarrito);
    }
}

function agregarAlCarrito(productoId) {
    const producto = DATOS.productos.find(p => p.id === productoId);
    if (!producto) return;
    
    const itemExistente = carrito.find(item => item.id === productoId);
    
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            icono: producto.icono,
            cantidad: 1
        });
    }
    
    guardarCarrito();
    actualizarCarritoUI();
    mostrarNotificacion(`${producto.icono} ${producto.nombre} agregado al carrito`);
}

function eliminarDelCarrito(productoId) {
    carrito = carrito.filter(item => item.id !== productoId);
    guardarCarrito();
    actualizarCarritoUI();
    renderizarCarrito();
}

function cambiarCantidad(productoId, nuevaCantidad) {
    const item = carrito.find(item => item.id === productoId);
    if (item) {
        item.cantidad = Math.max(1, nuevaCantidad);
        guardarCarrito();
        actualizarCarritoUI();
        renderizarCarrito();
    }
}

function guardarCarrito() {
    localStorage.setItem('mexicopoly-carrito', JSON.stringify(carrito));
}

function actualizarCarritoUI() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

function toggleCarrito() {
    let panel = document.getElementById('carritoPanel');
    
    if (!panel) {
        crearPanelCarrito();
        panel = document.getElementById('carritoPanel');
    }
    
    panel.classList.toggle('active');
    renderizarCarrito();
}

function crearPanelCarrito() {
    const panel = document.createElement('div');
    panel.id = 'carritoPanel';
    panel.className = 'carrito-panel';
    panel.innerHTML = `
        <div class="carrito-header">
            <h3>🛒 Mi Carrito</h3>
            <button class="carrito-close" onclick="toggleCarrito()">✕</button>
        </div>
        <div class="carrito-items" id="carritoItems"></div>
        <div class="carrito-footer">
            <div class="carrito-total">
                <span>Total:</span>
                <span id="carritoTotal">$0 MXN</span>
            </div>
            <button class="btn-checkout" onclick="enviarPedidoWhatsApp()">
                💬 Enviar Pedido por WhatsApp
            </button>
            <button class="btn-clear-cart" onclick="vaciarCarrito()">
                🗑️ Vaciar Carrito
            </button>
        </div>
    `;
    document.body.appendChild(panel);
    
    // Cerrar al hacer click fuera
    panel.addEventListener('click', (e) => {
        if (e.target === panel) {
            toggleCarrito();
        }
    });
}

function renderizarCarrito() {
    const itemsContainer = document.getElementById('carritoItems');
    const totalElement = document.getElementById('carritoTotal');
    
    if (!itemsContainer) return;
    
    if (carrito.length === 0) {
        itemsContainer.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío</p>';
        if (totalElement) totalElement.textContent = '$0 MXN';
        return;
    }
    
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    
    itemsContainer.innerHTML = carrito.map(item => `
        <div class="carrito-item">
            <span class="carrito-item-icon">${item.icono}</span>
            <div class="carrito-item-info">
                <div class="carrito-item-nombre">${item.nombre}</div>
                <div class="carrito-item-precio">$${item.precio.toLocaleString()} MXN</div>
            </div>
            <div class="carrito-item-actions">
                <button onclick="cambiarCantidad('${item.id}', ${item.cantidad - 1})">-</button>
                <span>${item.cantidad}</span>
                <button onclick="cambiarCantidad('${item.id}', ${item.cantidad + 1})">+</button>
                <button onclick="eliminarDelCarrito('${item.id}')" class="btn-remove">🗑️</button>
            </div>
        </div>
    `).join('');
    
    if (totalElement) {
        totalElement.textContent = `$${total.toLocaleString()} MXN`;
    }
}

function vaciarCarrito() {
    if (confirm('¿Estás seguro de vaciar el carrito?')) {
        carrito = [];
        guardarCarrito();
        actualizarCarritoUI();
        renderizarCarrito();
    }
}

function enviarPedidoWhatsApp() {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    let mensaje = '🛍️ *PEDIDO MEXICOPOLY*\n\n';
    
    carrito.forEach(item => {
        mensaje += `${item.icono} *${item.nombre}*\n`;
        mensaje += `   Cantidad: ${item.cantidad}\n`;
        mensaje += `   Precio: $${(item.precio * item.cantidad).toLocaleString()} MXN\n\n`;
    });
    
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    mensaje += `💰 *TOTAL: $${total.toLocaleString()} MXN*\n\n`;
    mensaje += '¿Está disponible?';
    
    const url = `https://wa.me/${DATOS.config.whatsapp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

function mostrarNotificacion(mensaje) {
    const notif = document.createElement('div');
    notif.className = 'notificacion';
    notif.textContent = mensaje;
    document.body.appendChild(notif);
    
    setTimeout(() => notif.classList.add('show'), 10);
    setTimeout(() => {
        notif.classList.remove('show');
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

// ═══════════════════════════════════════════════════════════════
// CARGAR PRODUCTOS DESTACADOS (Página principal)
// ═══════════════════════════════════════════════════════════════
function cargarProductosDestacados() {
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;
    
    // Filtrar solo productos con badge
    const destacados = DATOS.productos
        .filter(p => p.badge !== null)
        .slice(0, 8);
    
    grid.innerHTML = destacados.map(producto => crearTarjetaProducto(producto)).join('');
}

// ═══════════════════════════════════════════════════════════════
// CREAR TARJETA DE PRODUCTO
// ═══════════════════════════════════════════════════════════════
function obtenerImagenProducto(producto) {
    // Mapeo de productos a logos oficiales usando APIs públicas
    const logosOficiales = {
        // Microsoft
        'microsoft-365': 'https://img.icons8.com/color/400/microsoft-365.png',
        'office-2021': 'https://img.icons8.com/color/400/ms-office.png',
        'office-2019': 'https://img.icons8.com/color/400/ms-office.png',
        'windows-11': 'https://img.icons8.com/color/400/windows-11.png',
        'windows-10': 'https://img.icons8.com/color/400/windows-10.png',
        
        // Adobe
        'adobe-photoshop': 'https://img.icons8.com/color/400/adobe-photoshop.png',
        'adobe-illustrator': 'https://img.icons8.com/color/400/adobe-illustrator.png',
        'adobe-premiere': 'https://img.icons8.com/color/400/adobe-premiere-pro.png',
        'premiere-pro': 'https://img.icons8.com/color/400/adobe-premiere-pro.png',
        'after-effects': 'https://img.icons8.com/color/400/adobe-after-effects.png',
        'adobe-xd': 'https://img.icons8.com/color/400/adobe-xd.png',
        'indesign': 'https://img.icons8.com/color/400/adobe-indesign.png',
        'lightroom': 'https://img.icons8.com/color/400/adobe-lightroom.png',
        
        // Autodesk
        'autocad': 'https://img.icons8.com/color/400/autodesk-autocad.png',
        'revit': 'https://img.icons8.com/color/400/autodesk-revit.png',
        
        // Seguridad
        'norton-360': 'https://img.icons8.com/color/400/norton-antivirus.png',
        'kaspersky': 'https://img.icons8.com/color/400/kaspersky.png',
        'avast': 'https://img.icons8.com/color/400/avast.png',
        'mcafee': 'https://img.icons8.com/color/400/mcafee.png',
        
        // Juegos
        'minecraft': 'https://img.icons8.com/color/400/minecraft-logo.png',
        'steam': 'https://img.icons8.com/color/400/steam.png',
        'epic-games': 'https://img.icons8.com/color/400/epic-games.png',
        'xbox': 'https://img.icons8.com/color/400/xbox.png',
        
        // Desarrollo
        'visual-studio': 'https://img.icons8.com/color/400/visual-studio.png',
        'vs-code': 'https://img.icons8.com/color/400/visual-studio-code-2019.png',
        'github': 'https://img.icons8.com/color/400/github.png',
        'intellij': 'https://img.icons8.com/color/400/intellij-idea.png',
        'pycharm': 'https://img.icons8.com/color/400/pycharm.png',
        'android-studio': 'https://img.icons8.com/color/400/android-studio.png',
        
        // Multimedia
        'spotify': 'https://img.icons8.com/color/400/spotify.png',
        'vlc': 'https://img.icons8.com/color/400/vlc.png',
        'audacity': 'https://img.icons8.com/color/400/audacity.png',
        'obs': 'https://img.icons8.com/color/400/obs-studio.png',
        
        // Utilidades
        'winrar': 'https://img.icons8.com/color/400/winrar.png',
        '7zip': 'https://img.icons8.com/color/400/7zip.png',
        'ccleaner': 'https://img.icons8.com/color/400/ccleaner.png',
        'teamviewer': 'https://img.icons8.com/color/400/teamviewer.png',
        
        // Comunicación
        'zoom': 'https://img.icons8.com/color/400/zoom.png',
        'discord': 'https://img.icons8.com/color/400/discord-logo.png',
        'skype': 'https://img.icons8.com/color/400/skype.png',
        'slack': 'https://img.icons8.com/color/400/slack-new.png',
        
        // Educación
        'duolingo': 'https://img.icons8.com/color/400/duolingo.png',
        'coursera': 'https://img.icons8.com/color/400/coursera.png'
    };
    
    // Buscar por ID exacto
    if (logosOficiales[producto.id]) {
        return logosOficiales[producto.id];
    }
    
    // Buscar por palabras clave en el nombre
    const nombreLower = producto.nombre.toLowerCase();
    
    // Mapeo de palabras clave a logos
    const keywordMap = {
        'photoshop': 'adobe-photoshop',
        'illustrator': 'adobe-illustrator',
        'premiere': 'premiere-pro',
        'after effects': 'after-effects',
        'microsoft 365': 'microsoft-365',
        'office 2021': 'office-2021',
        'office 2019': 'office-2019',
        'windows 11': 'windows-11',
        'windows 10': 'windows-10',
        'autocad': 'autocad',
        'norton': 'norton-360',
        'kaspersky': 'kaspersky',
        'minecraft': 'minecraft',
        'steam': 'steam',
        'visual studio code': 'vs-code',
        'visual studio': 'visual-studio',
        'github': 'github',
        'spotify': 'spotify',
        'winrar': 'winrar',
        '7-zip': '7zip',
        'zoom': 'zoom',
        'discord': 'discord',
        'duolingo': 'duolingo'
    };
    
    for (const [keyword, logoKey] of Object.entries(keywordMap)) {
        if (nombreLower.includes(keyword) && logosOficiales[logoKey]) {
            return logosOficiales[logoKey];
        }
    }
    
    // Fallback: icono genérico por categoría usando icons8
    const categoriaIconos = {
        'ofimatica': 'https://img.icons8.com/color/400/documents.png',
        'diseno': 'https://img.icons8.com/color/400/design.png',
        'seguridad': 'https://img.icons8.com/color/400/security-checked.png',
        'juegos': 'https://img.icons8.com/color/400/controller.png',
        'desarrollo': 'https://img.icons8.com/color/400/code.png',
        'multimedia': 'https://img.icons8.com/color/400/video.png',
        'utilidades': 'https://img.icons8.com/color/400/settings.png',
        'educacion': 'https://img.icons8.com/color/400/book.png'
    };
    
    return categoriaIconos[producto.categoria] || 'https://img.icons8.com/color/400/software.png';
}

function crearTarjetaProducto(producto) {
    const categoria = DATOS.categorias.find(c => c.id === producto.categoria);
    const badgeClass = producto.badge ? `badge-${producto.badge === 'destacado' ? 'featured' : producto.badge}` : '';
    const badgeText = obtenerTextoBadge(producto.badge);
    
    // Obtener imagen específica del producto
    const imageUrl = obtenerImagenProducto(producto);
    
    return `
        <div class="product-card" data-id="${producto.id}" data-categoria="${producto.categoria}" onclick="verDetallesProducto('${producto.id}')">
            ${producto.badge ? `<span class="product-badge ${badgeClass}">${badgeText}</span>` : ''}
            <div class="product-image product-image-${producto.categoria}">
                <img src="${imageUrl}" alt="${producto.nombre}" onerror="this.src='https://img.icons8.com/color/400/software.png'" style="width: 140px; height: 140px; object-fit: contain; z-index: 1; position: relative; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));">
            </div>
            <div class="product-meta">
                <span class="product-category" style="background: ${categoria.color}15; color: ${categoria.color}">
                    ${categoria.nombre}
                </span>
                <span class="product-rating">⭐ ${producto.rating}</span>
            </div>
            <h3 class="product-name">${producto.nombre}</h3>
            <p class="product-description">${producto.descripcion}</p>
            <ul class="product-features">
                ${producto.caracteristicas.slice(0, 3).map(c => `<li>${c}</li>`).join('')}
            </ul>
            <div class="product-footer">
                <button class="btn-add" onclick="agregarAlCarrito('${producto.id}'); event.stopPropagation();">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    Agregar
                </button>
                <button class="btn-contact" onclick="contactarWhatsApp('${producto.nombre}'); event.stopPropagation();">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Consultar
                </button>
            </div>
        </div>
    `;
}

function verDetallesProducto(productoId) {
    const producto = DATOS.productos.find(p => p.id === productoId);
    if (!producto) return;
    
    // Mostrar modal con detalles (implementar más tarde)
    contactarWhatsApp(producto.nombre);
}

function obtenerTextoBadge(badge) {
    const textos = {
        'destacado': 'DESTACADO',
        'top': 'TOP',
        'nuevo': 'NUEVO',
        'oferta': 'OFERTA',
        'hot': 'HOT'
    };
    return textos[badge] || '';
}

// ═══════════════════════════════════════════════════════════════
// CARGAR CATEGORÍAS
// ═══════════════════════════════════════════════════════════════
function contarProductosPorCategoria(categoriaId) {
    return DATOS.productos.filter(p => p.categoria === categoriaId).length;
}

function cargarCategorias() {
    const grid = document.getElementById('categoriesGrid');
    if (!grid) return;
    
    const iconosSVG = {
        'ofimatica': '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
        'diseno': '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>',
        'seguridad': '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
        'juegos': '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="2" x2="6" y2="6"></line><line x1="18" y1="2" x2="18" y2="6"></line><line x1="6" y1="18" x2="6" y2="22"></line><line x1="18" y1="18" x2="18" y2="22"></line><rect x="2" y="6" width="20" height="12" rx="2"></rect></svg>',
        'desarrollo': '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
        'multimedia': '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>',
        'utilidades': '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
        'educacion': '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>'
    };
    
    grid.innerHTML = DATOS.categorias.map(cat => `
        <a href="catalogo.html?categoria=${cat.id}" class="category-card">
            <span class="category-icon" style="color: ${cat.color}">
                ${iconosSVG[cat.id] || iconosSVG['utilidades']}
            </span>
            <h3 class="category-name">${cat.nombre}</h3>
            <p class="category-count">${contarProductosPorCategoria(cat.id)} apps</p>
        </a>
    `).join('');
}

function cargarCategoriasFooter() {
    const lista = document.getElementById('footerCategories');
    if (!lista) return;
    
    lista.innerHTML = DATOS.categorias.slice(0, 5).map(cat => 
        `<li><a href="catalogo.html?categoria=${cat.id}">${cat.nombre}</a></li>`
    ).join('');
}

// ═══════════════════════════════════════════════════════════════
// BÚSQUEDA
// ═══════════════════════════════════════════════════════════════
function inicializarBusqueda() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput. addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const termino = this.value.trim();
            if (termino) {
                window.location.href = `catalogo.html?buscar=${encodeURIComponent(termino)}`;
            }
        }
    });
}

// ═══════════════════════════════════════════════════════════════
// CONTACTAR POR WHATSAPP
// ═══════════════════════════════════════════════════════════════
function contactarWhatsApp(nombreProducto) {
    const mensaje = `Hola!  Me interesa:  ${nombreProducto}. ¿Está disponible?`;
    const url = `https://wa.me/${DATOS.config.whatsapp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// ═══════════════════════════════════════════════════════════════
// MENU MOVIL
// ═══════════════════════════════════════════════════════════════
function inicializarMenuMovil() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        
        // Cerrar menu al hacer click en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
        
        // Cerrar menu al hacer click fuera
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && 
                !navLinks.contains(e.target) && 
                !mobileMenuBtn.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
}

// Inicializar menu movil cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializarMenuMovil);
} else {
    inicializarMenuMovil();
}