const express = require('express');
const router = express.Router();
const charactersController = require('../../controllers/api/charactersController');

//Middleware

const uploadFile = require('../../middlewares/multerMiddleware');


//Rutas
//Listado de todos los personajes
router.get('/', charactersController.list);
//Detalle del personaje
router.get('/:id', charactersController.detail);
//Agregar un personaje
router.post('/create', uploadFile.single('avatar'), charactersController.create);
//Modificar un personaje
router.put('/update/:id', charactersController.update);
//Eliminar un personaje
router.delete('/delete/:id', charactersController.destroy);
//Buscar un personaje
router.get('/search', charactersController.search);

module.exports = router;