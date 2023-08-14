# Utiliza una imagen base de Node.js
FROM node:20.1.0

# Establece el directorio de trabajo en la imagen
WORKDIR /app

# Copia el archivo package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia los archivos de la aplicación al directorio de trabajo en la imagen
COPY . .

# Expone el puerto en el que la aplicación Nest.js estará escuchando
EXPOSE 3000

# Establece variables de entorno para la conexión a la base de datos MySQL


# Comando para iniciar la aplicación Nest.js
CMD ["npm", "run", "start:prod"]
