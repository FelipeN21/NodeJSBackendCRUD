const express = require('express');

const app = express();

//Routing
app.get('/', (req,res) => {
res.send('Teste')
});










//listening to 3000
app.listen(3000);