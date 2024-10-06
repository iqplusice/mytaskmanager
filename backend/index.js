require('dotenv').config();

const express = require('express');
const sequelize = require('./database');
const bodyParser = require('body-parser');
const cors = require('cors');

// Define routes
const userroutes = require('./routes/usersroute');
const taskroutes = require('./routes/tasksroute');

//sequelize.sync().then(() => console.log('Database is ready'));

// Cors Options
const corsOptions = {
    origin: '*',//'https://www.nileshblog.tech/',//(https://your-client-app.com)
    optionsSuccessStatus: 200,
};

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/user', userroutes);
app.use('/task', taskroutes);

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server Started at ${PORT}`)
    })
});