//All Requirements
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const cors = require('cors');

app.use(bodyParser.json());
//Imports

const sensoresRoute = require('./rotas/sensores');
app.use('/sensores', sensoresRoute)

//Middlewares
app.use(cors());




//Routing
//Using just to set a baseic response for home page
app.get('/', (req,res) => {
res.send('Home Page Landing')
});



//connecting to DB
mongoose.connect(process.env.DB_CONNECT, () => {
    console.log("Conectado com  o BD"); // CONNECT COM STORAGE NO .ENV -> para fins de teste ele sera subido juntamente aos outros arquivos
});








//listening to 3000
app.listen(3000);