const express = require('express');
const router = express.Router();
const charactersController = require('../../controllers/api/charactersController');

//Middlewares

const verifyToken = require('../../middlewares/verifyToken');
const uploadFile = require('../../middlewares/multerMiddleware');


//Rutas

//Buscar un personaje
router.get('/search', verifyToken , charactersController.search);
//Listado de todos los personajes
router.get('/', verifyToken , charactersController.list);
//Detalle del personaje
router.get('/:id', verifyToken , charactersController.detail);
//Agregar un personaje
router.post('/create', verifyToken , uploadFile.single('avatar'), charactersController.create);
//Modificar un personaje
router.put('/update/:id', verifyToken , charactersController.update);
//Eliminar un personaje
router.delete('/delete/:id', verifyToken , charactersController.destroy);


module.exports = router;