import { Router } from 'express';

const router = Router();

//======== { Método de Hola Mundo } ========
router.get('/HolaMundo', (req, res) => {
    res.json({ message: "Hola Mundo" });
});
//======== { Método de Hola Mundo } ========

export default router;