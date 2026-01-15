# Configuración del Backend

Este directorio contendrá los archivos de configuración del backend.

## Archivos Sugeridos

- `database.js` - Configuración de la base de datos
- `server.js` - Configuración del servidor
- `jwt.js` - Configuración de autenticación JWT
- `email.js` - Configuración de correo electrónico
- `.env.example` - Ejemplo de variables de entorno

## Ejemplo de Estructura

```javascript
// database.js
module.exports = {
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'mexicopoly',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
};

// server.js
module.exports = {
  port: process.env.PORT || 3000,
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:8080'
  }
};
```

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto backend con:

```env
# Base de datos
DB_HOST=localhost
DB_PORT=5432
DB_NAME=mexicopoly
DB_USER=tu_usuario
DB_PASSWORD=tu_password

# Servidor
PORT=3000
NODE_ENV=development

# Frontend
FRONTEND_URL=http://localhost:8080

# JWT
JWT_SECRET=tu_clave_secreta_muy_segura
JWT_EXPIRATION=24h

# WhatsApp API (opcional)
WHATSAPP_TOKEN=tu_token_aqui
WHATSAPP_PHONE=527296901573
```

## Seguridad

⚠️ **IMPORTANTE**: 
- Nunca subas el archivo `.env` al repositorio
- Agrega `.env` al `.gitignore`
- Usa variables de entorno en producción
- Cambia las claves secretas en cada ambiente
