require('dotenv').config();

const express = require('express');
const sequelize = require('./database');
const bodyParser = require('body-parser');
//const routes = require('./routes/routes')
const userroutes = require('./routes/usersroute');

//sequelize.sync().then(() => console.log('Database is ready'));

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
//app.use('/api', routes);
app.use('/user', userroutes);

sequelize.authenticate().then(() => {
    app.listen(3000, () => {
        console.log(`Server Started at ${PORT}`)
    })
});