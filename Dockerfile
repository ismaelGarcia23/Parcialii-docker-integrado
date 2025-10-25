FROM node:18-alpine

# Agregar usuario no root para más seguridad
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias de producción
RUN npm install --only=production && \
    npm cache clean --force

# Copiar el código fuente
COPY . .

# Cambiar propiedad de los archivos al usuario no root
RUN chown -R appuser:appgroup /app

# Cambiar al usuario no root
USER appuser

# Exponer puerto
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "src/server.js"]