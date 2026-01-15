/* ═══════════════════════════════════════════════════════════════
   MEXICOPOLY - APPS | BASE DE DATOS
   ═══════════════════════════════════════════════════════════════
   
   CÓMO AGREGAR/EDITAR PRODUCTOS:
   
   1. Busca la sección de tu categoría en el array 'productos'
   2. Copia un producto existente y modifica sus datos
   3. Campos disponibles:
      - id: identificador único (ej: "office-2024")
      - nombre: nombre del producto
      - categoria: código de categoría (ver lista abajo)
      - icono: emoji del producto
      - descripcion: descripción corta
      - caracteristicas: array de features
      - precio: precio en MXN (número sin símbolo)
      - rating: calificación de 1-5
      - badge: null, "destacado", "top", "nuevo", "oferta", "hot"
      
   CATEGORÍAS DISPONIBLES:
   - ofimatica
   - diseno
   - seguridad
   - juegos
   - desarrollo
   - multimedia
   - utilidades
   - educacion
   ═══════════════════════════════════════════════════════════════ */

const DATOS = {
    // ═══════════════════════════════════════════════════════════════
    // CONFIGURACIÓN GENERAL
    // ═══════════════════════════════════════════════════════════════
    config: {
        nombre: "MexicoPoly - Apps",
        whatsapp: "527296901573",
        telefono: "+52 729 690 1573",
        email: "ventas@mexicopoly.com"
    },

    // ═══════════════════════════════════════════════════════════════
    // CATEGORÍAS
    // ═══════════════════════════════════════════════════════════════
    categorias: [
        { id: "ofimatica", nombre: "Ofimática", icono: "📊", color: "#3b82f6" },
        { id: "diseno", nombre: "Diseño Gráfico", icono: "🎨", color: "#ec4899" },
        { id: "seguridad", nombre: "Seguridad", icono: "🔒", color: "#10b981" },
        { id: "juegos", nombre: "Juegos", icono: "🎮", color: "#8b5cf6" },
        { id: "desarrollo", nombre: "Desarrollo", icono: "💻", color: "#06b6d4" },
        { id: "multimedia", nombre: "Multimedia", icono: "🎬", color: "#f59e0b" },
        { id: "utilidades", nombre: "Utilidades", icono: "🛠️", color: "#6366f1" },
        { id: "educacion", nombre: "Educación", icono: "📚", color: "#14b8a6" }
    ],

    // ═══════════════════════════════════════════════════════════════
    // PRODUCTOS
    // ═══════════════════════════════════════════════════════════════
    productos: [
        // 📊 OFIMÁTICA
        {
            id: "office-2024",
            nombre: "Microsoft Office 2024 Professional Plus",
            categoria: "ofimatica",
            icono: "📄",
            descripcion: "Suite completa de Office con Word, Excel, PowerPoint, Outlook y más",
            caracteristicas: [
                "Licencia de por vida",
                "Todas las aplicaciones incluidas",
                "Compatible con Windows 10/11",
                "Soporte técnico incluido"
            ],
            precio: 499,
            rating: 4.9,
            badge: "destacado"
        },
        {
            id: "office-365",
            nombre: "Microsoft 365 Personal",
            categoria: "ofimatica",
            icono: "☁️",
            descripcion: "Suscripción anual a Office en la nube con 1TB de OneDrive",
            caracteristicas: [
                "Actualizaciones automáticas",
                "1TB almacenamiento OneDrive",
                "Apps para móvil incluidas",
                "Soporte premium"
            ],
            precio: 899,
            rating: 4.8,
            badge: "top"
        },
        {
            id: "office-home",
            nombre: "Office Home & Student 2021",
            categoria: "ofimatica",
            icono: "🎓",
            descripcion: "Versión educativa de Office con Word, Excel y PowerPoint",
            caracteristicas: [
                "Licencia permanente",
                "Ideal para estudiantes",
                "1 PC o Mac",
                "Actualizaciones de seguridad"
            ],
            precio: 349,
            rating: 4.7,
            badge: null
        },
        {
            id: "office-mac",
            nombre: "Office 2021 para Mac",
            categoria: "ofimatica",
            icono: "🍎",
            descripcion: "Suite Office optimizada para macOS",
            caracteristicas: [
                "Diseñado para Mac",
                "Todas las apps principales",
                "Licencia de por vida",
                "Integración con iCloud"
            ],
            precio: 549,
            rating: 4.8,
            badge: null
        },
        {
            id: "project-professional",
            nombre: "Microsoft Project Professional 2021",
            categoria: "ofimatica",
            icono: "📋",
            descripcion: "Gestión de proyectos profesional",
            caracteristicas: [
                "Gestión avanzada de proyectos",
                "Diagramas de Gantt",
                "Informes personalizados",
                "Integración con Office"
            ],
            precio: 799,
            rating: 4.6,
            badge: null
        },
        {
            id: "visio-professional",
            nombre: "Microsoft Visio Professional 2021",
            categoria: "ofimatica",
            icono: "📐",
            descripcion: "Diagramas y organigramas profesionales",
            caracteristicas: [
                "Plantillas profesionales",
                "Diagramas de flujo avanzados",
                "Exportación múltiple",
                "Colaboración en equipo"
            ],
            precio: 699,
            rating: 4.7,
            badge: null
        },

        // 🎨 DISEÑO GRÁFICO
        {
            id: "photoshop-2024",
            nombre: "Adobe Photoshop 2024",
            categoria: "diseno",
            icono: "🖼️",
            descripcion: "La herramienta #1 de edición de imágenes y diseño digital",
            caracteristicas: [
                "IA generativa incluida",
                "Filtros neuronales",
                "Herramientas profesionales",
                "Actualizaciones constantes"
            ],
            precio: 649,
            rating: 4.9,
            badge: "hot"
        },
        {
            id: "illustrator-2024",
            nombre: "Adobe Illustrator 2024",
            categoria: "diseno",
            icono: "✏️",
            descripcion: "Diseño vectorial profesional para logos, ilustraciones y más",
            caracteristicas: [
                "Gráficos vectoriales",
                "Herramientas de precisión",
                "Exportación multi-formato",
                "Integración con Creative Cloud"
            ],
            precio: 649,
            rating: 4.8,
            badge: "destacado"
        },
        {
            id: "creative-cloud",
            nombre: "Adobe Creative Cloud All Apps",
            categoria: "diseno",
            icono: "🎨",
            descripcion: "Todas las aplicaciones de Adobe en un solo paquete",
            caracteristicas: [
                "+20 apps incluidas",
                "Photoshop, Illustrator, Premiere",
                "100GB almacenamiento cloud",
                "Fuentes y recursos ilimitados"
            ],
            precio: 1499,
            rating: 5.0,
            badge: "top"
        },
        {
            id: "indesign-2024",
            nombre: "Adobe InDesign 2024",
            categoria: "diseno",
            icono: "📰",
            descripcion: "Diseño editorial y maquetación profesional",
            caracteristicas: [
                "Maquetación avanzada",
                "Publicaciones digitales",
                "Preflight integrado",
                "Exportación PDF/EPUB"
            ],
            precio: 649,
            rating: 4.7,
            badge: null
        },
        {
            id: "coreldraw-2024",
            nombre: "CorelDRAW Graphics Suite 2024",
            categoria: "diseno",
            icono: "🎯",
            descripcion: "Suite completa de diseño vectorial y edición de fotos",
            caracteristicas: [
                "Alternativa a Adobe",
                "Diseño vectorial completo",
                "Photo-Paint incluido",
                "Licencia perpetua"
            ],
            precio: 799,
            rating: 4.6,
            badge: "nuevo"
        },
        {
            id: "acrobat-pro",
            nombre: "Adobe Acrobat Pro DC",
            categoria: "diseno",
            icono: "📑",
            descripcion: "Creación y edición avanzada de PDFs",
            caracteristicas: [
                "Edición completa de PDF",
                "OCR integrado",
                "Firmas electrónicas",
                "Formularios interactivos"
            ],
            precio: 449,
            rating: 4.7,
            badge: null
        },

        // 🔒 SEGURIDAD
        {
            id: "kaspersky-total",
            nombre: "Kaspersky Total Security",
            categoria: "seguridad",
            icono: "🛡️",
            descripcion: "Protección total para todos tus dispositivos",
            caracteristicas: [
                "Antivirus multicapa",
                "VPN incluida",
                "Control parental",
                "Hasta 5 dispositivos"
            ],
            precio: 399,
            rating: 4.8,
            badge: "destacado"
        },
        {
            id: "norton-360",
            nombre: "Norton 360 Deluxe",
            categoria: "seguridad",
            icono: "🔐",
            descripcion: "Protección integral con VPN y almacenamiento en la nube",
            caracteristicas: [
                "Antivirus + VPN",
                "50GB backup cloud",
                "Protección identidad",
                "Hasta 5 dispositivos"
            ],
            precio: 449,
            rating: 4.7,
            badge: "top"
        },
        {
            id: "bitdefender-total",
            nombre: "Bitdefender Total Security",
            categoria: "seguridad",
            icono: "⚔️",
            descripcion: "Máxima protección con mínimo impacto en rendimiento",
            caracteristicas: [
                "Detección IA avanzada",
                "Anti-ransomware",
                "VPN incluida (200MB/día)",
                "Hasta 5 dispositivos"
            ],
            precio: 379,
            rating: 4.9,
            badge: null
        },
        {
            id: "eset-internet",
            nombre: "ESET Internet Security",
            categoria: "seguridad",
            icono: "🔒",
            descripcion: "Protección ligera y eficaz para tu PC",
            caracteristicas: [
                "Bajo consumo recursos",
                "Protección banking",
                "Anti-phishing",
                "1 dispositivo"
            ],
            precio: 299,
            rating: 4.6,
            badge: null
        },
        {
            id: "malwarebytes-premium",
            nombre: "Malwarebytes Premium",
            categoria: "seguridad",
            icono: "🚨",
            descripcion: "Especialista en detección y eliminación de malware",
            caracteristicas: [
                "Anti-malware avanzado",
                "Protección en tiempo real",
                "Anti-exploit",
                "Anti-ransomware"
            ],
            precio: 349,
            rating: 4.7,
            badge: "nuevo"
        },

        // 🎮 JUEGOS
        {
            id: "minecraft-java",
            nombre: "Minecraft Java Edition",
            categoria: "juegos",
            icono: "⛏️",
            descripcion: "La versión original de Minecraft para PC con mods ilimitados",
            caracteristicas: [
                "Cuenta premium original",
                "Acceso a servidores",
                "Mods y mapas ilimitados",
                "Multiplayer incluido"
            ],
            precio: 199,
            rating: 4.9,
            badge: "hot"
        },
        {
            id: "gta-v",
            nombre: "Grand Theft Auto V Premium",
            categoria: "juegos",
            icono: "🏎️",
            descripcion: "GTA V completo con GTA Online y pack Criminal Enterprise",
            caracteristicas: [
                "Modo historia completo",
                "GTA Online incluido",
                "Pack Criminal Enterprise",
                "Actualizaciones gratis"
            ],
            precio: 299,
            rating: 4.8,
            badge: "destacado"
        },
        {
            id: "fifa-24",
            nombre: "EA Sports FC 24",
            categoria: "juegos",
            icono: "⚽",
            descripcion: "El nuevo nombre del mejor juego de fútbol",
            caracteristicas: [
                "Ultimate Team mejorado",
                "HyperMotionV",
                "Licencias oficiales",
                "Modos de juego variados"
            ],
            precio: 649,
            rating: 4.7,
            badge: "nuevo"
        },
        {
            id: "rdr2",
            nombre: "Red Dead Redemption 2",
            categoria: "juegos",
            icono: "🤠",
            descripcion: "Épica aventura del viejo oeste con gráficos impresionantes",
            caracteristicas: [
                "Historia inmersiva",
                "Mundo abierto detallado",
                "Online incluido",
                "60+ horas gameplay"
            ],
            precio: 349,
            rating: 5.0,
            badge: "top"
        },
        {
            id: "call-of-duty",
            nombre: "Call of Duty: Modern Warfare III",
            categoria: "juegos",
            icono: "🎯",
            descripcion: "El shooter más popular en su última entrega",
            caracteristicas: [
                "Campaña cinematográfica",
                "Multijugador competitivo",
                "Warzone integrado",
                "Battle Pass incluido"
            ],
            precio: 899,
            rating: 4.6,
            badge: "nuevo"
        },
        {
            id: "cyberpunk-2077",
            nombre: "Cyberpunk 2077: Phantom Liberty",
            categoria: "juegos",
            icono: "🌃",
            descripcion: "RPG futurista con expansión Phantom Liberty incluida",
            caracteristicas: [
                "Juego base + DLC",
                "Mundo abierto RPG",
                "Gráficos next-gen",
                "Historia ramificada"
            ],
            precio: 449,
            rating: 4.8,
            badge: null
        },
        {
            id: "forza-horizon-5",
            nombre: "Forza Horizon 5",
            categoria: "juegos",
            icono: "🏁",
            descripcion: "El mejor juego de carreras en mundo abierto ambientado en México",
            caracteristicas: [
                "Cientos de autos",
                "Mundo abierto México",
                "Multiplayer masivo",
                "Clima dinámico"
            ],
            precio: 549,
            rating: 4.9,
            badge: null
        },
        {
            id: "steam-gift",
            nombre: "Steam Gift Card $500 MXN",
            categoria: "juegos",
            icono: "💳",
            descripcion: "Tarjeta regalo para la tienda de Steam",
            caracteristicas: [
                "Código digital instantáneo",
                "Sin fecha de expiración",
                "Miles de juegos disponibles",
                "Ofertas y descuentos"
            ],
            precio: 500,
            rating: 5.0,
            badge: null
        },
        {
            id: "ff-341-diamonds",
            nombre: "Free Fire 341 Diamantes",
            categoria: "juegos",
            icono: "💎",
            descripcion: "Recarga de diamantes para Free Fire LATAM, entrega rápida",
            caracteristicas: [
                "341 diamantes",
                "Entrega en 1-3 horas",
                "Para cuentas LATAM",
                "Recarga segura"
            ],
            precio: 120,
            rating: 4.8,
            badge: null
        },
        {
            id: "ff-572-diamonds",
            nombre: "Free Fire 572 Diamantes",
            categoria: "juegos",
            icono: "💎",
            descripcion: "Recarga de 572 diamantes para Free Fire LATAM",
            caracteristicas: [
                "Entrega en 1-3 horas",
                "572 diamantes",
                "Servidor LATAM",
                "Proceso seguro"
            ],
            precio: 190,
            rating: 4.9,
            badge: null
        },
        {
            id: "ff-1166-diamonds",
            nombre: "Free Fire 1166 Diamantes",
            categoria: "juegos",
            icono: "💎",
            descripcion: "Recarga de diamantes para Free Fire LATAM",
            caracteristicas: [
                "1166 diamantes",
                "Entrega en 1-3 horas",
                "Región LATAM",
                "Recarga directa"
            ],
            precio: 350,
            rating: 4.9,
            badge: null
        },
        {
            id: "ff-2398-diamonds",
            nombre: "Free Fire 2398 Diamantes",
            categoria: "juegos",
            icono: "💎",
            descripcion: "Recarga de diamantes para Free Fire LATAM",
            caracteristicas: [
                "2398 diamantes",
                "Entrega en 1-3 horas",
                "Región LATAM",
                "Soporte incluido"
            ],
            precio: 650,
            rating: 4.9,
            badge: "hot"
        },

        // 💻 DESARROLLO
        {
            id: "visual-studio-pro",
            nombre: "Visual Studio 2022 Professional",
            categoria: "desarrollo",
            icono: "👨‍💻",
            descripcion: "IDE profesional de Microsoft para desarrollo multiplataforma",
            caracteristicas: [
                "Soporte .NET, C++, Python",
                "IntelliCode con IA",
                "Azure DevOps incluido",
                "Debugging avanzado"
            ],
            precio: 899,
            rating: 4.8,
            badge: "destacado"
        },
        {
            id: "jetbrains-all",
            nombre: "JetBrains All Products Pack",
            categoria: "desarrollo",
            icono: "🚀",
            descripcion: "Todos los IDEs de JetBrains en un solo paquete",
            caracteristicas: [
                "IntelliJ IDEA Ultimate",
                "PyCharm, WebStorm, PhpStorm",
                "+10 IDEs incluidos",
                "Licencia anual"
            ],
            precio: 1299,
            rating: 4.9,
            badge: "top"
        },
        {
            id: "sublime-text",
            nombre: "Sublime Text 4",
            categoria: "desarrollo",
            icono: "📝",
            descripcion: "Editor de código ligero y potente",
            caracteristicas: [
                "Súper rápido",
                "Multi-cursor",
                "Miles de plugins",
                "Licencia perpetua"
            ],
            precio: 299,
            rating: 4.7,
            badge: null
        },
        {
            id: "github-copilot",
            nombre: "GitHub Copilot Individual",
            categoria: "desarrollo",
            icono: "🤖",
            descripcion: "Asistente de código con IA de OpenAI",
            caracteristicas: [
                "Autocompletado inteligente",
                "Sugerencias de código",
                "Compatible con todos los IDEs",
                "Suscripción anual"
            ],
            precio: 799,
            rating: 4.8,
            badge: "nuevo"
        },
        {
            id: "postman",
            nombre: "Postman Professional",
            categoria: "desarrollo",
            icono: "📮",
            descripcion: "Plataforma colaborativa para desarrollo de APIs",
            caracteristicas: [
                "Testing de APIs",
                "Documentación automática",
                "Colaboración en equipo",
                "Monitoreo incluido"
            ],
            precio: 649,
            rating: 4.6,
            badge: null
        },

        // 🎬 MULTIMEDIA
        {
            id: "premiere-pro",
            nombre: "Adobe Premiere Pro 2024",
            categoria: "multimedia",
            icono: "🎥",
            descripcion: "Edición de video profesional estándar de la industria",
            caracteristicas: [
                "Edición multicámara",
                "Efectos Lumetri Color",
                "IA Auto Reframe",
                "Integración After Effects"
            ],
            precio: 649,
            rating: 4.9,
            badge: "destacado"
        },
        {
            id: "after-effects",
            nombre: "Adobe After Effects 2024",
            categoria: "multimedia",
            icono: "💫",
            descripcion: "Animación y efectos visuales profesionales",
            caracteristicas: [
                "Motion graphics",
                "Efectos visuales VFX",
                "Composición avanzada",
                "Plugins ilimitados"
            ],
            precio: 649,
            rating: 4.8,
            badge: "top"
        },
        {
            id: "fl-studio",
            nombre: "FL Studio Producer Edition",
            categoria: "multimedia",
            icono: "🎵",
            descripcion: "Estación de trabajo de audio digital para producción musical",
            caracteristicas: [
                "Instrumentos ilimitados",
                "Efectos profesionales",
                "Grabación multipista",
                "Actualizaciones gratis"
            ],
            precio: 799,
            rating: 4.9,
            badge: "hot"
        },
        {
            id: "davinci-resolve",
            nombre: "DaVinci Resolve Studio",
            categoria: "multimedia",
            icono: "🌈",
            descripcion: "Edición, color, efectos y audio en una sola aplicación",
            caracteristicas: [
                "Editor + corrector color",
                "Fusion VFX integrado",
                "Fairlight audio",
                "Licencia perpetua"
            ],
            precio: 899,
            rating: 4.8,
            badge: null
        },
        {
            id: "camtasia",
            nombre: "Camtasia 2024",
            categoria: "multimedia",
            icono: "📹",
            descripcion: "Grabación de pantalla y edición de video simplificada",
            caracteristicas: [
                "Grabación de pantalla",
                "Editor fácil de usar",
                "Animaciones incluidas",
                "Ideal para tutoriales"
            ],
            precio: 549,
            rating: 4.7,
            badge: null
        },
        {
            id: "ableton-live",
            nombre: "Ableton Live 11 Suite",
            categoria: "multimedia",
            icono: "🎹",
            descripcion: "DAW profesional para producción y performance en vivo",
            caracteristicas: [
                "Instrumentos Max for Live",
                "+70GB de sonidos",
                "Session View único",
                "Ideal para DJ/Productores"
            ],
            precio: 1199,
            rating: 4.9,
            badge: null
        },

        // 🛠️ UTILIDADES
        {
            id: "winrar",
            nombre: "WinRAR 7.0",
            categoria: "utilidades",
            icono: "📦",
            descripcion: "El compresor de archivos más popular del mundo",
            caracteristicas: [
                "Compresión RAR/ZIP",
                "Reparación de archivos",
                "Cifrado AES-256",
                "Licencia de por vida"
            ],
            precio: 149,
            rating: 4.7,
            badge: null
        },
        {
            id: "ccleaner-pro",
            nombre: "CCleaner Professional Plus",
            categoria: "utilidades",
            icono: "🧹",
            descripcion: "Optimización y limpieza completa de tu PC",
            caracteristicas: [
                "Limpieza automática",
                "Optimizador de registro",
                "Actualizador de drivers",
                "Soporte prioritario"
            ],
            precio: 299,
            rating: 4.6,
            badge: null
        },
        {
            id: "vmware-workstation",
            nombre: "VMware Workstation Pro",
            categoria: "utilidades",
            icono: "💾",
            descripcion: "Virtualización de sistemas operativos en tu PC",
            caracteristicas: [
                "Múltiples VMs simultáneas",
                "Snapshots ilimitados",
                "Red virtual avanzada",
                "Compatible con todo"
            ],
            precio: 749,
            rating: 4.8,
            badge: "destacado"
        },
        {
            id: "acronis-true",
            nombre: "Acronis True Image 2024",
            categoria: "utilidades",
            icono: "💿",
            descripcion: "Backup y clonación completa de disco",
            caracteristicas: [
                "Backup automático",
                "Clonación de disco",
                "Recuperación universal",
                "500GB cloud storage"
            ],
            precio: 649,
            rating: 4.7,
            badge: null
        },
        {
            id: "teamviewer",
            nombre: "TeamViewer Business",
            categoria: "utilidades",
            icono: "🖥️",
            descripcion: "Control remoto y soporte técnico profesional",
            caracteristicas: [
                "Acceso remoto 24/7",
                "Transferencia archivos",
                "Reuniones online",
                "Multi-dispositivo"
            ],
            precio: 849,
            rating: 4.6,
            badge: null
        },

        // 📚 EDUCACIÓN
        {
            id: "rosetta-stone",
            nombre: "Rosetta Stone Lifetime",
            categoria: "educacion",
            icono: "🗣️",
            descripcion: "Aprende idiomas con el método más efectivo del mundo",
            caracteristicas: [
                "25 idiomas disponibles",
                "Reconocimiento de voz",
                "Lecciones interactivas",
                "Acceso de por vida"
            ],
            precio: 899,
            rating: 4.8,
            badge: "top"
        },
        {
            id: "matlab",
            nombre: "MATLAB Student Edition",
            categoria: "educacion",
            icono: "📐",
            descripcion: "Ambiente de programación para cálculo numérico y análisis",
            caracteristicas: [
                "Computación numérica",
                "Visualización de datos",
                "Machine Learning",
                "Licencia estudiantil"
            ],
            precio: 1199,
            rating: 4.7,
            badge: null
        },
        {
            id: "grammarly-premium",
            nombre: "Grammarly Premium",
            categoria: "educacion",
            icono: "✍️",
            descripcion: "Asistente de escritura con IA para mejorar tu inglés",
            caracteristicas: [
                "Corrección avanzada",
                "Sugerencias de estilo",
                "Detector de plagio",
                "Suscripción anual"
            ],
            precio: 599,
            rating: 4.8,
            badge: "nuevo"
        },
        {
            id: "duolingo-super",
            nombre: "Duolingo Super Family",
            categoria: "educacion",
            icono: "🦉",
            descripcion: "Aprende idiomas de forma divertida sin anuncios",
            caracteristicas: [
                "Sin anuncios",
                "Lecciones ilimitadas",
                "Hasta 6 cuentas",
                "Modo offline"
            ],
            precio: 449,
            rating: 4.6,
            badge: null
        },
        {
            id: "wolfram-alpha",
            nombre: "Wolfram Alpha Pro",
            categoria: "educacion",
            icono: "🧮",
            descripcion: "Motor computacional de conocimiento experto",
            caracteristicas: [
                "Solución de problemas",
                "Análisis de datos",
                "Generador de informes",
                "Suscripción anual"
            ],
            precio: 349,
            rating: 4.7,
            badge: null
        }
    ]
};
