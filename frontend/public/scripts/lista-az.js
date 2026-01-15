/* ═══════════════════════════════════════════════════════════════
   MEXICOPOLY - APPS | LISTA A-Z
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function() {
    generarListaAZ();
    inicializarBusquedaAZ();
});

// ═══════════════════════════════════════════════════════════════
// GENERAR LISTA ALFABÉTICA
// ═══════════════════════════════════════════════════════════════
function generarListaAZ() {
    const productosOrdenados = [...DATOS.productos].sort((a, b) => 
        a.nombre.localeCompare(b.nombre)
    );
    
    // Agrupar por letra
    const grupos = {};
    productosOrdenados.forEach(producto => {
        const letra = producto.nombre[0].toUpperCase();
        if (!grupos[letra]) {
            grupos[letra] = [];
        }
        grupos[letra].push(producto);
    });
    
    // Generar navegación alfabética
    generarNavegacionAlfabetica(grupos);
    
    // Renderizar lista
    renderizarListaAZ(grupos);
}

// ═══════════════════════════════════════════════════════════════
// NAVEGACIÓN ALFABÉTICA
// ═══════════════════════════════════════════════════════════════
function generarNavegacionAlfabetica(grupos) {
    const nav = document.getElementById('alphabetNav');
    if (!nav) return;
    
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    
    nav.innerHTML = alfabeto.map(letra => {
        const existe = grupos[letra] && grupos[letra].length > 0;
        return `
            <a href="#letra-${letra}" class="${!existe ? 'disabled' : ''}" 
               ${existe ? `onclick="scrollToLetter('${letra}')"` : ''}>
                ${letra}
            </a>
        `;
    }).join('');
}

function scrollToLetter(letra) {
    const elemento = document.getElementById(`letra-${letra}`);
    if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return false;
}

// ═══════════════════════════════════════════════════════════════
// RENDERIZAR LISTA
// ═══════════════════════════════════════════════════════════════
function renderizarListaAZ(grupos) {
    const lista = document.getElementById('azList');
    if (!lista) return;
    
    const letrasOrdenadas = Object.keys(grupos).sort();
    
    lista.innerHTML = letrasOrdenadas.map(letra => {
        const productos = grupos[letra];
        return `
            <div class="az-group" id="letra-${letra}">
                <div class="az-letter">${letra}</div>
                <div class="az-items">
                    ${productos.map(producto => {
                        const categoria = DATOS.categorias.find(c => c.id === producto.categoria);
                        return `
                            <div class="az-item" onclick="contactarWhatsApp('${producto.nombre}')">
                                <div>
                                    <span class="az-item-icon">${producto.icono}</span>
                                    <span class="az-item-name">${producto.nombre}</span>
                                </div>
                                <span class="az-item-category" style="background: ${categoria.color}15; color: ${categoria.color}">
                                    ${categoria.nombre}
                                </span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');
}

// ═══════════════════════════════════════════════════════════════
// BÚSQUEDA EN LISTA A-Z
// ═══════════════════════════════════════════════════════════════
function inicializarBusquedaAZ() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const termino = this.value.trim().toLowerCase();
        
        if (termino.length === 0) {
            generarListaAZ();
            return;
        }
        
        if (termino.length >= 2) {
            filtrarListaAZ(termino);
        }
    });
}

function filtrarListaAZ(termino) {
    const productosFiltrados = DATOS.productos.filter(p => 
        p.nombre.toLowerCase().includes(termino) ||
        p.descripcion.toLowerCase().includes(termino)
    ).sort((a, b) => a.nombre.localeCompare(b.nombre));
    
    // Agrupar resultados por letra
    const grupos = {};
    productosFiltrados.forEach(producto => {
        const letra = producto.nombre[0].toUpperCase();
        if (!grupos[letra]) {
            grupos[letra] = [];
        }
        grupos[letra].push(producto);
    });
    
    // Actualizar navegación y lista
    generarNavegacionAlfabetica(grupos);
    renderizarListaAZ(grupos);
}
