const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/users', userRoutes);

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

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});