require('dotenv').config();
const express = require('express');
const userRoutes = require('./src/routes/userRoutes');
const { logger } = require('./src/middleware/logger');
const { errorHandler } = require('./src/middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
    res.send(`Welcome to ${process.env.APP_NAME}`);
});

// User routes
app.use('/api/users', userRoutes);

// Error handler middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

