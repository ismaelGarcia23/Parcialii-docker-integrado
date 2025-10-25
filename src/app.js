const express = require('express');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorHandler');
const { initializeDatabase } = require('./config/database');

const app = express();

// Inicializar base de datos
initializeDatabase();

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);

// Rutas básicas
app.get('/', (req, res) => {
    res.json({
        estudiante: "Ismael Garcia",
        codigo: "gh22i04001",
        curso: "Implantación de Aplicaciones Web"
    });
});

app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'UP',
        timestamp: new Date(),
        service: 'User API'
    });
});

// Middleware de error (debe ir después de las rutas)
app.use(errorHandler);

module.exports = app;