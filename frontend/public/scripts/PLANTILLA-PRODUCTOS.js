/* ═══════════════════════════════════════════════════════════════
   PLANTILLA PARA AGREGAR NUEVOS PRODUCTOS
   ═══════════════════════════════════════════════════════════════
   
   INSTRUCCIONES:
   1. Copia el template de abajo
   2. Rellena todos los campos
   3. Pégalo en datos.js dentro del array 'productos'
   4. Guarda el archivo
   5. Recarga tu navegador
   
   ═══════════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════════
// TEMPLATE BÁSICO - COPIA DESDE AQUÍ
// ═══════════════════════════════════════════════════════════════

{
    id: "producto-unico-123",              // ⚠️ DEBE SER ÚNICO - ejemplo: "office-2024", "photoshop-cc"
    nombre: "Nombre del Producto",         // Nombre visible al cliente
    categoria: "ofimatica",                // Ver CATEGORÍAS DISPONIBLES abajo
    icono: "📄",                           // Emoji representativo del producto
    descripcion: "Descripción breve del producto en una línea.",  // Máx 80 caracteres
    caracteristicas: [                     // Array de 3-5 características
        "Primera característica importante",
        "Segunda característica destacada",
        "Tercera característica clave",
        "Cuarta característica opcional"
    ],
    precio: 499,                           // ⚠️ SOLO NÚMEROS - Sin $, sin comas
    rating: 4.8,                           // Calificación de 1.0 a 5.0
    badge: "destacado"                     // Ver TIPOS DE BADGES abajo (o null)
},

// ═══════════════════════════════════════════════════════════════
// CATEGORÍAS DISPONIBLES
// ═══════════════════════════════════════════════════════════════

/*
"ofimatica"    → Ofimática (Office, Excel, Word, etc.)
"diseno"       → Diseño Gráfico (Photoshop, Illustrator, etc.)
"seguridad"    → Seguridad (Antivirus, VPN, etc.)
"juegos"       → Juegos (Steam, Minecraft, etc.)
"desarrollo"   → Desarrollo (IDEs, editores de código)
"multimedia"   → Multimedia (Edición de video/audio)
"utilidades"   → Utilidades (Compresores, backup, etc.)
"educacion"    → Educación (Cursos, idiomas, etc.)
*/

// ═══════════════════════════════════════════════════════════════
// TIPOS DE BADGES
// ═══════════════════════════════════════════════════════════════

/*
null             → Sin badge
"destacado"      → Badge morado "DESTACADO"
"top"            → Badge azul "TOP"
"nuevo"          → Badge verde "NUEVO"
"oferta"         → Badge naranja "OFERTA"
"hot"            → Badge rojo "🔥 HOT"
*/

// ═══════════════════════════════════════════════════════════════
// EMOJIS SUGERIDOS POR CATEGORÍA
// ═══════════════════════════════════════════════════════════════

/*
OFIMÁTICA:
📄 📊 📈 📉 📋 📑 📇 📌 📍 ✉️ 📮 📧 📨 📆 📅 🗓️ ☁️ 💼 🗂️

DISEÑO:
🎨 🖌️ 🖍️ ✏️ 📐 📏 🖼️ 🌈 💎 ✨ 🎭 🔮 📸 📷 📹 🎬 🖥️

SEGURIDAD:
🔒 🔐 🛡️ 🔑 🗝️ ⚔️ 🚨 ⚠️ 🚫 🔓 🛠️ 🔧

JUEGOS:
🎮 🕹️ 🎯 🎲 🃏 ⚽ 🏀 🏈 ⚾ 🎾 🏁 🏎️ 🚗 ⛏️ 🤠 🌃 👾 🎰

DESARROLLO:
💻 👨‍💻 👩‍💻 🖥️ ⌨️ 🖱️ 💾 💿 📀 🔌 🚀 ⚙️ 🔧 🛠️ 🤖 🧠 🔬

MULTIMEDIA:
🎬 🎥 📹 🎞️ 🎵 🎶 🎼 🎹 🎸 🎧 🎙️ 📻 📺 🎭 🌟 ✨ 💫

UTILIDADES:
🛠️ 🔧 🔩 ⚙️ 🗜️ 🔨 ⛏️ 📦 🗃️ 📂 📁 🗄️ 💾 💿 🖥️ 🗑️ 🧹

EDUCACIÓN:
📚 📖 📕 📗 📘 📙 📓 📔 📒 📝 ✍️ 🖊️ 🖋️ ✏️ 🎓 🎓 🦉 🗣️ 🧮
*/

// ═══════════════════════════════════════════════════════════════
// EJEMPLOS REALES
// ═══════════════════════════════════════════════════════════════

// EJEMPLO 1: Software de Ofimática
{
    id: "office-365-familiar",
    nombre: "Microsoft 365 Familiar",
    categoria: "ofimatica",
    icono: "👨‍👩‍👧‍👦",
    descripcion: "Plan familiar con Office para 6 usuarios y 6TB de OneDrive",
    caracteristicas: [
        "Hasta 6 usuarios incluidos",
        "1TB de OneDrive por persona",
        "Apps premium de Office",
        "Soporte técnico incluido"
    ],
    precio: 1299,
    rating: 4.9,
    badge: "top"
},

// EJEMPLO 2: Antivirus
{
    id: "avast-premium",
    nombre: "Avast Premium Security 2024",
    categoria: "seguridad",
    icono: "🛡️",
    descripcion: "Protección completa con firewall y VPN ilimitada",
    caracteristicas: [
        "Antivirus multicapa",
        "VPN ilimitada incluida",
        "Protección contra ransomware",
        "Hasta 10 dispositivos"
    ],
    precio: 449,
    rating: 4.7,
    badge: "nuevo"
},

// EJEMPLO 3: Juego
{
    id: "valorant-puntos",
    nombre: "Valorant Points - 5350 VP",
    categoria: "juegos",
    icono: "🎯",
    descripcion: "Moneda premium para Valorant, canjea skins y battle pass",
    caracteristicas: [
        "Código digital instantáneo",
        "5350 Valorant Points",
        "Válido para todas las regiones",
        "Entrega inmediata por email"
    ],
    precio: 699,
    rating: 5.0,
    badge: "hot"
},

// EJEMPLO 4: Herramienta de Desarrollo
{
    id: "phpstorm-2024",
    nombre: "JetBrains PhpStorm 2024",
    categoria: "desarrollo",
    icono: "🐘",
    descripcion: "IDE profesional para desarrollo PHP y frameworks modernos",
    caracteristicas: [
        "Soporte Laravel, Symfony, WordPress",
        "Debugging avanzado",
        "Integración con bases de datos",
        "Licencia anual"
    ],
    precio: 899,
    rating: 4.8,
    badge: null
},

// ═══════════════════════════════════════════════════════════════
// CONSEJOS IMPORTANTES
// ═══════════════════════════════════════════════════════════════

/*
✅ BUENAS PRÁCTICAS:

1. ID único: Usa minúsculas y guiones (office-2024, not Office-2024)
2. Nombres claros: Incluye versión o año si aplica
3. Descripciones breves: Máximo 80-100 caracteres
4. Características: 3-4 es ideal, máximo 5
5. Precios realistas: Compara con el mercado
6. Ratings: Sé honesto, 4.5-5.0 solo para lo mejor
7. Badges: No abuses, usa solo en 10-20% de productos

❌ ERRORES COMUNES:

1. IDs duplicados → El producto no aparecerá
2. Categoría incorrecta → Error en el catálogo
3. Precio con $ o comas → Error de JavaScript
4. Falta de comas entre productos → Todo se rompe
5. Características muy largas → Diseño se rompe
6. Demasiados badges → Pierde efectividad

🔧 CÓMO AGREGAR TU PRODUCTO:

1. Abre datos.js
2. Busca el array 'productos: ['
3. Busca tu categoría o el final del array
4. Pega tu nuevo producto CON LA COMA al final
5. Guarda el archivo
6. Recarga el navegador (Ctrl + F5)
7. ¡Listo!

📝 FORMATO DE LA COMA:

productos: [
    {
        // producto 1
    },  ← ⚠️ COMA AQUÍ
    {
        // producto 2
    },  ← ⚠️ COMA AQUÍ
    {
        // producto 3
    }   ← ⚠️ SIN COMA EN EL ÚLTIMO
]

*/

// ═══════════════════════════════════════════════════════════════
// ¿NECESITAS AYUDA?
// ═══════════════════════════════════════════════════════════════

/*
Si tienes problemas:
1. Abre la consola del navegador (F12)
2. Busca errores en rojo
3. Verifica las comas y comillas
4. Compara con los ejemplos de arriba
5. Contacta al soporte si persiste el error
*/
