# Proyecto final Backend Node JS para Talento Tech

Una API Rest desarrollada con Node.js y Express para la gestión de productos con la posibilidad de leer, Crear, Actualizar y Eliminar, con autenticación y conexión a Firebase.

## 📘 Tecnologías utilizadas

- Node.js
- JavaScript (ES)
- Express (framework web para Node.js)
- Firebase (Firestore + Authentication)
- (Opcional) configuración para despliegue vía Vercel — por el archivo vercel.json

 ## 🛠️ Instalación

 1. Clonar el repositorio:

     ```bash
    git clone https://github.com/Pablo-A97/Proyecto_Backend-Talento_Tech.git
    cd Proyecto_Backend-Talento_Tech
    ```
2. Instalar dependencias:

   ```bash
   npm install
     
3. Iniciar el servidor:

    ```bash
   npm start
   ```

## 🔗 Endpoints

- `GET /api/products` → Lista todos los productos
- `GET /api/products/:id` → Obtiene un producto por ID
- `POST /api/products/create` → Crea un nuevo producto
- `DELETE /api/products/:id` → Elimina un producto por ID
