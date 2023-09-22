import express from 'express';
import HolaMundo from './routers/HolaMundo.js';

const app = express();

app.use(express.json());  
app.use(express.urlencoded({ extended: true }));

// Usa el router en tu aplicación
app.use('/', HolaMundo);

// Usa el puerto proporcionado en el entorno o el predeterminado a 3000
const port = process.env.PORT || 3000;

// Escucha en `port` y 0.0.0.0
app.listen(port, "0.0.0.0", function () {
    console.log(`La aplicación está escuchando en http://localhost:${port}`);
});

