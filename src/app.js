import express from 'express';
import HolaMundo from './routers/HolaMundo.js';

const app = express();

app.use(express.json());  
app.use(express.urlencoded({ extended: true }));

// Usa el router en tu aplicación
app.use('/', HolaMundo);

app.listen(8080, () => {
    console.log('La aplicación está escuchando en http://localhost:8080');
});
