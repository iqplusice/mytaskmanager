require('dotenv').config();

const express = require('express');
const PORT = process.env.PORT || 5000;
const routes = require('./routes/routes')

const app = express();

app.use(express.json());
app.use('/api', routes);

app.listen(3000, () => {
    console.log(`Server Started at ${PORT}`)
});