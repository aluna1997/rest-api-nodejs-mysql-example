// La biblioteca express nos permite manejar las peticiones
// además de el enrutamiento
const express = require('express');
const app = express();


// Configuraciones de servidor
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'),() => {
    console.log('Server on port',app.get('port'));
});


// Middlewares
app.use(express.json());

//Routes
app.use(require('./routes/empoyes'));
