const express = require('express');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Welcome to the User API');
});

app.get('/health', (req, res) => {
    res.status(200).send('API is healthy');
});

module.exports = app;