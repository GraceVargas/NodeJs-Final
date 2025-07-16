# API REST Node.js + Express + Firebase

Este proyecto es una API REST simple construida con **Node.js** y **Firebase**, que permite realizar operaciones CRUD sobre productos. Está desplegada en **Vercel** y utiliza **JSON Web Tokens (JWT)** para autenticación básica con un usuario hardcodeado.

## 🚀 Deploy

API disponible en: [https://api-rest-node-project.vercel.app](https://api-rest-node-project.vercel.app)

## 🛠 Tecnologías utilizadas

- Node.js
- Firebase (Firestore)
- Express.js
- JSON Web Token (`jsonwebtoken`)
- dotenv
- Vercel

## Variables de entorno a utilizar

FIREBASE_API_KEY=XXXXX
FIREBASE_AUTH_DOMAIN=XXXXX
FIREBASE_PROJECT_ID=XXXXXX
FIREBASE_STOREAGE_BUCKET=XXXXXXX
FIREBASE_MESSAGING_SENDER_ID=XXXXXXXX
FIREBASE_APP_ID=XXXXXXXX
JWT_SECRET_KEY=XXXXXXXX
PORT=XXXXXX

## 📦 Endpoints

Todos los endpoints están bajo `/api/products`. Se requiere autenticación con token para acceder.

### 🔐 Autenticación

Para autenticarse, enviar un POST a `/auth/login` con:

```json
{
  "email": "user@gmail.com",
  "password": "strongPass123"
}
```
Si los datos son correctos, se devuelve un token JWT que debe usarse en los headers:
Authorization: Bearer <token>

GET /api/products devuelve todos los productos.
GET /api/products/:id devuelve el producto con el ID indicado.
POST /api/products/create recibe en el cuerpo (body) de la petición la información sobre el nuevo producto para ser guardado en el servicio de datos en la nube.
  Ejemplo:  {
      "nombre": "resma",
      "precio": 4500,
      "categoria": "libreria",
      "disponible": true
    }
DELETE /api/products/:id elimina el producto con el ID indicado.
POST /auth/login recibe las credenciales de usuario en el cuerpo (body) de la petición y devuelve el Bearer token si son válidas o un error de autenticación en caso contrario.

