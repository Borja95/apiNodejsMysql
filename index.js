const express = require('express');
const bodyParser = require('body-parser');
const personajeRoutes = require('./src/routes/personajeRoutes');

const app = express();
const port = 3002;

app.use(bodyParser.json());

//Rutas
app.use('/api/personajes', personajeRoutes);

//iniciar el servidor

app.listen(port, ()=>{
    console.log("Servidor iniciado en http://localhost:" + port);
});


